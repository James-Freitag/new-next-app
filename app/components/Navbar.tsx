"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 bg-cyan-900 p-4 z-50 text-white transition-all duration-300 ease-in-out ${
        !isScrolled ? "bg-cyan-900" : "bg-cyan-900/80"
      } `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">Pokemon</div>
        <ul className="flex space-x-6 font-semibold">
          <li>
            <a href="/" className=" hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
