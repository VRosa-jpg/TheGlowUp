import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../Homepage.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#e9a1ce] p-4 shadow-md z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-white">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"></svg>
          <span className="font-semibold text-xl tracking-tight alfa-slab-one-regular">The Glow Up</span>
        </div>

        {/* NavBar Links*/}
          <div className="flex items-center justify-around">
            <div>
            </div>
              <div>
              <a href="#responsive-header" className="inline-block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mx-6 alfa-slab-one-regular">
              Docs
            </a>
            <a href="#responsive-header" className="inline-block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mx-6 alfa-slab-one-regular">
              Examples
            </a>
            <a href="#responsive-header" className="inline-block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mx-6 alfa-slab-one-regular">
              Blog
            </a>
            </div>
            <div className="inline-block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-6 alfa-slab-one-regular">
              <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white lg:mt-0">Sign Up</Link>
            </div>
          </div>
        </div>
      
    </nav>
  );
};

export default NavBar;

