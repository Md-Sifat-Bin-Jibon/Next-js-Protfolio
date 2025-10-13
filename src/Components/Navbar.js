import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-8 rounded-full border border-gray-200/50 bg-white/90 backdrop-blur-md px-8 py-4 shadow-lg">
        <li>
          <a
            href="#home"
            className="flex flex-col items-center gap-1 text-xs font-medium text-gray-700 hover:text-[#dfb425] transition-colors duration-200 group"
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#tech"
            className="flex flex-col items-center gap-1 text-xs font-medium text-gray-700 hover:text-[#dfb425] transition-colors duration-200 group"
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
            <span>Tech</span>
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="flex flex-col items-center gap-1 text-xs font-medium text-gray-700 hover:text-[#dfb425] transition-colors duration-200 group"
          >
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Experience</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
