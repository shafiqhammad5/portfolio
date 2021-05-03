import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/shafiqhammad.jpg";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://facebook.com/shafiqhammad5",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/shafiqhammad5",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com/in/shafiqhammad5/",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "https://instagram.com/shafiqhammad5/",
  },
  {
    id: 5,
    icon: <FaBehance />,
    link: "https://behance.net/shafiqhammad5",
  },
  {
    id: 6,
    icon: <FaDribbble />,
    link: "https://dribbble.com/shafiqhammad5",
  },
  {
    id: 7,
    icon: <FaSkype />,
    link: "https://join.skype.com/invite/Mh53sEmoPldX",
  },
  {
    id: 7,
    icon: <FaTwitter />,
    link: "https://twitter.com/ShafiqHammad10",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
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
        <a
          href="https://docs.google.com/uc?export=download&id=1BgyXqa9gMAyJtJYMbZ1SSOliNApffpgH"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
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

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  console.log(props.social);
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
