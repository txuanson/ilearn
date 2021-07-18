import React, { Component } from 'react';
// import { Image } from 'antd';

import classes from './EditAvatar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class EditAvatar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
  
    this.imageHandler = this.imageHandler.bind(this);
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

	render() {
    const {profileImg} = this.state
		return (
			<div className = {classes.container}>
				<h1>Upload Your Avatar</h1>
					<img
            src={profileImg}
            alt="Your avatar"
          />
          
          <input 
            type="file" 
            accept="image/*" 
            //value={this.state.value}
            onChange={this.imageHandler} />                   

        <button
          className = "btn btn-primary"
          type = "submit"
          >Upload
        </button> 
			</div>
		);
	}
}

export default EditAvatar;
