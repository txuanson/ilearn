import React, { useState } from "react";
import { postRegister } from "../api/auth";
import { login } from "../util/auth";
import handleErrorApi from "../util/handleErrorApi";
import "./Register.css";

const Register = () => {
    const [email, setEnterEmail] = useState('');
    const [username, setEnterUsername] = useState('');
    const [pass, setEnterPass] = useState('');
    const [passConfirm, setEnterConfirmPass] = useState('');
    const [name, setEnterName] = useState('');
    
    const submitClickHandler = async (event) => {
    //console.log(email, pass);
    if (pass === passConfirm) {
        try {
            const res = await postRegister({ username: username, password: pass, email: email, name: name });
            console.log(res);
            login(res.token);
        } catch (error) {
            handleErrorApi(error);
        }
        };
    }
    return (
  <div>
    <div className="container">
        <div id="img" className="row">
          <img src= "/logo-iLearn.svg" alt=""/>
        </div>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="align-items-center"></div>
          <div className="form-group">
            <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" onChange={(event) => {setEnterName(event.target.value)}} />
            <input type="text" className="form-control" name="username" id="username" placeholder="Enter your username" onChange={(event) => {setEnterUsername(event.target.value)}} />
            <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={(event) => {setEnterEmail(event.target.value)}}/>
            <input type="password" className="form-control" name="psw" id="pws" placeholder="Enter your password" onChange={(event) => {setEnterPass(event.target.value)}}/>
            <input type="password" className="form-control" name="cfpsw" id="cfpsw" placeholder="Confirm your password" onChange={(event) => {setEnterConfirmPass(event.target.value)}}/>

            <div className="text-center container"><button type="button" className="btn btn-outline-info" onClick = {submitClickHandler}>Login</button></div>
          </div>
        </div> 
      </div>
    </div>
  </div>
  );
}



export default Register;
