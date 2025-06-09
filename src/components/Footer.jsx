import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full flex  items-center justify-between p-4 bg-black/60 text-white py-8 px-4">
      <div className="bottom-0 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-400">
          © 2025 302 GAMES. All rights reserved.
        </div>
        <div className="flex gap-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
