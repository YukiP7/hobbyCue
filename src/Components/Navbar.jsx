import React from 'react';
import { FaSearch, FaCompass, FaStar, FaBell, FaShoppingCart, FaBookmark  , FaCaretDown} from 'react-icons/fa';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-20  w-auto">
      <div className="container mx-auto px-4 py-2 flex justify-around items-center">
        <div className="flex items-center">
          <img src= {logo} alt="Logo" className="h-14 w-72 mr-2" />
        </div>
        <div className="flex items-center w-80 h-10">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-grow border rounded-l px-4 py-2 focus:outline-none"
          />
          <button className="bg-purple-500 text-white h-10 w-10 rounded-r px-2">
            <FaSearch />
          </button>
        </div>
        <div className="flex items-center space-x-4 gap-4">
          <div className="flex items-center space-x-1 cursor-pointer ">
            <FaCompass className="text-purple-500" />
            
            <select className='text-gray-600 bg-white'>
              <option hidden ><span className="text-gray-600">Explore</span></option>
              <option>People - Community</option>
              <option>Places - Venues</option>
              <option>Programs - Events</option>
              <option>Products - Store</option>
              <option>Blogs</option>
            </select>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <FaStar className="text-purple-500" />
            <span className="text-gray-600">Hobbies</span>
            <FaCaretDown className="text-gray-600" />
          </div>
          <FaBookmark className="text-purple-500 cursor-pointer" />
          <FaBell className="text-purple-500 cursor-pointer" />
          <FaShoppingCart className="text-purple-500 cursor-pointer" />
          <button className="border border-purple-500 text-purple-500 text-center px-5 py-2 rounded-lg hover:bg-purple-500 hover:text-white drop-shadow-md font-semibold" >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
