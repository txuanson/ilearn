import { Avatar, Comment, Tooltip } from "antd";
import moment from "moment";
import React from "react";

const comment = [
  {
    name: "Jack D. ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia laudantium molestiae, nulla assumenda qui labore unde ut doloribus nisi?",
  },
  {
    name: "Vu D.Cong ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, non!",
  },
  {
    name: "Ngoc Huy",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum beatae labore vitae enim cumque?",
  },
  {
    name: "Xuan Son",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia laudantium molestiae, nulla assumenda qui labore unde ut doloribus nisi?",
  },
];

export default function ClassComment() {
  return (
    <div>
      {comment.map((item) => (
        <Comment
          author={<a>{item.name}</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={<p>{item.content}</p>}
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      ))}
    </div>
  );
}
