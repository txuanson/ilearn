import React, {useState} from 'react';
import 'antd/dist/antd.css';
import ReactMarkdown from 'react-markdown';
import gfm from "remark-gfm";
import { Layout, Tabs, Row, Col, Tag} from 'antd';
import CommentQA from '../../components/comment/CommentQA';
const { TabPane } = Tabs;

const markdown = `## What to do

- Review lessons
- Do exercise 1,2,3

## NOTI:
- There is no class on next Wednesday
`

function callback(key) {
    console.log(key);
  }

export default function SectionRecord(data){
    function ShowVideo(props){
        const hasVideo = props.hasVideo;
        if (hasVideo){
            return (
                <Row>
                <Col md={17} span={24}>
                {/* className="aspect-w-16 aspect-h-9 full-screen items-center" */}
                <div className="relative" style={{paddingTop:'56.25%'}}>
                <iframe src={data.video} className="absolute inset-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
                </Col>
                <Col md={7} className="hidden md:block">
                    <div className="text-center text-xl bg-blue-600 py-5 font-bold text-white ml-5">Teacher's notification</div>
                    <article className="prose lg:prose-md max-w-none px-2 my-5 ml-5" style={{border:'solid'}}>
                    <ReactMarkdown children={markdown} remarkPlugins={[gfm]}/>
                    </article>  
                </Col>
            </Row>
            );
        }
        return <Tag color="#2db7f5" className="font-bold text-xl text-center">No video record in this section!</Tag>;
    }
    
    return (
        <Layout>
            <ShowVideo hasVideo={data.video}/>
            <Row>
                <Col span={24}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Document" key="1">
                        <article className="prose lg:prose-md max-w-none px-2" style={{border:'solid'}}>
                            <ReactMarkdown children={data.content} remarkPlugins={[gfm]}/>
                        </article> 
                        </TabPane>
                        <TabPane tab="Comment" key="2">
                        <CommentQA />
                        </TabPane>
                        <TabPane tab="Teacher's Notification" key="3" className="block md:hidden">
                        <article className="prose lg:prose-md max-w-none px-2" style={{border:'solid'}}>
                        <ReactMarkdown children={markdown} remarkPlugins={[gfm]}/>
                        </article>  
                        </TabPane> 
                    </Tabs>
                </Col>
            </Row>

            
            
        </Layout>
    );

}