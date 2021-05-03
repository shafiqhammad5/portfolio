import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Service from "../../pages/Service/Service";

const Navbar = () => {
  return (
    <Router>
      <nav className="mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="flex flex-wrap">
          <li className="m-3 lg:mx-5">
            <Link
              to="/"
              className="text-gray-800 text-medium hover:text-purple-600"
            >
              About
            </Link>
          </li>
          <li className="m-3 lg:mx-5">
            <Link
              to="/services"
              className="text-gray-800 text-medium hover:text-purple-600"
            >
              Services
            </Link>
          </li>
          <li className="m-3 lg:mx-5">
            <Link
              to="/works"
              className="text-gray-800 text-medium hover:text-purple-600"
            >
              Works
            </Link>
          </li>
          <li className="m-3 lg:mx-5">
            <Link
              to="/blogs"
              className="text-gray-800 text-medium hover:text-purple-600"
            >
              Blogs
            </Link>
          </li>
          <li className="m-3 lg:mx-5">
            <Link
              to="/contact"
              className="text-gray-800 text-medium hover:text-purple-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/services">
          <Service />
        </Route>
        <Route path="/works">
          <Portfolio />
        </Route>
        <Route path="/blogs">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
