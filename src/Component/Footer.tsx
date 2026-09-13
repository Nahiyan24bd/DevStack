// import React from 'react';
import footerlogo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-12 md:pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Brand Block */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-5">
            <a href="#home" className="inline-block">
              <img 
                src={footerlogo} 
                alt="DevStack Logo" 
                className="h-8 sm:h-9 w-auto object-contain" 
              />
            </a>
            
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            {/* Social Links (Dot separator on mobile, space on desktop) */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 sm:gap-6 text-sm font-medium text-slate-600">
              <a href="#github" className="hover:text-[#E11D48] transition-colors">GitHub</a>
              <span className="text-slate-400 select-none text-xs sm:hidden">•</span>
              <a href="#twitter" className="hover:text-[#E11D48] transition-colors">Twitter</a>
              <span className="text-slate-400 select-none text-xs sm:hidden">•</span>
              <a href="#linkedin" className="hover:text-[#E11D48] transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Links Block (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:grid grid-cols-3 gap-8 lg:col-span-7">
            
            {/* Product */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                <li><a href="#home" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Home</a></li>
                <li><a href="#technologies" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Technologies</a></li>
                <li><a href="#projects" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Projects</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                <li><a href="#about" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">About</a></li>
                <li><a href="#contact" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Contact</a></li>
                <li><a href="#careers" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                <li><a href="#privacy-policy" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Privacy Policy</a></li>
                <li><a href="#terms-of-service" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Terms of Service</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-row items-center justify-between text-xs text-slate-400">
          <p className="font-normal">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;