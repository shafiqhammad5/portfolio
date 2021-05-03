import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaSkype } from "react-icons/fa";
import profile from "../../../images/shafiqhammad.jpg";

const Sidebar = () => {
  return (
    <aside className="bg-white mx-4 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Shafiq Hammad</h1>
        <p className="text-sm text-gray-400 mb-3">
          Frontend Web Developer at
          <a href="#0" className="text-purple-600 pl-1">
            Graygrids
          </a>
        </p>
        <button className="mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800">
          Download Resume
        </button>
        <ul className="flex flex-wrap justify-center">
          <li className="m-2">
            <a
              href="#0"
              className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
            >
              <FaFacebookF />
            </a>
          </li>
          <li className="m-2">
            <a
              href="#0"
              className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="m-2">
            <a
              href="#0"
              className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
            >
              <FaGithub />
            </a>
          </li>
          <li className="m-2">
            <a
              href="#0"
              className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
            >
              <FaSkype />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text-sm">
          Hey! I'm Shafiqul Islam Hammad. I'm a web designer with UI UX
          experience. I've got a good experience in html5, css3, javascript,
          jquery, bootstrap, responsive design. I'll design pixel-perfect, clean
          and pure hand-coding. I don't waste clients' time in his work. I
          complete the work on time. Thanks!
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
