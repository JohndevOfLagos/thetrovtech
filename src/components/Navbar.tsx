import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo-grey.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/">
          <img src={Logo} alt="Xfinity" className="h-8" />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
          <Link to="/" className="hover:text-violet-800 transition">Home</Link>
          <Link to="/about" className="hover:text-violet-800 transition">About Us</Link>
          <Link to="/contact" className="hover:text-violet-800 transition">Contact</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link 
          to="/login" 
          className="px-6 py-2 rounded-full border border-violet-800 text-violet-800 font-semibold text-sm hover:bg-violet-50 transition"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
