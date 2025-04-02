import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-950 text-white body-font w-full fixed top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <a className="flex title-font font-medium items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Hackblocks</span>
        </a>
        
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>

        <nav className="hidden md:flex md:ml-auto md:mr-auto text-xl space-x-20">
          <a className="hover:text-blue-400" href="#">Home</a>
          <a className="hover:text-blue-400" href="#">About</a>
          <a className="hover:text-blue-400" href="#">Services</a>
          <a className="hover:text-blue-400" href="#">Contact</a>
        </nav>

        <button className="hidden md:inline-flex items-center bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-lg text-base">Sign up
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden md:hidden bg-blue-950 text-center"
      >
        <nav className="flex flex-col space-y-4 py-4">
          <a className="hover:text-blue-400" href="#">Home</a>
          <a className="hover:text-blue-400" href="#">About</a>
          <a className="hover:text-blue-400" href="#">Services</a>
          <a className="hover:text-blue-400" href="#">Contact</a>
          <button className="bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-lg text-base">Sign up</button>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;
