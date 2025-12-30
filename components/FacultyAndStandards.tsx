
import React from 'react';
import Reveal from './Reveal';

const locations = [
  { name: 'California', x: '16.2%', y: '36.5%' },
  { name: 'Eastern Europe', x: '54.5%', y: '28.5%' },
  { name: 'Maldives', x: '70.0%', y: '61.2%' },
  { name: 'Singapore', x: '79.5%', y: '65.8%' },
  { name: 'Philippines', x: '83.5%', y: '57.2%' },
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
                  {['California', 'Eastern Europe', 'Maldives', 'Singapore', 'Philippines'].map((name) => (
                    <span key={name} className="px-4 py-2 bg-white border border-stone-200 text-[9px] font-bold uppercase tracking-widest text-stone-500 rounded-sm hover:border-stone-900 hover:text-stone-900 transition-all duration-300 cursor-default">
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[16/10] bg-white border border-stone-200 rounded-sm overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
                {/* World Map Backdrop - Clean and High Contrast */}
                <div className="absolute inset-0 bg-[#fbfbfb]">
                   <svg viewBox="0 0 1000 500" className="w-full h-full text-[#cfcfcf] fill-current">
                    <image 
                      href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                      x="0" y="0" width="1000" height="500" 
                      style={{ filter: 'grayscale(1) brightness(1.2) contrast(1.1)' }}
                      className="opacity-60"
                    />
                    
                    {/* Minimalist Coordinate Grid */}
                    <g className="opacity-[0.03] text-stone-900">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500" stroke="currentColor" strokeWidth="1" />
                      ))}
                    </g>
                  </svg>
                </div>

                {/* Accuracy Pins - Exact Visual Match */}
                {locations.map((loc, idx) => (
                  <div 
                    key={idx} 
                    className="absolute z-10" 
                    style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Large Semi-Transparent Halo */}
                      <div className="absolute w-12 h-12 bg-stone-200/40 rounded-full"></div>
                      
                      {/* Solid Black Pin Core */}
                      <div className="relative w-2.5 h-2.5 bg-stone-950 rounded-full z-10 shadow-sm"></div>
                    </div>
                  </div>
                ))}
                
                {/* Visual Borders */}
                <div className="absolute inset-0 border border-stone-100 pointer-events-none"></div>
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
    </section>
  );
};

export default FacultyAndStandards;
