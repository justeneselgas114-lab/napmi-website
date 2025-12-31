import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

const standards = [
  { title: 'Pedagogical Excellence', content: 'Comprehensive Curricula spanning over 609 hours of Classical and Contemporary Pilates Methodology.' },
  { title: 'Global Ethics', content: 'A rigorous code of conduct ensuring the highest level of professional and educational integrity.' },
  { title: 'Continuous Education', content: 'Ongoing mentorship for our students from our network of instructors all over the world.' },
];

const FacultyAndStandards: React.FC = () => {
  const [coords, setCoords] = useState({ lat: '34.0522', lng: '-118.2437' });

  // Simulate real-time coordinate tracking
  useEffect(() => {
    const interval = setInterval(() => {
      const lat = (34 + Math.random() * 2).toFixed(4);
      const lng = (-118 + Math.random() * 2).toFixed(4);
      setCoords({ lat, lng });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="standards" className="py-24 md:py-40 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* International Network */}
        <div className="mb-40 md:mb-56">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-8">International Network</h2>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 tracking-tight mb-8">World-Class Instructors</p>
                <div className="space-y-6 text-stone-600 leading-relaxed font-light text-base md:text-lg max-w-xl">
                  <p>
                    Our programs are designed to develop instructors who meet international benchmarks in movement education. We follow the North American gold standard for Pilates methodology, integrating both classical and contemporary approaches.
                  </p>
                  <p>
                    Graduates are qualified to teach in professional studios, clinical settings, and wellness facilities worldwide, and are prepared to compete internationally through rigorous training, assessment, and standards-based certification.
                  </p>
                </div>
                
                <div className="mt-12 flex flex-wrap gap-3">
                  {['California', 'Eastern Europe', 'Maldives', 'Singapore', 'Philippines'].map((name) => (
                    <span key={name} className="px-4 py-2 bg-white border border-stone-200 text-[9px] font-bold uppercase tracking-widest text-stone-500 rounded-sm hover:border-stone-900 hover:text-stone-900 transition-all duration-300 cursor-default">
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* World Map Real-time Tracker Visualization */}
              <div className="relative aspect-[16/10] bg-stone-950 border border-stone-200 rounded-sm overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                
                {/* Custom Map Image */}
                <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-1000">
                  <img 
                    src="https://i.postimg.cc/rw87MGv4/Gemini-Generated-Image-qqeprhqqeprhqqep.png" 
                    alt="Institutional World Map Visualization" 
                    className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.9]"
                  />
                </div>

                {/* TRACKER OVERLAYS */}
                
                {/* 1. Moving Scanline Animation */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                  <div className="w-full h-[2px] bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-[scan_8s_linear_infinite]"></div>
                </div>

                {/* 2. Pulsing Network Nodes (Subtle, non-pinpoint) */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  {[
                    {t:'35%', l:'18%'}, {t:'28%', l:'55%'}, {t:'62%', l:'72%'}, {t:'58%', l:'85%'}
                  ].map((pos, i) => (
                    <div key={i} className="absolute w-2 h-2" style={{ top: pos.t, left: pos.l }}>
                      <div className="absolute inset-0 bg-white/40 rounded-full animate-ping opacity-20"></div>
                      <div className="absolute inset-[-4px] border border-white/10 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>

                {/* 3. Real-time Data Feed Text */}
                <div className="absolute bottom-6 left-6 z-30 font-mono text-[8px] text-white/40 uppercase tracking-[0.2em] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span>System Active // Registry: Global</span>
                  </div>
                  <div className="opacity-60">
                    LAT: {coords.lat} <br />
                    LNG: {coords.lng}
                  </div>
                </div>

                {/* 4. Digital Corner Accents */}
                <div className="absolute top-0 right-0 p-4 opacity-30 pointer-events-none">
                  <div className="w-12 h-12 border-t border-r border-white/40"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-4 opacity-30 pointer-events-none">
                  <div className="w-12 h-12 border-b border-l border-white/40"></div>
                </div>

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 z-20 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                
                {/* Institutional Label */}
                <div className="absolute top-6 left-6 z-30 text-[9px] font-bold text-white/60 uppercase tracking-[0.4em] hidden md:block">
                  NAPMI Global Registry // v1.4
                </div>

                {/* Dark Vignette */}
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Standards & Candidate Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-16">
            <Reveal>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-12">Institutional Standards</h2>
              <div className="flex flex-wrap items-center gap-12 md:gap-16 mb-16">
                 <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:border-stone-400 group-hover:scale-[1.02] transition-all duration-500 overflow-hidden p-4 shadow-sm">
                       <img 
                         src="https://i.postimg.cc/vBDPY88m/604397463_899260902441847_42280666261289335_n.png" 
                         alt="NPCP Certified" 
                         className="max-w-full max-h-full object-contain transition-all duration-500"
                       />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400 group-hover:text-stone-900 transition-colors">National Certification</span>
                 </div>
                 <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:border-stone-400 group-hover:scale-[1.02] transition-all duration-500 overflow-hidden p-4 shadow-sm">
                       <img 
                         src="https://i.postimg.cc/JntTr77z/605540681_1923583511916209_6633677741334449741_n.png" 
                         alt="PMA Alliance" 
                         className="max-w-full max-h-full object-contain transition-all duration-500"
                       />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400 group-hover:text-stone-900 transition-colors">Method Alliance</span>
                 </div>
              </div>
              <div className="space-y-12">
                {standards.map((s) => (
                  <div key={s.title} className="group relative pl-8 border-l border-stone-200">
                    <div className="absolute left-[-1px] top-0 h-0 w-[1px] bg-stone-900 transition-all duration-700 group-hover:h-full"></div>
                    <h4 className="font-bold text-stone-900 mb-3 uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform duration-500">{s.title}</h4>
                    <p className="text-stone-500 font-light leading-relaxed text-base group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      {s.content}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={300}>
              <div className="bg-white p-10 sm:p-14 md:p-20 border border-stone-100 rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] relative z-10">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-12">Admission Profiles</h2>
                <div className="space-y-12">
                  <div>
                    <h4 className="text-stone-900 font-bold mb-4 uppercase tracking-widest text-xs">Candidacy Requirements</h4>
                    <p className="text-stone-500 text-sm md:text-base font-light leading-relaxed">
                      We seek dedicated professionals with existing backgrounds in physiotherapy, physical education, dance, sports science, or high-level performance arts who would want to advance their career in the Pilates Methodology.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 right-[-20px] bottom-[-20px] left-10 border border-stone-200 -z-0 hidden md:block"></div>
            </Reveal>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(-10%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default FacultyAndStandards;