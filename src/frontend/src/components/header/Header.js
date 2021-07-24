/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Menu, Dropdown, Button } from 'antd';
import ReactImageFallback from 'react-image-fallback';
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";


const navigation = [
  { name: 'Dashboard', to: '/dashboard', current: true },
  { name: 'Team', to: '/register', current: false },
  { name: 'Projects', to: '#', current: false },
  { name: 'Calendar', to: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const menu = (
    
    <Menu className="bg-white dark:bg-dark-black dark:text-dark-text z-top w-68 p-6 rounded-xl shadow-md max-w-sm dark:shadow-dark">
        <Menu.Item >
        <div className = "flex">
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
              <p className="font-bold text-xl">
                Hoàng Khanh
              </p>
        </div>
        </div>
        </Menu.Item>
        <Menu.Item>
        <hr></hr>
        </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          My profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          My course
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Setting
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Help and support
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Send Feedback
        </a>
      </Menu.Item>
      <Menu.Item>
        <hr></hr>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Sign out
        </a>
      </Menu.Item>

    </Menu>
  );

export default function Header({user,...props}) {
  return (
    <Disclosure as="nav" className="bg-blue-700 animate-none">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center rounded-lg bg-gray-200">
                  <Link to = "/">
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
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-blue-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {user ? (
            <Dropdown overlay={menu} trigger={['click']} className="cursor-pointer">
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
              ):(
                <div className = "flex space-x-4 hidden md:block">
                    <Link to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
                </Link>
                <Link to="/register"
                className="text-gray-300 hover:bg-gray-700 hover:text-white text-white px-3 py-2 rounded-md text-sm font-medium">
                Register
                </Link>
                </div>
                
              )}
                
            </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              {user? (<></>):(
                <Link
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
              )}
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  )
}