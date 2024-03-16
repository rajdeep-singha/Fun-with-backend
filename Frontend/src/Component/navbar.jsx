import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      {/* Main Navbar */}
      <ul className="flex">
        <li className="mr-4">
          <Link to={"/"} className="text-yellow border border-yellow px-4 py-2 rounded-md">Home</Link>
        </li>
        <li className="mr-4">
          <Link to="/About" className="text-yellow border border-yellow px-4 py-2 rounded-md">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-yellow border border-yellow px-4 py-2 rounded-md">Contact</Link>
        </li>
        <li>
          <Link to="/SignIn" className="text-yellow border border-yellow px-4 py-2 rounded-md">SignIn</Link>
        </li>
      </ul>

      {/* University Navbar */}
      <ul className="flex mt-4">
        <li className="mr-4">
          <Link to="/university" className="text-yellow border border-yellow px-4 py-2 rounded-md">Listed Universities</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;