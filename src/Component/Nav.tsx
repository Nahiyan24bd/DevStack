import { useState } from 'react';
import logo from '../assets/logo-text.png';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* LEFT: Mobile Hamburger Menu Icon / Desktop Brand */}
          <div className="flex items-center">
            {/* Mobile Hamburger Button using react-icons */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 -ml-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition text-2xl md:hidden"
              aria-label="Toggle navigation"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Desktop Brand Logo */}
            <a href="#home" className="hidden md:flex items-center gap-2.5">
              <img src={logo} alt="DevStack Logo" className="h-8 w-auto object-contain" />
            </a>
          </div>

          {/* CENTER: Mobile Brand Logo / Desktop Nav Links */}
          {/* Mobile Center Brand */}
          <div className="flex md:hidden items-center justify-center">
            <a href="#home" className="flex items-center gap-2">
              <img src={logo} alt="DevStack Logo" className="h-7 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  link.active
                    ? 'text-[#E11D48] font-semibold'
                    : 'hover:text-[#E11D48]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT: Sign In & Sign Up (Visible on both Mobile & Desktop) */}
          <div className="flex items-center gap-1.5 sm:gap-4">
            <a
              href="#signin"
              className="text-xs sm:text-sm font-medium text-slate-700 hover:text-[#E11D48] px-2 sm:px-3 py-1.5 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="text-xs sm:text-sm font-medium text-white bg-[#E11D48] hover:bg-[#BE123C] active:scale-95 px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-sm shadow-pink-500/20 transition-all duration-150 whitespace-nowrap"
            >
              Sign Up
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-4 py-4 space-y-1">
          <nav className="flex flex-col text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-lg transition-colors ${
                  link.active
                    ? 'bg-pink-50 text-[#E11D48] font-semibold'
                    : 'hover:bg-slate-50 hover:text-[#E11D48]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;