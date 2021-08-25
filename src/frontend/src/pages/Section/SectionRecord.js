import React from 'react';
import 'antd/dist/antd.css';
import ReactMarkdown from 'react-markdown';
import gfm from "remark-gfm";
import { Layout, Tabs, Row, Col, Tag} from 'antd';
import CommentQA from '../../components/comment/CommentQA';
const { TabPane } = Tabs;


export default function SectionRecord(data){
    function ShowVideo(props){
        const hasVideo = props.hasVideo;
        const video_code = data.video.split('/')
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
    
    
    return (
        <Layout className="md:ml-20">
            <ShowVideo hasVideo={data.video}/>
            <Row className="md:ml-10">
                <Col span={24}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Document" key="1">
                        <article className="prose lg:prose-md max-w-none px-2" style={{border:'solid'}}>
                            <ReactMarkdown children={data.content} remarkPlugins={[gfm]}/>
                        </article> 
                        </TabPane>
                        <TabPane tab="Comment" key="2">
                        <CommentQA />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

            
            
        </Layout>
    );

}