
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const target = document.querySelector(id);
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
    <section 
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-stone-900"
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full scale-110 animate-[kenburns_60s_ease-in-out_infinite_alternate]">
          <img 
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2400" 
            alt="Institutional Pilates Studio" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-900/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 text-center">
        <div className="space-y-6 md:space-y-10">
          <div className="overflow-hidden">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] text-stone-300 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-1000">
              Institutional Excellence &bull; Est. 2020
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 leading-[1.1] md:leading-[1.05] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            International Certification in Classical & <br className="hidden sm:block" /> Contemporary & Movement Science
          </h1>
          
          <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-stone-100 opacity-95">
              International Education & Certification in <br className="hidden md:block" /> Pilates and Movement Science
            </p>
            <div className="h-[1.5px] w-12 md:w-20 bg-white/30 mx-auto"></div>
          </div>

          <div className="pt-6 md:pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-in fade-in zoom-in-95 duration-1000 delay-500 fill-mode-both">
            <button 
              onClick={() => scrollTo('#standards')}
              className="group relative overflow-hidden bg-white text-stone-900 px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] rounded-sm transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] active:scale-95 w-full sm:w-auto"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-stone-100">View Certification Pathways</span>
              <div className="absolute inset-0 bg-stone-900 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
            </button>
            <button 
              onClick={() => scrollTo('#about')}
              className="group relative overflow-hidden border border-white/40 text-white px-8 md:px-12 py-4 md:py-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] rounded-sm transition-all duration-500 hover:bg-white/10 active:scale-95 w-full sm:w-auto"
            >
              <span className="relative z-10">About the Institute</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 opacity-60 animate-bounce duration-[2000ms]">
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/50 font-bold">Explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/80 to-transparent"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.3); }
        }
      `}} />
    </section>
  );
};

export default Hero;
