import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false); // close menu after clicking
    }
  };

  const navItems = ['home', 'about', 'services', 'projects', 'contact'];

  return (
    <nav className="bg-black text-white px-6 py-4 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center relative">
        <div className="text-2xl font-bold z-10">Danny</div>

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-gray-400 cursor-pointer"
              onClick={(e) => handleScroll(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-gray-400 cursor-pointer"
              onClick={(e) => handleScroll(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;