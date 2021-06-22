import { Divider, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../utils/auth";

export default function DropdownMenu({ user }) {
  return (
    <Menu className="w-full h-full shadow-none border-none">
      <Menu.Item>
        <Link to="/">
          <i class="fas fa-home text-base mr-2 text-gray-700"></i> Home
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/new">
          <i class="fas fa-list-ul text-base mr-2 text-gray-700"></i> New class
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/trending">
          <i class="fab fa-hotjar text-base mr-2 text-gray-700"></i> Trending
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">
          <i class="far fa-question-circle text-base mr-2 text-gray-700"></i>{" "}
          About us
        </Link>
      </Menu.Item>
      {user && user.role == "student" && (
        <Menu.Item>
          <Link to="/profile">
            <i class="fas fa-user-circle text-base mr-2 text-gray-700"></i>{" "}
            Profile
          </Link>
        </Menu.Item>
      )}
      {user && user.role == "teacher" && (
        <Menu.Item>
          <Link to="/dashboard">
            <i class="fas fa-chart-line text-base mr-2 text-gray-700"></i>{" "}
            Dashboard
          </Link>
        </Menu.Item>
      )}
      {!user && (
        <>
          <Menu.Item>
            <Link to="/login">
              <i class="fas fa-sign-in-alt text-base mr-2 text-gray-700"></i>{" "}
              Login
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/register">
              <i class="fas fa-user-plus text-base mr-2 text-gray-700"></i>{" "}
              Register
            </Link>
          </Menu.Item>
        </>
      )}
      {user && (
        <>
          <Menu.Divider />
          <Menu.Item>
            <a onClick={logout}>Logout</a>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
}
