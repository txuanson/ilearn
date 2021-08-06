import React from 'react';
import {Breadcrumb, Layout, Button, Divider} from "antd";
import ReactMarkdown from 'react-markdown'
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import gfm from "remark-gfm";

import { CameraOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';

import EditModal from '../components/ui/EditModal';
import ReadMore from '../components/ui/ReadMore';

import UploadAvatar from '../components/editprofile/UploadAvatar'
import UploadProfile from '../components/editprofile/UploadProfile'
const { Header, Content, Footer } = Layout;

function Profile() {
    let name = 'Import a HTML file and watch'
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
`
    return (
        <Layout className = "container mx-auto xl:px-40">
            <Content className = "p-10 container">
                <div className = "flex flex-col md:flex-row"> 
                    <div className = "flex flex-col items-center">
                        <img className = "w-40 h-40 border-4 rounded-full border-white"
                            src = "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png" />
                        <EditModal icon = {<CameraOutlined style={{ fontSize: '16px'}} /> }
                            name = "Edit Avatar"
                            title = "Upload Avatar"
                            className = "">
                            <UploadAvatar />
                        </EditModal>
                    </div>

                    <div>
                        <div className = "px-0 md:px-10">
                            <div className = "flex flex-col max-w-lg">
                                <p className = "pb-4 text-2xl md:text-4xl break-normal">
                                    {name}
                                </p> 
                                <p className="break-normal" >
                                    <ReadMore children = {markdown}/>

                                    {/* <ReactMarkdown 
                                        remarkPlugins={[gfm]} 
                                        children={markdown} /> */}
                                </p>
                                <EditModal icon = {<EditOutlined style={{ fontSize: '16px'}} /> }
                                    name = "Edit Profile" 
                                    title = "Update Profile"
                                    className = "pt-5">
                                    <UploadProfile />
                                </EditModal>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

export default Profile


