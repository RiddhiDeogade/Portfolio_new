import React from 'react'
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // <-- Ensure this is inside the component


  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Riddhi Deogade</div>
            <div className='space-x-6'>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#cert" className='hover:text-gray-400'>Certificates</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#extras" className='hover:text-gray-400'>Miscellaneous</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <div className="relative inline-block">
      {/* Connect Button */}
      <button
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
      >
        Connect Me
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-49 bg-white border rounded-lg shadow-lg overflow-hidden"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <p className="block px-4 py-2 text-gray-700 ">deogaderiddhi@gmail.com </p>
          <a
            href="https://github.com/RiddhiDeogade"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 "
          >
            GitHub
          </a>
        </div>
      )}
    </div>
        </div>
    </nav>
  )
}

export default Navbar