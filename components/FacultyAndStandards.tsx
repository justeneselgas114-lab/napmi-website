
import React from 'react';
import Reveal from './Reveal';

const locations = [
  { name: 'California', x: '12.5%', y: '33.5%', region: 'North America' },
  { name: 'Eastern Europe', x: '53.5%', y: '25.5%', region: 'Europe' },
  { name: 'Maldives', x: '68.8%', y: '63.2%', region: 'South Asia' },
  { name: 'Singapore', x: '79.2%', y: '69.5%', region: 'Southeast Asia' },
  { name: 'Philippines', x: '84.5%', y: '60.8%', region: 'Southeast Asia' },
];

const standards = [
  { title: 'Pedagogical Excellence', content: 'Comprehensive curricula spanning over 700 hours of clinical and practical education.' },
  { title: 'Global Ethics', content: 'A rigorous code of conduct ensuring the highest level of professional and educational integrity.' },
  { title: 'Continuous Quality', content: 'Ongoing institutional evaluation and alignment with emerging physiological science.' },
];

const FacultyAndStandards: React.FC = () => {
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
                  {locations.map((loc) => (
                    <span key={loc.name} className="px-4 py-2 bg-white border border-stone-200 text-[9px] font-bold uppercase tracking-widest text-stone-500 rounded-sm hover:border-stone-900 hover:text-stone-900 transition-all duration-300 cursor-default">
                      {loc.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[16/9] bg-[#fdfcfb] border border-stone-200 rounded-sm overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
                {/* Enhanced Vector World Map */}
                <svg viewBox="0 0 1000 500" className="w-full h-full text-stone-100 fill-current opacity-60">
                  <image 
                    href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                    x="0" y="0" width="1000" height="500" 
                    style={{ filter: 'grayscale(1) brightness(1.2) contrast(0.8)' }}
                    className="opacity-40"
                  />

                  <g className="opacity-10">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" stroke="currentColor" strokeWidth="0.5" />
                    ))}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <line key={`h-${i}`} x1="0" y1={i * 100} x2="1000" y2={i * 100} stroke="currentColor" strokeWidth="0.5" />
                    ))}
                  </g>
                </svg>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="w-[1px] h-full bg-stone-900/5 absolute animate-[scan_8s_linear_infinite]" style={{ left: '0%' }}></div>
                </div>

                {locations.map((loc) => (
                  <div 
                    key={loc.name} 
                    className="absolute group/marker" 
                    style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-12 h-12 bg-stone-900/5 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                      <div className="absolute w-8 h-8 bg-stone-900/10 rounded-full animate-pulse"></div>
                      <div className="relative w-3 h-3 bg-stone-900 rounded-full shadow-2xl border-[1.5px] border-white z-10 transition-all duration-500 group-hover/marker:scale-[1.8] group-hover/marker:bg-stone-600"></div>
                      
                      <div className="absolute top-full mt-3 opacity-0 group-hover/marker:opacity-100 transition-all duration-500 translate-y-2 group-hover/marker:translate-y-0 pointer-events-none whitespace-nowrap z-20">
                        <div className="bg-stone-900 text-white px-4 py-2 rounded-sm shadow-2xl">
                          <p className="text-[7px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-1">{loc.region}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest">{loc.name}</p>
                        </div>
                        <div className="w-2 h-2 bg-stone-900 rotate-45 mx-auto -mt-1 shadow-2xl"></div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="absolute bottom-6 right-6 flex flex-col items-end space-y-2">
                   <div className="bg-white/95 backdrop-blur-sm border border-stone-200 px-4 py-3 rounded-sm shadow-lg flex items-center space-x-4">
                      <div className="flex -space-x-1">
                        <div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
                      </div>
                      <p className="text-[8px] uppercase tracking-[0.4em] text-stone-400 font-bold">Faculty Verification Protocol v4.2</p>
                   </div>
                </div>
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
                 {/* NPCP Logo - Enlarged */}
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
                 {/* PMA Logo - Enlarged */}
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
                  <div>
                    <h4 className="text-stone-900 font-bold mb-4 uppercase tracking-widest text-xs">Student Outcomes</h4>
                    <p className="text-stone-500 text-sm md:text-base font-light leading-relaxed">
                      Graduates emerge as Instructors for symptomatic and healthy populations alike.
                    </p>
                  </div>
                  <div className="pt-10 border-t border-stone-50">
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white shrink-0">
                        <span className="font-serif italic text-lg">N</span>
                      </div>
                      <p className="text-stone-600 italic font-serif text-lg leading-relaxed">
                        "Bridging the divide between tradition and science."
                      </p>
                    </div>
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
          from { left: -10%; }
          to { left: 110%; }
        }
      `}} />
    </section>
  );
};

export default FacultyAndStandards;
