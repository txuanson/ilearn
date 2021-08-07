import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function DrawerMenu({ category, user }) {
  const [visible, setVisible] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
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
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <MenuIcon
          className="block md:hidden h-6 w-6"
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
        <a className="p-2 pt-0 pl-1 font-bold" onClick={showChildrenDrawer}>
          Category
        </a>
        <Drawer
          title="Category"
          width={320}
          closable={false}
          placement="left"
          onClose={onChildrenDrawerClose}
          visible={childrenDrawer}
        >
          {category.map((item) => (
            <div className="pb-2 pl-1">
              <Link to={"/category/" + item._id}>{item.name}</Link>
            </div>
          ))}
        </Drawer>
        {/* <div className = "pb-2 pt-0 pl-1 font-bold">Category</div>
      {category.map((item)=>(
        <div className = "pb-2 pl-1">{item.name}</div>
      ))} */}
        <hr></hr>
        <Link to="/tutor">
          <div className="p-2 pl-1 font-bold">Tutor</div>
        </Link>
        <hr></hr>
        <Link to="#">
          <div className="p-2 pl-1 font-bold">Team</div>
        </Link>
        <hr></hr>
        <Link to="#">
          <div className="p-2 pl-1 font-bold">Project</div>
        </Link>
        <hr></hr>
        <Link to="#">
          <div className="p-2 pl-1 font-bold">Calendar</div>
        </Link>
        {user ? (
          <></>
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
