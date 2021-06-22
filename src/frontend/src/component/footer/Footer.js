import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#14254a" }} className="">
      <div className="container mx-auto text-white py-8 flex items-baseline flex-wrap">
        <div className="mx-2 flex items-baseline">
          <Link to="/">
            <h2 className="text-white font-semibold text-3xl md:mx-2">
              <span className="text-blue-500">i</span>Learn
            </h2>
          </Link>
          <p className="ml-2">© 2021 iLearn</p>
          <p className="ml-2">Power by iHelloWorld</p>
        </div>

        <ul className="flex md:ml-auto items-baseline justify-center h-full">
          <Link to="/">
            <li className="mx-2 text-white">Home</li>
          </Link>
          <Link to="/new">
            <li className="mx-2 text-white">New class</li>
          </Link>
          <Link to="/trending">
            <li className="mx-2 text-white">Trending</li>
          </Link>
          <Link to="/about">
            <li className="mx-2 text-white">About us</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
