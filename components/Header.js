import React from 'react'
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="hidden sticky top-0 z-50 md:grid md:grid-cols-2 h-26 bg-stone-700 shadow-md py-5 px-4 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <div className="flex items-center space-x-4 text-white">
          <h2>Skin Care</h2>
          <h2>Body&Hand</h2>
          <h2>Hair</h2>
          <h2>Fragrance</h2>
          <h2>Home</h2>
          <h2>Kits &travel</h2>
          <h2>Gifts</h2>
          <h2>Read</h2>
          <h2>Store</h2>
          <SearchIcon className="hidden md:inline-flex lg:mr-4 md:mr-3 h-6   cursor-pointer  " />
        </div>
      </div>

      {/* middle */}

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-white">
        <p className="hidden md:inline-flex cursor-pointer">Login</p>
        <p className="hidden md:inline-flex cursor-pointer">Cart</p>
        {/* <GlobeAltIcon className="hover:animate-spin h-6 cursor-pointer" /> */}
        
      </div>
    </header>
  );
  
}

export default Header