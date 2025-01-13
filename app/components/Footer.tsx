import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pokémon Search. All Rights Reserved.
        </p>
        <p className="text-sm py-2 ">- Tools used -</p>
        <ul className=" flex space-x-4 divide-x-2 px-2 justify-center items-center text-sm">
          <li>Next JS</li>
          <li className="pl-4">Pokemon free GraphQL</li>
          <li className="pl-4">Tailwindcss</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
