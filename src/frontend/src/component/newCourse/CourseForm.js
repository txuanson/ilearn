import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import classes from "./CourseForm.module.css";

const CATEGORY_DATA = ['Depelopment', 'Design', 'Marketing', 'Finance', 'Art']

export default class CourseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            category: "",
            public: "",
            cover: "",
            content: "",
        }

        this.handleCreate = this.handleCreate.bind(this);
        this.nameInput = React.createRef();
        this.categoryInput = React.createRef();
        this.publicInput = React.createRef();
        this.coverInput = React.createRef();
        this.contentInput = React.createRef();

    }

    handleCreate = async(event) => { 
        console.log(this.nameInput.current.value);    
        await this.setState ({
            name: this.nameInput.current.value,
            category: this.categoryInput.current.value,
            public: this.publicInput.current.value,
            cover: this.coverInput.current.value,
            content: this.contentInput.current.value,
        })
        
        console.log(this.state);
        event.preventDefault();
    }

    handleCover() {
        
    };

    render() {
        return (
            <div className={classes.main}>
                <div>
                    {/* name */}
                    <br/>
                    <div className="form-group row">
                        <label htmlFor='name' className="col-sm-2 col-form-label">Course name: </label>
                        <div className="col-sm-10">
                            <input type='text'
                                id='name'
                                required
                                className="form-control"
                                ref={this.nameInput}
                                ></input>
                        </div>
                    </div>
                    {/* category */}
                    <br/>
                    <div className="form-group row">
                        <label htmlFor='category'class="col-sm-2 col-form-label">Category: </label>
                        <div className="col-sm-10">
                            <select id='category' ref={this.categoryInput} className="form-control">
                                {CATEGORY_DATA.map((ctg) => {
                                    return <option value={ctg}>{ctg}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    {/* public */}
                    <br/>
                    <form>
                        <div className="form-group row custom-control custom-switch">
                            <label htmlFor='public' class="col-sm-2 col-form-label">Public: </label>
                            <div className="col-sm-10">
                                <input type='checkbox'
                                    id='public'
                                    className="custom-control-input"
                                    ref={this.publicInput}></input>
                            </div>
                        </div>
                    </form>
                    {/* cover */}
                    <br/>
                    <div  className="form-group row">
                        <label htmlFor='cover' class="col-sm-2 col-form-label">Cover: </label>
                        <div className="col-sm-10">
                            <input type='file'
                                    id='cover'
                                    required
                                    accept=".jpeg, .jpg, .png"
                                    ref={this.coverInput}
                                    onchange={this.handleCover}
                                    className="form-control" ></input>                                
                            <img id="image" 
                                    alt="Course Cover" 
                                    width="160" height="90"
                                    src={this.state.cover}
                                    className="form-control"></img> 
                        
                        </div>
                    </div>
                    {/* content */}
                    <br/>
                    <div  className="form-group row">
                        <label htmlFor='content' class="col-sm-2 col-form-label">Content: </label>
                        <div className="col-sm-10">
                            <textarea id='content'
                                        rows={5}
                                        required
                                        ref={this.contentInput}
                                        className="form-control"></textarea>
                            {/* create */}
                            <br/>
                            <button className="btn btn-primary" onClick={this.handleCreate}>Create</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
