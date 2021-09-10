import React, { useState } from "react";
import { Drawer, Button, Input } from "antd";
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
import { logout } from "../../utils/auth";

export default function SearchMoblie() {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState([]);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const ChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      window.location.href = "/search?query=" + search;
    }
  };

  return (
    <>
      <div className="hover:bg-gray-700 hover:text-white p-2 rounded-xl">
        <SearchIcon
          className="block md:hidden h-6 w-6"
          aria-hidden="true"
          onClick={showDrawer}
        ></SearchIcon>
      </div>
      <Drawer
        title=""
        placement="top"
        closable={false}
        onClose={onClose}
        visible={visible}
        height={80}
        bodyStyle={{
          padding: 0,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="w-full mb-2">
          <div className="relative flex z-top justify-center items-center mt-2 px-3">
            <Input
              placeholder="Search"
              className="rounded-xl"
              onChange={ChangeHandler}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
}
