import {FaFacebookSquare, FaGithub, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Footer() {

    return (
    <div class="absolute mt-auto bottom-0 w-screen">
        <footer class="bg-blue-700 dark:bg-gray-800 pt-4 pb-4 xl:pt-8">
            <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
                <ul class="text-lg font-light flex flex-wrap justify-center">
                    <div class="text-left mb-4 md:w-1/3 lg:w-1/3">
                            <div class="flex-1 flex sm:items-stretch sm:justify-center">
                                <div class="flex-shrink-0 flex items-center rounded-lg bg-gray-200 shadow-xl">
                                    <Link to = "/">
                                    <img
                                        class="block md:hidden h-5 w-auto"
                                        src="/logo-iLearn.svg"
                                        alt="Workflow"
                                    />
                                    <img
                                        class="hidden md:block h-14 w-auto"
                                        src="/logo-iLearn.svg"
                                        alt="Workflow"
                                    />
                                    </Link>
                                </div>
                            </div>
                    </div>
                    
                    <li class="w-screen md:w-1/3 lg:w-1/3 xs:text-xs">
                        <div class="text-center md:text-left">
                            <h2 class="text-gray-300 text-md uppercase mb-2 font-bold text-center">
                                Contacts
                            </h2>
                            <ul>
                                <li class="mb-2">
                                    <p>University of Science, Ho Chi Minh city,</p>
                                    <p>Viet Nam</p>
                                </li>
                                <li class="mb-2 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Email: iLearn@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="w-screen md:w-1/3 lg:w-1/3 hidden md:block">
                        <div class="text-left">
                            <h2 class="text-gray-300 dark:text-gray-200 text-md uppercase mb-2 font-bold text-center">
                                Share us on
                            </h2>
                            <ul>
                                <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 flex" style={{justifyContent:"space-evenly"}}>
                                    <a href="#"><FaFacebookSquare></FaFacebookSquare></a>
                                    <a href="#"><FaGithub></FaGithub></a>
                                    <a href="#"><FaInstagram></FaInstagram></a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="text-center text-xs">© 2021 iLearn, 404 Not Found</div>
            </div>
        </footer>
    </div>
    )
}