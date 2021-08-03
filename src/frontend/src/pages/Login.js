import React, { useState } from "react";
import { login } from "../utils/auth";
import { postLogin } from "../api/auth";
import { message } from "antd";
import { Link } from "react-router-dom";

export function Login() {
  const [username, setEnterUsername] = useState("");
  const [password, setEnterPass] = useState("");
  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };

  const passChangeHandler = (event) => {
    setEnterPass(event.target.value);
  };
  const submitClickHandler = async (event) => {
    try {
      const res = await postLogin({ username: username, password: password });
      login(res);
    } catch (error) {
      message.error("đăng nhập thất bại");
      // handleErrorApi(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div class="flex flex-col w-full max-w-md px-4 pt-10 pb-12 bg-white rounded-xl shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <img
            className="mx-auto h-12 w-auto"
            src="/logo-iLearn.svg"
            alt="iLearn"
          />
          <div class="mt-6">
            <div>
              <div class="flex flex-col mb-4">
                <div class="flex relative ">
                  <input
                    type="text"
                    class=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
              <div className="flex items-center justify-between mb-4 ">
                <div className="text-sm">
                  <Link
                    to="/register"
                    className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                  >
                    Haven't got an account yet?
                  </Link>
                </div>

                <div className="text-sm">
                  {/* <a
                    href="#"
                    class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                  >
                    Forgot Your Password?
                  </a> */}
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={submitClickHandler}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
