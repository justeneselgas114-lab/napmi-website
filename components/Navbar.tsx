
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About NAPMI', href: '#about', id: 'about' },
    { name: 'Standards', href: '#standards', id: 'standards' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 20);
      
      const threshold = 120;
      let currentActive = 'home';
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold + 10) {
            currentActive = navItems[i].id;
            break;
          }
        }
      }

      const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 150;
      if (isAtBottom) {
        currentActive = 'contact';
      }

      if (scrollPos < 100) {
        currentActive = 'home';
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center relative z-[110]" aria-label="Main Navigation">
        <div 
          className="flex flex-col group cursor-pointer" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className={`font-serif text-2xl md:text-3xl font-bold tracking-[0.05em] transition-colors duration-500 ${
            (isScrolled || isMobileMenuOpen) ? 'text-stone-900' : 'text-white'
          }`}>
            NAPMI
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 relative group ${
                  isScrolled 
                    ? (isActive ? 'text-stone-900' : 'text-stone-400 hover:text-stone-900') 
                    : (isActive ? 'text-white' : 'text-stone-300 hover:text-white')
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 h-[1.5px] transition-all duration-500 ${
                  isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                } ${isScrolled ? 'bg-stone-900' : 'bg-white'}`}></span>
              </a>
            );
          })}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-500 border ${
              isScrolled 
                ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-stone-900 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
            }`}
          >
            Inquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] transition-all duration-300 transform ${isScrolled || isMobileMenuOpen ? 'bg-stone-900' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-[2px]' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-[2px] transition-all duration-300 mt-1 ${isScrolled || isMobileMenuOpen ? 'bg-stone-900' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : 'translate-y-0'}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } md:hidden z-[105] pt-24`}
      >
        <div className="flex flex-col items-center justify-between h-full pb-16 px-6">
          <div className="flex flex-col items-center space-y-12 w-full mt-10">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-4xl font-serif transition-all duration-500 transform tracking-tight relative ${
                  activeSection === item.id ? 'text-stone-900 font-bold' : 'text-stone-400 font-light'
                } ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-stone-900 rounded-full"></span>
                )}
              </a>
            ))}
          </div>
          
          <div className={`text-center space-y-6 transition-all duration-700 delay-300 transform w-full ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
             <div className="w-12 h-px bg-stone-200 mx-auto"></div>
             <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-block px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] bg-stone-900 text-white rounded-sm shadow-xl"
              >
                Admissions Inquiry
              </a>
             <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold pt-4">North American Pilates & Movement Institute</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
