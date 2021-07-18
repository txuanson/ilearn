import React, { Component } from 'react'
import EditAvatar from '../components/user_edit/EditAvatar'

export class ChangeAvatar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ava:"",
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.avaInput = React.createRef();

      }
    
      handleSubmit = async(event) => { 
        await this.setState ({
            ava: this.avaInput.current.value,

        })

        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <EditAvatar
                    ref={this.avaInput}
                    onChange={this.props.onChange} 
                    className="form-control"
                />
            </div>
        )
    }
}

export default ChangeAvatar
