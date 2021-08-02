const mongoose = require("mongoose");
const { HOST } = require("../../configs/env");
const { BadReqest, NotFound } = require("../../helpers/response");
const { asyncCatch, pagination } = require("../../helpers/utils");
const Comment = require("../../models/Comment");
const Section = require("../../models/Section");
const commentGetValidator = require("../../validators/commentGet.validator");
const commentPostValidator = require("../../validators/commentPost.validator");
const commentReplyValidator = require("../../validators/commentReply.validator");

const postComment = asyncCatch(async (req, res, next) => {
    const { error, value } = commentPostValidator.validate(req.body);
    if (error) {
        throw new BadReqest(error.message);
    }
    const { section_id, content } = value;

    const section = await Section.exists({ _id: section_id });
    if (section == false) {
        throw new NotFound("Section you are commenting on does not exists!");
    }

    const newComment = await Comment.create({
        user_id: req.user_data._id,
        section_id: section_id,
        content: content
    })

    // for FE append the new comment to the top
    const returnComment = await Comment.aggregate()
        .match({
            _id: newComment._id
        })
        .lookup({ from: 'accounts', localField: 'user_id', foreignField: '_id', as: 'user' })
        .unwind('user')
        .project({
            _id: 1,
            content: 1,
            user: {
                _id: 1,
                name: 1,
                username: 1,
                avatar: 1,
                role: 1
            },
            create_at: 1,
            reply: 1
        })
        .exec();
    res.send(returnComment[0])
});

const getComment = asyncCatch(async (req, res, next) => {
    const { error, value } = commentGetValidator.validate(req.query);

    if (error) {
        throw new BadReqest(error.message);
    }

    const { section_id, page, page_size } = value;

    const section = await Section.exists({ _id: section_id });
    if (section == false) {
        throw new NotFound("Section not found!");
    }

    const pagi = pagination(page, page_size);

    const items = await Comment.aggregate()
        .match({
            "section_id": new mongoose.Types.ObjectId(section_id)
        })
        .lookup({ from: 'accounts', localField: 'user_id', foreignField: '_id', as: 'user' })
        .lookup({ from: 'accounts', localField: 'reply.user_id', foreignField: '_id', as: 'reply.user' })
        .unwind('user')
        .project({
            _id: 1,
            content: 1,
            user: {
                _id: 1,
                name: 1,
                username: 1,
                avatar: 1,
                role: 1
            },
            create_at: 1,
            reply: {
                _id: 1,
                content: 1,
                create_at: 1,
                user:{
                    name: 1,
                    _id: 1,
                    username: 1,
                    role: 1,
                    avatar: 1
                }
            }
        })
        .limit(pagi.limit)
        .skip(pagi.skip)
        .exec();

    const items_count = await Comment.countDocuments({
        section_id: section_id
    });

    res.send({
        items,
        items_count
    })
});

const replyComment = asyncCatch(async (req, res, next) => {
    const { error, value } = commentReplyValidator.validate(req.body);
    if (error) {
        throw new BadReqest(error.message);
    }

    const { content, comment_id } = value;
    const comment = await Comment.exists({ _id: comment_id });
    if (comment == false) {
        throw new NotFound("Comment you are repling to is not exists!!");
    }

    await Comment.updateOne({
        _id: comment_id
    }, {
        $push: {
            reply: {
                content: content,
                user_id: req.user_data._id
            }
        }
    })

    const reply = await Comment.aggregate()
        .match({
            _id: new mongoose.Types.ObjectId(comment_id)
        })
        .project({
            _id: 0,
            a: { $arrayElemAt: ["$reply", -1] }
        })
        .lookup({ from: 'accounts', localField: 'a.user_id', foreignField: '_id', as: 'user' })
        .unwind("user")
        .project({
            _id: "$a._id",
            content: "$a.content",
            create_at: "$a.create_at",
            user:{
                _id: 1,
                name: 1,
                role: 1,
                username: 1,
                avatar: 1
            }
        })
        .exec()

    res.send(reply[0]);
});

module.exports = {
    get: getComment,
    post: postComment,
    reply: replyComment
}