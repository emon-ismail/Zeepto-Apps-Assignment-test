import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <div className="md:px-10">
      <nav
        className="rounded-b-md md:rounded-lg shadow-md p-4 w-full md:px-20"
        style={{ backgroundColor: "#000" }} // Navbar background color changed to black
      >
        <div className="flex justify-between items-center">
          {/* Logo with AOS animation */}
          <div
            className="text-2xl md:text-3xl font-bold text-gradient"
            data-aos="zoom-in-up"
          >
            <NavLink
              to="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
            >
              KnowledgeBase
            </NavLink>
          </div>

          {/* Links - Hidden on small screens */}
          <div
            className="hidden md:flex space-x-8 items-center"
            data-aos="fade-left"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 border-b-2 border-purple-500"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-lg font-semibold hover:text-blue-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive
                  ? "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 border-b-2 border-purple-500"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-lg font-semibold hover:text-blue-500"
              }
            >
              Wishlist
            </NavLink>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" /> // Close icon
              ) : (
                <FaBars className="w-6 h-6" /> // Hamburger icon
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden bg-black text-center shadow-md mt-2 p-4 w-full transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`} // Add a transition effect for smooth menu opening and closing
          >
            <NavLink
              to="/"
              onClick={toggleMenu} // Close menu after clicking
              className={({ isActive }) =>
                isActive
                  ? "block py-2 font-bold text-xl text-pink-500 border border-pink-500 bg-white rounded-lg transition-all"
                  : "block py-2 font-bold text-lg text-pink-500 hover:text-blue-500 hover:bg-white rounded-lg transition-all"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/wishlist"
              onClick={toggleMenu} // Close menu after clicking
              className={({ isActive }) =>
                isActive
                  ? "block py-2 font-bold text-xl text-pink-500 border border-pink-500 bg-white rounded-lg transition-all"
                  : "block py-2 font-bold text-lg text-pink-500 hover:text-blue-500 hover:bg-white rounded-lg transition-all"
              }
            >
              Wishlist
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
