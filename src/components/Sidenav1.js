// src/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar1";

function Sidenav() {
  return (
    <div className="w-auto bg-primary text-white p-4 bg-primary-clr h-screen to-5% border-spacing-3 border-bg-white text-bg-white  ">
      <div className="flex justify-center items-center pt-5 pb-10">
        <img
          className="text-3xl justify-center bg-bg-clr rounded-xl"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/India_Post_Logo.svg/1200px-India_Post_Logo.svg.png"
          width={150}
        />
      </div>
      <div className="p-5 text-primary-clr font-extrabold text-2xl">
        <ul className="">
          <li className="space-x-4 space-y-4 py-3 px-6 mb-2 bg-gradient-to-r from-secondary-clr to-bg-white rounded-lg border-1 shadow-xl h-18">
            <Link
              to="/dashboard"
              className="text-secondary hover:text-secondary"
            >
              Dash Board
            </Link>
          </li>
          <li className="space-x-4 space-y-4 py-3 px-6 mb-2 bg-gradient-to-r from-secondary-clr to-bg-white rounded-lg border-1 shadow-xl h-18">
            <Link
              to="/dataentry"
              className="text-secondary hover:text-secondary"
            >
             Data Entry
            </Link>
          </li>
          <li className="py-3 px-6 mb-2 bg-gradient-to-r from-secondary-clr to-bg-white rounded-lg border-1 shadow-xl h-18">
            <Link
              to="/dashboard/bo"
              className="text-secondary hover:text-secondary"
            >
             Edit
            </Link>
          </li>
          <li className="py-3 px-6 mb-2 bg-gradient-to-r from-secondary-clr to-bg-white rounded-lg border-1 shadow-xl h-18">
            <Link
              to="/dashboard/bc"
              className="text-secondary hover:text-secondary"
            >
            delete
            </Link>
          </li>
          <li className="py-3 px-6 mb-2 bg-gradient-to-r from-secondary-clr to-bg-white rounded-lg border-1 shadow-xl h-18">
            <Link
              to="/dashboard/bd"
              className="text-secondary hover:text-secondary"
            >
             Report
            </Link>
          </li>
          <li className="space-x-4 space-y-4 py-3 px-6 mb-2 bg-gradient-to-r from-secondary-clr to-bg-white rounded-lg border-1 shadow-xl h-18">
            <Link
              to="/dashboard/br"
              className="text-secondary hover:text-secondary"
            >
             Other Report
            </Link>
          </li>
        </ul>
      </div>{" "}
    </div>
  );
}

export default Sidenav;
