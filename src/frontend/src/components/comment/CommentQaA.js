import { Comment, Avatar, Collapse, Tooltip, Input } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfileUser, repCommentSection } from "../../api/user";
import handleErrorApi from "../../utils/handleErrorApi";
const { Panel } = Collapse;

export default function CommentQA({ children, isChild , fetch, page}) {
  // const [isReply, setIsReply] = useState(false);
  const [reply, setReply] = useState("");
  const [profileUser, setProfileUser] = useState([]);

  const onChange = (e) => {
    setReply(e.target.value);
  };

  const handleRep = async (event) => {
    if (event.key === 'Enter') {
      try {
        await repCommentSection({comment_id: children._id, content: reply});
        setReply('');
        fetch(page);
    } catch (err) {
      handleErrorApi(err)
    }
    }
  }

  useEffect(async () => {
    try {
      const resProfile = await getProfileUser();
      setProfileUser(resProfile);
    } catch (err) {
      handleErrorApi(err);
    }
  }, []);
  return (
    <>
      <Comment
        className="bg-white rounded-lg p-3 shadow-lg"
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
          <Tooltip title={moment(children.create_at).fromNow()}>
            <span>{moment(children.create_at).fromNow()}</span>
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
      {isChild?(<>
        <Comment
        className="bg-white rounded-lg p-3 shadow-lg ml-9 mr-4 mt-3 py-1"
          avatar={
            <Avatar
              src={process.env.REACT_APP_BASE_HOST + "/" + profileUser.avatar}
              alt=""
            />
          }
          content={
            <Input onChange={onChange}
            onKeyDown={handleRep}
            value={reply}></Input>
          }/>
      </>):(<></>)}
    </>
  );
}
