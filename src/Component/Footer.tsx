import React from 'react';
import logo from '../assets/logo-text.png'; // আপনার ইমেজ লোগো থাকলে ব্যবহার করতে পারেন

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Block: মোবাইলে সেন্টারে থাকবে, বড় স্ক্রিনে বামে */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-5">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-fuchsia-600 via-pink-600 to-purple-600 flex items-center justify-center text-white text-xs font-black shadow-sm tracking-tight">
                DS
              </span>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Dev<span className="text-[#E11D48]">Stack</span>
              </span>
            </a>
            
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            {/* Social Links */}
            <div className="mt-5 flex items-center gap-6 text-sm font-semibold text-slate-600">
              <a href="#github" className="hover:text-[#E11D48] transition-colors py-1">GitHub</a>
              <a href="#twitter" className="hover:text-[#E11D48] transition-colors py-1">Twitter</a>
              <a href="#linkedin" className="hover:text-[#E11D48] transition-colors py-1">LinkedIn</a>
            </div>
          </div>

          {/* Link Columns: মোবাইলে ২ কলাম (grid-cols-2), ট্যাবলেটে ৩ কলাম */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-7">
            
            {/* Product */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm font-medium text-slate-500">
                <li><a href="#home" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Home</a></li>
                <li><a href="#technologies" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Technologies</a></li>
                <li><a href="#projects" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Projects</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm font-medium text-slate-500">
                <li><a href="#about" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">About</a></li>
                <li><a href="#contact" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Contact</a></li>
                <li><a href="#careers" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm font-medium text-slate-500">
                <li><a href="#privacy-policy" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Privacy Policy</a></li>
                <li><a href="#terms-of-service" className="hover:text-[#E11D48] transition-colors inline-block py-0.5">Terms of Service</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-medium text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;