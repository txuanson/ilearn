import { Disclosure, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Menu, Dropdown, Button, Drawer, Radio, Space} from "antd";
import ReactImageFallback from "react-image-fallback";
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";
import { logout } from "../../utils/auth";
import DropDownMenu from "../menu/DropDownMenu";
import { useEffect, useState } from "react";
import { getAllCategory } from "../../api/homePage";
import DrawerMenu from "../menu/DrawerMenu";

const navigation = [
  { name: "Tutor", to: "/tutor", isCalendar: false},
  { name: "Team", to: "#", isCalendar: false},
  { name: "Projects", to: "#", isCalendar: false},
  { name: "Calendar", to: "#", isCalendar: true},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const menu = (
  <Menu className="bg-white dark:bg-dark-black dark:text-dark-text z-top w-68 p-6 rounded-xl shadow-md max-w-sm dark:shadow-dark">
    <Menu.Item>
      <div className="flex">
        <div
          className="flex items-center justify-center overflow-hidden rounded-full mr-2 avatar flex-shrink-0"
          style={{ width: 40, height: 40 }}
        >
          <ReactImageFallback
            className="min-w-full min-h-full block flex-shrink-0"
            src=""
            alt="logo"
            fallbackImage="/avata-default.jpg"
          />
        </div>
        <div>
          <p className="font-bold text-xl">Hoàng Khanh</p>
        </div>
      </div>
    </Menu.Item>
    <Menu.Item>
      <hr></hr>
    </Menu.Item>
    <Menu.Item>
      <Link to="/profile">My profile</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/mycourse">My course</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/setting">Setting</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/support">Help and support</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/feedback">Send Feedback</Link>
    </Menu.Item>
    <Menu.Item>
      <hr></hr>
    </Menu.Item>
    <Menu.Item>
      <a onClick={logout}>Sign out</a>
    </Menu.Item>
  </Menu>
);

export default function Header({ user, ...props }) {
  const [nameCategory, setNameCategory] = useState([]);

  useEffect(async () => {
    try {
      const res = await getAllCategory()
      setNameCategory(res);
      console.log(res)
    } catch (err) {
      console.log("fail");
    }
  }, []);
  return (
    <Disclosure as="nav" className="bg-blue-700 animate-none shadow-xl">
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
            <DrawerMenu category={nameCategory} user = {user}></DrawerMenu>
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
                  <div className="flex space-x-4">
                    <div className = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <DropDownMenu category={nameCategory}></DropDownMenu>
                    
                    </div>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.isCalendar
                            ? "hidden lg:block"
                            : "t",
                          "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        // className = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user ? (
                  <Dropdown
                    overlay={menu}
                    trigger={["click"]}
                    className="cursor-pointer"
                  >
                    <div
                      className="ring ring-white flex items-center justify-center overflow-hidden rounded-full cursor-pointer"
                      style={{ width: 40, height: 40 }}
                    >
                      <ReactImageFallback
                        className="min-w-full min-h-full block flex-shrink-0"
                        src={user.avata}
                        alt="logo"
                        fallbackImage="/avata-default.jpg"
                      />
                    </div>
                  </Dropdown>
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
            </div>
          </div>
          {/* <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <></>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
}
