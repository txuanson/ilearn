import React, {useState} from 'react';
import 'antd/dist/antd.css';
import ReactMarkdown from 'react-markdown';
import gfm from "remark-gfm";
import { Layout, Button, Tabs, Row, Col, Input, Form, Tag} from 'antd';
import CommentQA from '../../components/comment/CommentQA';
const { TabPane } = Tabs;
const { TextArea } = Input;

const markdown = `## 📖 About this class

- 🖥 Wellcome and prepair
- 💼 About Javascript
- 🎓 Javascript Fundamentals
- 🌐 Callback function
- 🔭 Arrow function
`

function callback(key) {
    console.log(key);
  }

export default function SectionRecord(data){
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value)
    };
    const onSubmit = () => {
        if (!value) {
        return;
        }
        console.log('Your note: ', value);
    };
    function ShowVideo(props){
        const hasVideo = props.hasVideo;
        if (hasVideo){
            return (
                <Row>
                <Col span={17}>
                <div className="aspect-w-16 aspect-h-9 full-screen items-center">
                <iframe src={data.video} width="960" height="540" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
                </Col>
                <Col span={7}>
                    <div className="text-center text-xl bg-blue-600 py-5 font-bold text-white">Teacher's note</div>
                    <article className="prose lg:prose-md max-w-none px-2 my-10">
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
                        Content of Tab Document
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