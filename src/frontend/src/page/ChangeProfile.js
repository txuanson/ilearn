import React, { Component } from 'react'
import EditBio from '../components/user_edit/EditBio';
import EditName from '../components/user_edit/EditName';

export class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            bio:"",
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }
    
      handleSubmit = async(event) => { 
        console.log(this.nameInput.current.value);    
        await this.setState ({
            name: this.nameInput.current.value,
            bio: this.bioInput.current.value,
        })

        console.log(this.state);
        event.preventDefault();
    }

    render() {
       
        return (
            <form>
                <label>
                    Name:
                    <EditName
                        ref={this.nameInput}
                        onChange={this.props.onChange} 
                    />
                </label>

                <label>
                    Bio:
                    <EditBio
                        ref={this.bioInput}
                        onChange={this.props.onChange} 
                    />
                </label>
                
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default EditProfile
