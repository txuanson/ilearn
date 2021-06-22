import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import MarkdownEditor from "@uiw/react-markdown-editor";
import MDEditor from "@uiw/react-md-editor";

export default function MdEditor({ content, setContent }) {
  return (
    <div className="">
      <MDEditor value={content} onChange={setContent} preview="edit" />
      {/* <MDEditor.Markdown source={content} /> */}
    </div>
  );
}
