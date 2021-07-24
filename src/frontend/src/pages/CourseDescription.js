import React from 'react';
import ReactMarkdown from 'react-markdown'
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import gfm from "remark-gfm";
import {Button,Layout, Breadcrumb, Description} from 'antd';

const { Header, Content, Footer } = Layout;

export default function CourseDescription(data) {
    let markdown = `
    ## 📖 About this class

    - 🖥 Wellcome and prepair
    - 💼 About Javascript
    - 🎓 Javascript Fundamentals
    - 🌐 Callback function
    - 🔭 Arrow function

    ## 🌟 Content

    - Import a HTML file and watch it magically convert to Markdown
    - Drag and drop images (requires your Dropbox account be linked)
    - Import and save files from GitHub, Dropbox, Google Drive and One Drive
    - Drag and drop markdown and HTML files into Dillinger
    - Export documents as Markdown, HTML and PDF

    Markdown is a lightweight markup language based on the formatting conventions
    that people naturally use in email.
    As [John Gruber] writes on the [Markdown site][df1]

    > The overriding design goal for Markdown's
    > formatting syntax is to make it as readable
    > as possible. The idea is that a
    > Markdown-formatted document should be
    > publishable as-is, as plain text, without
    > looking like it's been marked up with tags
    > or formatting instructions.

    This text you see here is \*actually- written in Markdown! To get a feel
    for Markdown's syntax, type some text into the left window and
    watch the results in the right.
    ## Tech

    Dillinger uses a number of open source projects to work properly:

    - [AngularJS] - HTML enhanced for web apps!
    - [Ace Editor] - awesome web-based text editor
    - [markdown-it] - Markdown parser done right. Fast and easy to extend.
    - [Twitter Bootstrap] - great UI boilerplate for modern web apps
    - [node.js] - evented I/O for the backend
    - [Express] - fast node.js network app framework [@tjholowaychuk]
    - [Gulp] - the streaming build system
    - [Breakdance](https://breakdance.github.io/breakdance/) - HTML
    to Markdown converter
    - [jQuery] - duh

    And of course Dillinger itself is open source with a [public repository][dill]
    on GitHub.

    ## Installation

    Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

    Install the dependencies and devDependencies and start the server.

    For production environments...`  

  return (
    <Layout>
        <Header
          className="site-layout-sub-header-background" style={{ padding: 0}}
        />
        <Content style={{ margin: "10px 10px 0" }}>
            <div className="site-layout-background container mx-auto my-2" style={{ padding: 10, minHeight: 360 }}>
                <Breadcrumb style={{ margin: "10px 0" }}>
                    <Breadcrumb.Item>  
                        <Link to="/homepage">iLearn</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/${data.category}`}>{data.category}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{data.name}</Breadcrumb.Item>
                </Breadcrumb>
              
                <div class="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <div class="relative m-2">
                                <img src={data.cover} alt={data.name} class="h-30 w-full object-cover md:w-40"/>
                                <span class="px-1 py-1 text-white bg-blue-700 rounded absolute right-0 bottom-0 bg-opacity-50">
                                    {data.public ? 'Public' : 'Private'}
                                </span>
                            </div>
                        </div>
                        <div class="p-5 justify-center flex flex-col">
                            <div class="uppercase block mt-1 text-lg leading-tight font-medium text-black">{data.name}</div>
                            <div class="tracking-wide text-sm text-indigo-500 font-semibold">{data.category}</div>
                            <p class="mt-2 text-gray-500">{data.text}</p>
                            <Button className="rounded-xl w-full md:w-40 mt-5" type="primary">
                                <Link to="/course/subscribe">Subscribe</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />

                
            </div>
        </Content>
        <Footer className="text-center">404 Not Found © 2021</Footer>
    </Layout>

  );
};