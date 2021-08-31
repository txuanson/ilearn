import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
import { logout } from "../../utils/auth";

export default function DrawerMenu({ category, user, profileUser }) {
  const [visible, setVisible] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const HOST = process.env.REACT_APP_BASE_HOST;

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };
  return (
    <>
      <div className="hover:bg-gray-700 hover:text-white p-2 rounded-xl block md:hidden ">
        <MenuIcon
          className="h-6 w-6"
          aria-hidden="true"
          onClick={showDrawer}
        ></MenuIcon>
      </div>
      <Drawer
        title="MENU"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {user ? (
          <div>
            <Link to={"/profile/" + profileUser._id}>
              <ReactImageFallback
                className="min-w-full block flex-shrink-0 rounded-full ring ring-gray-500"
                src={HOST + "/" + profileUser.avatar}
                alt="logo"
                fallbackImage="/avata-default.jpg"
                style={{ height: 200 }}
              />
              <div>
                <p className="font-bold text-xl text-center">
                  {profileUser.name}
                </p>
                <p className=" text-center">{"@" + profileUser.username}</p>
              </div>
            </Link>
            <hr></hr>
            <Link to={"/profile/" + profileUser._id}>
              <div className="p-2 pl-1 font-bold">My profile</div>
            </Link>
            <hr></hr>
            <Link to="/mylearn">
              <div className="p-2 pl-1 font-bold">My learn</div>
            </Link>
          </div>
        ) : (
          <></>
        )}
        <hr></hr>
        <div className="p-2 pl-1 font-bold">
          <a onClick={showChildrenDrawer}>Category</a>
        </div>
        <Drawer
          title="Category"
          width={240}
          closable={false}
          placement="left"
          onClose={onChildrenDrawerClose}
          visible={childrenDrawer}
          bodyStyle={{
            padding: 0,
          }}
        >
          {category.map((item) => (
            <>
              <div className="p-6 font-medium">
                <Link to={"/category/" + item._id}>{item.name}</Link>
              </div>
              <hr></hr>
            </>
          ))}
        </Drawer>
        <hr></hr>
        <Link to="/tutor">
          <div className="p-2 pl-1 font-bold">Tutor</div>
        </Link>
        {user ? (
          <>
            <hr></hr>
            <Link to="/login">
              <div className="p-2 pl-1 font-bold">
                <a onClick={logout}>Sign out</a>
              </div>
            </Link>
          </>
        ) : (
          <>
            <hr></hr>
            <Link to="/login">
              <div className="p-2 pl-1 font-bold">Login</div>
            </Link>
            <hr></hr>
            <Link to="/register">
              <div className="p-2 pl-1 font-bold">Register</div>
            </Link>
          </>
        )}
      </Drawer>
    </>
  );
}
