import React, { useState } from "react";
import { postLogin } from "../api/auth";
import { login } from "../util/auth";
import handleErrorApi from "../util/handleErrorApi";
import "./Login.css";
import Header from "../component/header/Header";

const Login = () => {
  const [username, setEnterUsername] = useState("");
  const [password, setEnterPass] = useState("");
  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };

  const passChangeHandler = (event) => {
    setEnterPass(event.target.value);
  };
  const submitClickHandler = async (event) => {
    //console.log(email, pass);
    try {
      const res = await postLogin({ username: username, password: password });
      //console.log(res.token);
      login(res);
    } catch (error) {
      handleErrorApi(error);
    }
  };
  return (
<div>
  <Header></Header>
  <div className="container">
      <div id="img" className="row">
        <img src= "/logo-iLearn.svg" alt=""/>
      </div>
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="align-items-center"></div>
        <div className="form-group">
          <input type="text" className="form-control" name="username" id="username" placeholder="Enter your username" onChange={usernameChangeHandler}/>
          <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password" onChange={passChangeHandler}/>

          <div className="row ">
            <div className="col"> <span className="pass"><u>Haven't got an account yet?</u></span></div>
            <div className="col text-end"> <span className="pass"><u>Forgot password</u></span></div>
          </div>
          <div className="text-center container"><button type="button" className="btn btn-outline-info" onClick = {submitClickHandler}>Login</button></div>
        </div>
      </div> 
    </div>
  </div>
</div>
);
}


export default Login;
