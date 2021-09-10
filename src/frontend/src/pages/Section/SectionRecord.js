import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Layout, Tabs, Row, Col, Tag, Pagination, Button } from "antd";
import CommentQA from "../../components/comment/CommentQaA";
import { getAllCommentSection, getSectionInfo } from "../../api/user";
import handleErrorApi from "../../utils/handleErrorApi";
import EditComment from "../../components/comment/EditComment";
import moment from 'moment';

import {
  VideoCameraFilled
} from "@ant-design/icons";

const { TabPane } = Tabs;

export default function SectionRecord({ section_id, course_id }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState([]);
  const [page, setPage] = useState([]);
  const [itemCount, setItemCount] = useState(10);
  const page_size = 10;

  const fetchCourse = async () => {
    try {
      setLoading(true);
      const res = await getSectionInfo(course_id, section_id);
      setData(res);
      setLoading(false);
    } catch (err) {
      handleErrorApi(err);
    }
  };

  const fetchComment = async (page) => {
    try {
      setPage(page);
      const res = await getAllCommentSection(section_id, page, page_size);
      const { items, items_count } = res;
      setComment(items);
      setItemCount(items_count);
    } catch (err) {
      handleErrorApi(err);
    }
  };

  const handleNextPage = (value) => {
    // if (value <= 1) {
    //   setMinValue(0);
    //   setMaxValue(numberMaxComment);
    // } else {
    //   setMinValue((value - 1) * numberMaxComment);
    //   setMaxValue(value * numberMaxComment);
    // }
    fetchComment(value);
  };

  useEffect(() => {
    fetchCourse();
    fetchComment(1);
  }, []);

  function ShowVideo(props) {
    const hasVideo = props.hasVideo;
    if (hasVideo) {
      const video_code = data.section.video.split("/");
      const embed_video = "https://www.youtube.com/embed/" + video_code[video_code.length - 1];
      return (
        <div className="relative md:ml-10" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={embed_video}
            className="absolute inset-0 w-full h-full"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      );
    }
    return (
      <Tag color="#2db7f5" className="font-bold text-xl text-center">
        No video record in this section!
      </Tag>
    );
  }

  return (
    <>
      {loading && <></>}
      {!loading && (
        <>
        <div className="grid place-items-end md:h-16 h-0">
          <Button htmlType="submit" type="primary" className="hidden md:block z-30 mb-4 mr-4"> 
          <a href={data.section.join_url}>Join Zoom Meeting</a>
        </Button>
        </div>
      
        
          <Layout className="md:ml-20">
          <a href={data.section.join_url}>
          <Tag color="blue" className="text-center text-lg mb-2 w-full">
          <VideoCameraFilled style={{color:"#2db7f5"}} className="block md:hidden text-xl"/> {moment(data.section.start_time).format('MMMM Do YYYY, h:mm a')}
          </Tag>
          </a>
        
            <ShowVideo hasVideo={data.section.video} />
            <Row className="md:ml-10">
              <Col span={24}>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Document" key="1">
                    <article
                      className="prose lg:prose-md max-w-none px-2"
                      style={{ border: "solid" }}
                    >
                      <ReactMarkdown
                        children={data.section.content}
                        remarkPlugins={[gfm]}
                      />
                    </article>
                  </TabPane>
                  <TabPane tab="Comment" key="2">
                    <EditComment
                      section_id={section_id}
                      fetch={fetchComment}
                    ></EditComment>
                    {comment.map((item) => (
                      <div className="my-3">
                        <CommentQA
                          children={item}
                          isChild={true}
                          fetch={fetchComment}
                          page = {page}
                        ></CommentQA>
                      </div>
                    ))}
                    <div className="p-3 grid justify-items-end">
                      <Pagination
                        defaultCurrent={1}
                        total={itemCount}
                        onChange={handleNextPage}
                        pageSize={page_size}
                      />
                    </div>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Layout>
        </>
      )}
    </>
  );
}
