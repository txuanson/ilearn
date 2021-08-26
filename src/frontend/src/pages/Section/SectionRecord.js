import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import ReactMarkdown from 'react-markdown';
import gfm from "remark-gfm";
import { Layout, Tabs, Row, Col, Tag} from 'antd';
import CommentQA from '../../components/comment/CommentQA';
import { getSectionInfo } from '../../api/user';
const { TabPane } = Tabs;


export default function SectionRecord({section_id, course_id}){
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchCourse = async () => {
      try {
          setLoading(true);
          const res = await getSectionInfo(course_id, section_id);
          setData(res);
          console.log('New data = ', data)
          setLoading(false);
      } catch (err) {
          console.log('Failed!!');
      }
  }
  useEffect(() => {
      fetchCourse();
  }, []);

    function ShowVideo(props){
        const hasVideo = props.hasVideo;
        const video_code = data.section.video.split('/')
        const embed_video =  'https://www.youtube.com/embed/' + video_code[video_code.length - 1]
        if (hasVideo){
            return (
                <div className="relative md:ml-10" style={{paddingTop:'56.25%'}}>
                <iframe src={embed_video} className="absolute inset-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            );
        }
        return <Tag color="#2db7f5" className="font-bold text-xl text-center">No video record in this section!</Tag>;
    }
    
    
    return (<>
         { loading && <></>} 
         {!loading && <>
        <Layout className="md:ml-20">
            <ShowVideo hasVideo={data.section.video}/>
            <Row className="md:ml-10">
                <Col span={24}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Document" key="1">
                        <article className="prose lg:prose-md max-w-none px-2" style={{border:'solid'}}>
                            <ReactMarkdown children={data.section.content} remarkPlugins={[gfm]}/>
                        </article> 
                        </TabPane>
                        <TabPane tab="Comment" key="2">
                        <CommentQA />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>     
        </Layout>
        </>}
    </>
    );

}