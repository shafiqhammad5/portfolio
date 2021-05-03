import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Service from "../../pages/Service/Service";

const Navbar = () => {
  const [isActive, setIsActive] = useState(" ");
  const menuActiveHandler = (e, menu) => {
    // e.target.href ===
    setIsActive(!menu);
    console.log(e.target);
  };

  let classes;
  if (isActive) {
    classes = `text-purple-600`;
  } else {
    classes = `text-gray-800`;
  }
  console.log(isActive, classes);

  return (
    <Router>
      <nav className="mx-4 px-4 py-8">
        <ul className="flex">
          <li className="mr-10">
            <Link
              onClick={() => menuActiveHandler(true)}
              to="/"
              className={classes + ` text-medium hover:text-purple-600`}
            >
              About
            </Link>
          </li>
          <li className="mr-10">
            <Link
              onClick={() => menuActiveHandler(false)}
              to="/services"
              className={classes + ` text-medium hover:text-purple-600`}
            >
              Services
            </Link>
          </li>
          <li className="mr-10">
            <Link
              onClick={() => menuActiveHandler("works")}
              to="/works"
              className={classes}
            >
              Works
            </Link>
          </li>
          <li className="mr-10">
            <Link
              onClick={() => menuActiveHandler("blogs")}
              to="/blogs"
              className={classes}
            >
              Blogs
            </Link>
          </li>
          <li className="mr-10">
            <Link
              onClick={() => menuActiveHandler("contact")}
              to="/contact"
              className={classes}
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
