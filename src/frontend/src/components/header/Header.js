import { Disclosure } from "@headlessui/react";
import { Menu, Dropdown, Input, Button } from "antd";
import ReactImageFallback from "react-image-fallback";
import { Link } from "react-router-dom";
import { logout } from "../../utils/auth";
import DropDownMenu from "../menu/DropDownMenu";
import { useEffect, useState } from "react";
import { getAllCategory } from "../../api/homePage";
import DrawerMenu from "../menu/DrawerMenu";
import { getProfileUser } from "../../api/user";
import SearchMoblie from "../search/SearchMoblie";
import handleErrorApi from "../../utils/handleErrorApi";


export default function Header({ user, ...props }) {
  const [nameCategory, setNameCategory] = useState([]);
  const [profileUser, setProfileUser] = useState([]);
  const [search, setSearch] = useState([]);

  const HOST = process.env.REACT_APP_BASE_HOST;

  useEffect(async () => {
    try {
      const resCategory = await getAllCategory();
      const resProfile = await getProfileUser();
      setNameCategory(resCategory);
      setProfileUser(resProfile);
    } catch (err) {
      handleErrorApi(err)
    }
  }, []);



  const ChangeHandler = (event) => {
    setSearch(event.target.value);
};

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      console.log(search);
      window.location.href = "/search?query=" + search
    }
  };

  const menu = (
    <Menu className="bg-white dark:bg-dark-black dark:text-dark-text z-top w-68 p-6 rounded-xl shadow-md max-w-sm dark:shadow-dark">
      <Menu.Item>
        <Link to="/me">
          <div className="flex">
            <div
              className="flex items-center justify-center overflow-hidden rounded-full mr-2 avatar flex-shrink-0"
              style={{ width: 40, height: 40 }}
            >
              <ReactImageFallback
                className="min-w-full min-h-full block flex-shrink-0"
                src={HOST + profileUser.avata}
                alt="logo"
                fallbackImage="/avata-default.jpg"
              />
            </div>
            <div>
              <p className="font-bold text-xl">{profileUser.name}</p>
              <p>{"@" + profileUser.username}</p>
            </div>
          </div>
        </Link>
      </Menu.Item>
      <hr></hr>
      <Menu.Item>
        <Link to={"/profile/"+profileUser._id}>My profile</Link>
      </Menu.Item>
      <hr></hr>
      <Menu.Item>
        <Link to="/mylearn">My learn</Link>
      </Menu.Item>
      <hr></hr>
      <Menu.Item>
        <Link to="/tutor">My Tutor</Link>
      </Menu.Item>
      <hr></hr>
      <Menu.Item>
        <a onClick={logout}>Sign out</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Disclosure as="nav" className="bg-blue-700 animate-none shadow-xl">
      {({ open }) => (
        <>
          <div className="container mx-auto xl:px-40">
            <div className="relative flex items-center justify-between h-16">
              <DrawerMenu
                category={nameCategory}
                user={user}
                profileUser={profileUser}
              ></DrawerMenu>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center rounded-lg bg-gray-200">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="/logo-iLearn.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="/logo-iLearn.svg"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden md:block md:ml-6">
                  <div className="flex">
                    <Button className="bg-blue-700 hover:bg-gray-700 rounded-md text-sm font-medium text-white border-none">
                      <DropDownMenu category={nameCategory}></DropDownMenu>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Input
                  style={{ width: "20rem" }}
                  placeholder="Search"
                  className="rounded-full mr-4 hidden md:block"
                  onChange={ChangeHandler}
                  onKeyDown={handleSearch}
                />
                {user ? (
                  <div className="hidden md:block">
                    <Dropdown
                      overlay={menu}
                      trigger={["click"]}
                      className="cursor-pointer"
                    >
                      <div
                        className="ring ring-white flex items-center justify-center overflow-hidden rounded-full cursor-pointer"
                        style={{ width: 40, height: "auto" }}
                      >
                        <ReactImageFallback
                          className="min-w-full min-h-full block flex-shrink-0"
                          src={
                            "https://ilearn-19clc3.herokuapp.com/" +
                            profileUser.avata
                          }
                          alt="logo"
                          fallbackImage="/avata-default.jpg"
                        />
                      </div>
                    </Dropdown>
                  </div>
                ) : (
                  <div className="flex space-x-4 ">
                    <Link
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium hidden md:block"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium hidden md:block"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
              <div className="block md:hidden">
                <SearchMoblie></SearchMoblie>
              </div>
            </div>
          </div>
          
        </>
      )}
    </Disclosure>
  );
}
