import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Layout, Tabs, Row, Col, Tag, Pagination } from "antd";
import CommentQA from "../../components/comment/CommentQaA";
import { getAllCommentSection, getSectionInfo } from "../../api/user";
import handleErrorApi from "../../utils/handleErrorApi";
import EditComment from "../../components/comment/EditComment";

const { TabPane } = Tabs;

export default function SectionRecord({ section_id, course_id }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState([]);
  const [minValue, setMinValue] = useState([]);
  const [maxValue, setMaxValue] = useState([]);
  const numberMaxComment = 10;

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

  const fetchComment = async () => {
    try {
      const res = await getAllCommentSection(section_id);
      setComment(res.items);
      setMinValue(0);
      setMaxValue(numberMaxComment);
    } catch (err) {
      handleErrorApi(err);
    }
  };

  const handleNextPage = (value) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(numberMaxComment);
    } else {
      setMinValue((value - 1) * numberMaxComment);
      setMaxValue(value * numberMaxComment);
    }
  };

  useEffect(() => {
    fetchCourse();
    fetchComment();
  }, []);

  function ShowVideo(props) {
    const hasVideo = props.hasVideo;
    const video_code = data.section.video.split("/");
    const embed_video =
      "https://www.youtube.com/embed/" + video_code[video_code.length - 1];
    if (hasVideo) {
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
          <Layout className="md:ml-20">
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
                    {comment.slice(minValue, maxValue).map((item) => (
                      <div className="my-3">
                        <CommentQA
                          children={item}
                          isChild={true}
                          fetch={fetchComment}
                          section_id={section_id}
                        ></CommentQA>
                      </div>
                    ))}
                    <div className="p-3 grid justify-items-end">
                      <Pagination
                        defaultCurrent={1}
                        total={comment.length}
                        onChange={handleNextPage}
                        pageSize={numberMaxComment}
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
