import React, { useState } from "react";
import { register } from "../utils/auth";
import { postRegister } from "../api/auth";
import { message } from "antd";
import handleErrorApi from "../utils/handleErrorApi";

export function Register() {
  const [email, setEnterEmail] = useState("");
  const [name, setEnterName] = useState("");
  const [username, setEnterUsername] = useState("");
  const [password, setEnterPass] = useState("");
  const [passwordConfirm, setEnterPassConfirm] = useState("");

  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnterEmail(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnterName(event.target.value);
  };

  const passChangeHandler = (event) => {
    setEnterPass(event.target.value);
  };

  const passConfirmChangeHandler = (event) => {
    setEnterPassConfirm(event.target.value);
  };
  const submitClickHandler = async (event) => {
    if (password !== passwordConfirm) {
      // handleErrorApi(error);
      message.error("xác nhận mk sai");
    } else if (username.length < 8) {
      message.error("Độ dài username dưới 8 kí tự");
    } else {
      try {
        const res = await postRegister({
          username: username,
          password: password,
          email: email,
          name: name,
        });
        register(res);
      } catch (error) {
        handleErrorApi(error);
      }
    }
  };
  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col w-full max-w-md px-4 pt-10 pb-12 bg-white rounded-xl shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <img
            className="mx-auto h-12 w-auto"
            src="/logo-iLearn.svg"
            alt="iLearn"
          />
          <div className="mt-6">
            <div>
              <div className="flex flex-col mb-4">
                <div className="flex relative ">
                  <input
                    type="email"
                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Email"
                    onChange={emailChangeHandler}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex relative ">
                  <input
                    type="text"
                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Full name"
                    onChange={nameChangeHandler}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex relative ">
                  <input
                    type="text"
                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="User name"
                    onChange={usernameChangeHandler}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex relative ">
                  <input
                    type="password"
                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Password"
                    onChange={passChangeHandler}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex relative ">
                  <input
                    type="password"
                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Confirm password"
                    onChange={passConfirmChangeHandler}
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={submitClickHandler}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
