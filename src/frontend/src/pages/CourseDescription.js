import React from 'react';
import ReactMarkdown from 'react-markdown'
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import gfm from "remark-gfm";

import {Button,Layout, Breadcrumb, Affix} from 'antd';
import CommentQA from '../components/comment/CommentQA';

const {Content} = Layout;

const markdown = `## 📖 About this class

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

  This text you see here is actually-written in Markdown! To get a feel
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

For production environments...


## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][pldb]         |
| GitHub           | [plugins/github/README.md][plgh]          |
| Google Drive     | [plugins/googledrive/README.md][plgd]     |
| OneDrive         | [plugins/onedrive/README.md][plod]        |
| Medium           | [plugins/medium/README.md][plme]          |
| Google Analytics | [plugins/googleanalytics/README.md][plga] |


## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

Second Tab:

(optional) Third:


#### Building for source

For production release:



Generating pre-built zip archives for distribution:


## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.



This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out  with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

Verify the deployment by navigating to your server address in
your preferred browser.



## 📫 Contact me:

You can reach me and feedback about this

1. 🔗 iHelloWorld.net
2. 📧 ihelloworld-contact@gmail.com

## ⚡ File and assets

- 📜 index.js
- 📂 Demo
- 🌍 Click to demo website
`

export default function CourseDescription(data) {

    return (
    <Layout className="container mx-auto xl:px-40">
        <Content className="p-0 md:px-70">
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
              
                <div class="w-full mx-auto bg-white shadow-md overflow-hidden">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                            <div class="relative m-2">
                                <img src={data.cover} alt={data.name} class="h-60 w-full object-cover md:w-70"/>
                                <span class="px-1 py-1 text-white bg-blue-700 rounded absolute right-0 bottom-0 bg-opacity-50">
                                    {data.public ? 'Public' : 'Private'}
                                </span>
                            </div>
                        </div>
                        <div class="text-center p-5 justify-center flex flex-col md:text-left">
                            <div class="uppercase block mt-1 text-lg leading-tight font-medium text-black">{data.name}</div>
                            <div class="tracking-wide text-sm text-indigo-500 font-semibold">{data.category}</div>
                            <p class="text-gray-500">{data.text}</p>
                            
                        </div>
                        
                    </div>
                </div>
                <Affix offsetTop={0}>
                    <Button className="w-full" type="primary">
                        <Link to="/course/subscribe">Subscribe</Link>
                    </Button>
                </Affix>
                
                <article className="prose lg:prose-md max-w-none px-2 my-10">
                    <ReactMarkdown children={markdown} remarkPlugins={[gfm]}/>
                </article>
                <div className="text-center text-md bg-blue-600 py-5 font-bold text-white">COMMENT</div>
                <CommentQA/>

                
            </div>
            
        </Content>
    </Layout>

  );
};
