import React, { useState } from "react";
//import { postLogin } from "../api/auth";
//import { login } from "../util/auth";
//import handleErrorApi from "../util/handleErrorApi";
import "./Register.css";

const Register = () => {
    const [enterEmail, setEnterEmail] = useState('');
    const [enterPass, setEnterPass] = useState('');
    const [enterConfirmPass, setEnterConfirmPass] = useState('');
    const [enterName, setEnterName] = useState('');
    
    const submitClickHandler = () => {
        if(enterConfirmPass === enterPass)
            console.log("correct");
        else
            console.assert("uncorrected");
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
