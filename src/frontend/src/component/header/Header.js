import { Affix, Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MenuDrawer from "../drawer/MenuDrawer";
import DropdownMenu from "../menu/DropdownMenu";
import { getUser } from "../../redux/actions/user";
import { logout } from "../../utils/auth";

function Header({ user, ...props }) {
  const [isStick, setIsStick] = useState(false);

  useEffect(() => {
    props.getUser();
  }, []);

  return (
    // <Affix onChange={() => setIsStick(!isStick)}>
    <header
      style={{ zIndex: 2 }}
      className={`${
        isStick ? "bg-white border-b relative" : ""
      } py-4 px-4 flex items-center z-10 relative`}
    >
      <div className="flex items-center">
        {/* <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
              <img
                src="/img/logo.png"
                alt="logo"
                className="min-w-full min-h-full flex-shrink-0"
              />
            </div> */}
        <Link to="/">
          <h2 className="text-white font-semibold text-3xl md:mx-2">
            <span className="text-blue-500">i</span>Learn
          </h2>
        </Link>
      </div>
      <ul className="hidden md:flex ml-auto items-center justify-center mr-4">
        <Link to="/">
          <li className="mx-2 font-normal text-xl text-white">Home</li>
        </Link>
        <Link to="/new">
          <li className="mx-2 font-normal text-xl text-white">New class</li>
        </Link>
        <Link to="/trending">
          <li className="mx-2 font-normal text-xl text-white">Trending</li>
        </Link>
        {user && (
          <a onClick={logout}>
            <li className="mx-2 font-normal text-xl text-white">Log out</li>
          </a>
        )}
      </ul>
      <div className="hidden md:flex items-center justify-center">
        {!user && (
          <Link to="/login">
            <button className="px-5 py-1 text-white text-xl font-normal border border-white rounded mx-2">
              Login
            </button>
          </Link>
        )}
        {!user && (
          <Link to="/register">
            <button className="px-5 py-1 text-white text-xl font-normal bg-green-500 rounded mx-2 border border-green-500">
              Register
            </button>
          </Link>
        )}
        {user && user.Role == 2 && (
          <Link to="/dashboard">
            <button className="px-5 py-1 text-white text-xl font-normal bg-green-500 rounded mx-2 border border-green-500">
              Dashboard
            </button>
          </Link>
        )}
        {user && user.Role == 1 && (
          <Link to="/profile">
            <button className="px-5 py-1 text-white text-xl font-normal bg-green-500 rounded mx-2 border border-green-500">
              Profile
            </button>
          </Link>
        )}
      </div>
      <div className="md:hidden ml-auto">
        {/* <Dropdown
          overlay={<DropdownMenu user={user} />}
          trigger={["click"]}
          placement="bottomLeft"
        >
          <button className="text-white text-xl  block">
            <i class="fas fa-bars"></i>
          </button>
        </Dropdown> */}
        <MenuDrawer user={user} />
      </div>
    </header>
    // </Affix>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
