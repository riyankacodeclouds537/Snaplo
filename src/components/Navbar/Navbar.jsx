import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa"; // Import user icon

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#", hasDropdown: true },
  { id: 3, name: "Kids Wear", link: "/#", hasDropdown: true },
  { id: 4, name: "Womens Wear", link: "/#", hasDropdown: true },
  { id: 5, name: "Mens Wear", link: "/#", hasDropdown: true },
  { id: 6, name: "Electronics", link: "/#", hasDropdown: true },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling Products", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeAccountDropdown, setActiveAccountDropdown] = useState(false); // Account dropdown state

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleAccountDropdownToggle = () => {
    setActiveAccountDropdown(!activeAccountDropdown); // Toggle account dropdown
  };

  return (
    <header className="shadow-md bg-black text-white duration-200 relative z-40 sticky top-0">
      {/* Top Navbar */}
      <div className="bg-primary/10 py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-white-800">Snaplo</span>
          </a>

          {/* Search and Account/Carts */}
          <div className="flex items-center gap-4">
            {/* Account Icon */}
            <div className="relative group">
              <FaUser
                className="text-2xl cursor-pointer text-white hover:text-primary transition-all duration-200"
                onClick={handleAccountDropdownToggle}
              />
              {/* Account Dropdown */}
              {activeAccountDropdown && (
                <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 shadow-lg rounded-md w-[160px] z-50">
                  <ul className="py-2 text-sm">
                    <li>
                      <a
                        href="/signup"
                        className="block px-4 py-2 text-gray-800 hover:bg-primary/10 transition-colors duration-200"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a
                        href="/login"
                        className="block px-4 py-2 text-gray-800 hover:bg-primary/10 transition-colors duration-200"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Search bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                spellCheck="false"
                className="w-[200px] group-hover:w-[280px] transition-all duration-300 rounded-full border border-black px-4 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <IoMdSearch className="text-black absolute top-1/2 right-4 transform -translate-y-1/2" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-200 text-white py-2 px-5 rounded-full flex items-center gap-2"
            >
              <span className="text-sm hidden sm:inline">Order</span>
              <FaCartShopping className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav data-aos="zoom-in" className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-center">
          <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-white-700">
            {Menu.map((item, index) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => handleDropdownToggle(index)}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                <a
                  href={item.link}
                  className={`flex items-center gap-1 hover:text-primary transition duration-200 ${item.hasDropdown ? "cursor-pointer" : ""}`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <FaCaretDown
                      className={`transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === index && (
                  <div className="absolute top-full mt-2 left-0 bg-black border border-gray-200 shadow-lg rounded-md w-[220px] z-50">
                    <ul className="py-2">
                      {DropdownLinks.map((dropdownItem) => (
                        <li key={dropdownItem.id}>
                          <a
                            href={dropdownItem.link}
                            className="block px-4 py-2 hover:bg-primary/10 text-sm transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
