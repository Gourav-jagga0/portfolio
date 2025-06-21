'use client';
import Link from 'next/link';
import { MouseEvent, useEffect, useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [hoveringTop, setHoveringTop] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShow(true);
      } else if (currentScrollY > lastScrollY && !hoveringTop) {
        setShow(false);
      } else if (currentScrollY < lastScrollY) {
        setShow(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hoveringTop]);
  const gotoView = (e: MouseEvent<HTMLAnchorElement> | { preventDefault: () => void },targetId: string) => {
    e.preventDefault();
    
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
      <nav className={`fixed top-0 left-0 w-full bg-white shadow-sm z-10 transform transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7 h-12" >
              <div>
                <img src={'/Favicons/code.png'} className="w-full h-full object-cover" alt="Cover Example"></img>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link href="#about" className="py-4 px-2 text-gray-700 hover:text-gray-900"   onClick={(e) => gotoView(e, 'about')}>About</Link>
              <Link href="#projects" className="py-4 px-2 text-gray-700 hover:text-gray-900"onClick={(e) => gotoView(e, 'projects')}>Projects</Link>
              <Link href="#skills" className="py-4 px-2 text-gray-700 hover:text-gray-900"onClick={(e) => gotoView(e, 'skills')}>Skills</Link>
              <Link href="#contact" className="py-4 px-2 text-gray-700 hover:text-gray-900"onClick={(e) => gotoView(e, 'contact')}>Contact</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
}
