import React, { useState } from "react";
import navLogo from "../assets/logo_1.png";
import { navItems } from "../content";
import { Menu, ShoppingBag, X } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => setMobileNav(!mobileNav);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-12 py-4 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800">
        {/* Logo */}
        <div className="w-24 overflow-hidden">
          <img
            src={navLogo}
            alt="Logo"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative text-neutral-100 font-medium cursor-pointer group"
            >
              <span>{item.label}</span>

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#FFC107] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/Cart.jsx"
            className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black transition-all duration-300"
          >
            <ShoppingBag size={18} />
            <span className="w-2 h-2 rounded-full absolute top-0 right-0 bg-red-600"></span>
          </Link>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#FFC107] text-black font-semibold hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex space-x-2">
          <Link
            to="/Cart.jsx"
            className="relative flex items-center gap-2 px-4 py-2 rounded-md border border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-black transition-all duration-300"
          >
            <ShoppingBag size={18} />
            <span className="w-2 h-2 rounded-full absolute top-0 right-0 bg-red-600"></span>
          </Link>

          <div
            onClick={toggleMobileNav}
            className="md:hidden cursor-pointer p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
          >
            {mobileNav ? (
              <X size={24} className="text-[#FFC107]" />
            ) : (
              <Menu size={24} className="text-[#FFC107]" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileNav && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/50 md:hidden"
              onClick={toggleMobileNav}
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 h-screen w-72 bg-neutral-900 border-l border-neutral-800 shadow-2xl z-50 md:hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-800">
                <h2 className="text-[#FFC107] text-lg font-bold">Menu</h2>

                <button
                  onClick={toggleMobileNav}
                  className="p-2 rounded-full bg-[#FFC107]"
                >
                  <X size={20} className="text-black" />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col px-8 py-10 gap-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={() => setMobileNav(false)}
                      className="text-neutral-100 text-lg font-medium hover:text-[#FFC107] transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="absolute bottom-10 left-0 w-full px-8">
                <a
                  href="#contact"
                  className="block text-center py-3 rounded-full bg-[#FFC107] text-black font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
