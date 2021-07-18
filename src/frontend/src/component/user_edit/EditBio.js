import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html"

export class EditBio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    onvalueChange = (editorState) => {
        this.setState({
            editorState,
        });
    }

    render() {
        const {editorState} = this.state;
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

        return (
            <form>
                <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onvalueChange={this.onValueChange}
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
            </form>
        )
    }
}

export default EditBio
