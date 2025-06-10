import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="absolute z-999 top-0 left-0  w-full flex  items-center justify-between p-4 bg-black/60 text-white">
        <div className="w-full mx-auto container lg:px-32">
          <Link to="/" className="font-bold text-2xl">
            302 Games
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
