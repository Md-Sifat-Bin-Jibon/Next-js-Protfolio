import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-6 rounded-full border border-gray-200 bg-white/80 backdrop-blur px-6 py-3 shadow-sm">
        <li>
          <a
            href="#home"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tech"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Tech Stack
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Experience
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
