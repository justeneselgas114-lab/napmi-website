
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 py-20 md:py-32 text-stone-500 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 mb-24">
          
          <div className="lg:col-span-2 space-y-10">
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-bold text-white mb-2 tracking-tight">NAPMI</span>
              <div className="flex items-center gap-3">
                 <div className="h-px w-6 bg-stone-700"></div>
                 <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 font-bold">Institutional Registry</span>
              </div>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-md opacity-60">
              The North American Pilates & Movement Institute (NAPMI) is a premier global authority for Pilates and movement science education, dedicated to establishing the highest standards of professional excellence through rigorous 609-hour certification pathways.
            </p>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Institute</h4>
            <nav className="flex flex-col space-y-6">
              <a href="#home" className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-500 font-medium">Overview</a>
              <a href="#about" className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-500 font-medium">Curriculum</a>
              <a href="#standards" className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-500 font-medium">Standards</a>
              <a href="#contact" className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-500 font-medium">Admissions</a>
            </nav>
          </div>

          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Professional</h4>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest opacity-60 cursor-default hover:text-stone-300 transition-colors">Certification Pathways</p>
              <p className="text-xs uppercase tracking-widest opacity-60 cursor-default hover:text-stone-300 transition-colors">Continuing Education</p>
              <p className="text-xs uppercase tracking-widest opacity-60 cursor-default hover:text-stone-300 transition-colors">Alumni Directory</p>
              <p className="text-xs uppercase tracking-widest opacity-60 cursor-default hover:text-stone-300 transition-colors">Institutional Ethics</p>
            </div>
          </div>

        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="text-[9px] uppercase tracking-[0.3em] font-light">
              &copy; {new Date().getFullYear()} NAPMI &bull; Established 2020
            </span>
            <div className="hidden md:block w-[1px] h-3 bg-stone-800"></div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-light">
              Global Standards Protocol v1.4
            </span>
          </div>

          <div className="flex gap-10">
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] font-bold hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] font-bold hover:text-white transition-colors">Academic Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
