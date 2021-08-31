import { Comment, Avatar, Collapse, Tooltip, Input, Tag } from "antd";
import Form from "antd/lib/form/Form";
import moment from "moment";
import { createElement, useState } from "react";
import { Link } from "react-router-dom";
import { repCommentSection } from "../../api/user";
import handleErrorApi from "../../utils/handleErrorApi";
const { Panel } = Collapse;

export default function CommentQA({ children, isChild , fetch}) {
  const [isReply, setIsReply] = useState(false);
  const [reply, setReply] = useState("");

  const onChange = (e) => {
    setReply(e.target.value);
  };

  const handleRep = async (event) => {
    if (event.key === 'Enter') {
      try {
        await repCommentSection({comment_id: children._id, content: reply});
        fetch();
    } catch (err) {
      handleErrorApi(err)
    }
    }
  }
  return (
    <>
      <Comment
        className="bg-white rounded-lg p-3 shadow-lg"
        actions={[
          <span
            onClick={() => {
              setIsReply(true);
            }}
          >
            Reply
            {isReply ? (
              <div className="max-w-full min-w-3/4 relative">
                <Input className = "max-w-full" onChange={onChange} addonBefore={children.user.name} onKeyDown={handleRep}></Input>
              </div>
            ) : (
              <></>
            )}
          </span>,
        ]}
        author={
          <Link to={"/profile/" + children.user._id}>{children.user.name}</Link>
        }
        avatar={
          <Avatar
            src={process.env.REACT_APP_BASE_HOST + "/" + children.user.avatar}
            alt=""
          />
        }
        content={<div className="border-solid">{children.content}</div>}
        datetime={
          <Tooltip title={moment(children.create_at).endOf("day").fromNow()}>
            <span>{moment(children.create_at).endOf("day").fromNow()}</span>
          </Tooltip>
        }
      >
        {/* {children} */}
      </Comment>
      {isChild ? (
        children.reply[0] ? (
          <Collapse ghost bordered="true">
            <Panel header="Show more">
              {children.reply.map((item) => (
                <div className="mb-3 ml-5">
                  <CommentQA children={item} isChild={false}></CommentQA>
                </div>
              ))}
            </Panel>
          </Collapse>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </>
  );
}
