import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="absolute mt-auto bottom-0 w-screen bg-blue-700 dark:bg-gray-800">
      <footer className="container mx-auto xl:px-40 pt-4 pb-4 xl:pt-8">
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto text-gray-400 dark:text-gray-300">
          <ul className="text-lg font-light flex flex-wrap justify-center">
            <div className="text-left mb-4 md:w-1/3 lg:w-1/3">
              <div className="flex-1 flex sm:items-stretch sm:justify-center">
                <div className="flex-shrink-0 flex items-center rounded-lg bg-gray-200 shadow-xl">
                  <Link to="/">
                    <img
                      className="block md:hidden h-5 w-auto"
                      src="/logo-iLearn.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden md:block h-14 w-auto"
                      src="/logo-iLearn.svg"
                      alt="Workflow"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <li className="w-screen md:w-1/3 lg:w-1/3 xs:text-xs">
              <div className="text-center md:text-left">
                <h2 className="text-gray-300 text-md uppercase mb-2 font-bold text-center">
                  Contacts
                </h2>
                <ul>
                  <li className="mb-2">
                    <p>University of Science, Ho Chi Minh city,</p>
                    <p>Viet Nam</p>
                  </li>
                  <li className="mb-2 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                    <a href="#">Email: iLearn@gmail.com</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="w-screen md:w-1/3 lg:w-1/3 hidden md:block">
              <div className="text-left">
                <h2 className="text-gray-300 dark:text-gray-200 text-md uppercase mb-2 font-bold text-center">
                  Share us on
                </h2>
                <ul>
                  <li
                    className="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 flex"
                    style={{ justifyContent: "space-evenly" }}
                  >
                    <a href="#">
                      <FaFacebookSquare></FaFacebookSquare>
                    </a>
                    <a href="#">
                      <FaGithub></FaGithub>
                    </a>
                    <a href="#">
                      <FaInstagram></FaInstagram>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="text-center text-xs">© 2021 iLearn, 404 Not Found</div>
        </div>
      </footer>
    </div>
  );
}
