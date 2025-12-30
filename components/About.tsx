
import React from 'react';
import Reveal from './Reveal';

const pillars = [
  {
    title: 'International Education',
    description: 'A global curriculum designed for students seeking recognized qualifications across borders and disciplines.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Instructor Certification',
    description: 'Professional credentials that signify deep technical expertise, pedagogical safety, and excellence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Evidence-Based Curriculum',
    description: 'Bridging the gap between traditional Pilates principles and modern biomechanical and sports research.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'CPD Programs',
    description: 'A robust ecosystem of Continuing Professional Development for graduates and industry leaders.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.247 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const pathwaySteps = [
  { step: '01', title: 'Admissions & Review', desc: 'Initial application, credentials verification, and interview.' },
  { step: '02', title: 'Immersive Education', desc: 'Theoretical foundations and high-level practical studio work.' },
  { step: '03', title: 'Rigorous Assessment', desc: 'Exhaustive written and performance-based examinations.' },
  { step: '04', title: 'Global Certification', desc: 'Conferment of international professional status and licensure.' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white selection:bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Intro / Mission */}
        <div className="mb-24 md:mb-40">
          <Reveal>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-8">Institutional Mission</h2>
            <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-stone-900 leading-[1.3] tracking-tight max-w-5xl">
              NAPMI is an international education and certification institute dedicated to <span className="text-stone-400 italic">advancing</span> Pilates and movement science through a structured curricula, rigorous practice, and North American standards, combining already established <span className="text-stone-900 border-b-2 border-stone-100">Classical Pilates, STOTT, and BASI methodology.</span>
            </p>
          </Reveal>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32 md:mb-48">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 150}>
              <div className="group flex flex-col h-full p-8 md:p-10 border border-stone-100 bg-stone-50/20 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out rounded-sm">
                <div className="mb-8 text-stone-300 group-hover:text-stone-900 transition-colors duration-700 transform group-hover:scale-110 origin-left">
                  {pillar.icon}
                </div>
                <h3 className="text-[10px] font-bold text-stone-900 mb-4 tracking-[0.2em] uppercase">{pillar.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Academic Excellence / Foundation of Professional Mastery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start pt-16 border-t border-stone-50">
          <div className="relative z-10 lg:sticky lg:top-32 pb-12 lg:pb-0">
            <Reveal>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-8">Academic Excellence</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-8 md:mb-12 leading-[1.1] tracking-tight">
                Master the Foundations <br className="hidden md:block" /> of a Century-old exercise method
              </h3>
              <div className="space-y-6 md:space-y-8 text-stone-500 leading-relaxed font-light text-base md:text-lg">
                <p>
                  Our programs are crafted for practitioners who seek more than superficial instruction. We emphasize biomechanics, neuro-centric movement, and pathology-specific adaptations.
                </p>
                <p>
                  Every graduate joins a global network of elite instructors recognized for their clinical precision and artistic execution of the Pilates method.
                </p>
                
                {/* Dual Download Links Section */}
                <div className="pt-8 md:pt-10 space-y-8 md:space-y-10">
                   <div className="group">
                      <div className="inline-flex items-start space-x-6 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-stone-900 leading-relaxed max-w-md no-underline">
                        <span className="h-px w-6 md:w-8 bg-stone-900 transition-all duration-500 group-hover:w-12 mt-2 shrink-0"></span>
                        <span>How to be an Internationally Certified Pilates Instructor</span>
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Level 1 Curriculum */}
                      <a 
                        href="/Level1CertificationCurriculum.pdf" 
                        download="Level1CertificationCurriculum.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col space-y-2 group cursor-pointer bg-stone-900 text-white p-5 md:p-6 rounded-sm hover:shadow-2xl transition-all duration-500 active:scale-95 no-underline"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-[0.3em] opacity-60">Phase 01</span>
                          <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] leading-tight">Level 1 Curriculum</span>
                      </a>

                      {/* Levels of Certification */}
                      <a 
                        href="/LevelsOfCertification.pdf" 
                        download="LevelsOfCertification.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col space-y-2 group cursor-pointer border border-stone-900 text-stone-900 p-5 md:p-6 rounded-sm hover:bg-stone-50 transition-all duration-500 active:scale-95 no-underline"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-[0.3em] opacity-60">Phase 02</span>
                          <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-[0.2em] leading-tight">Levels of Certification</span>
                      </a>
                   </div>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="w-full mt-24 lg:mt-0 relative z-0">
            <Reveal delay={200}>
              <div className="bg-white p-8 sm:p-14 md:p-20 rounded-sm border border-stone-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-16 md:mb-20 text-center">Certification Pipeline</h4>
                <div className="space-y-16 md:space-y-20 relative">
                  <div className="absolute left-[11px] md:left-[14px] top-4 bottom-4 w-px bg-stone-100"></div>
                  {pathwaySteps.map((item, idx) => (
                    <div key={item.step} className="flex gap-8 md:gap-12 group relative">
                      <div className="z-10 bg-white py-1 flex items-start shrink-0">
                         <span className="font-serif italic text-xl md:text-3xl text-stone-300 group-hover:text-stone-900 transition-all duration-700">
                          {item.step}
                         </span>
                      </div>
                      <div className="pt-1">
                        <h5 className="font-bold text-stone-900 mb-2 md:mb-3 uppercase tracking-[0.2em] text-[10px] md:text-[11px]">{item.title}</h5>
                        <p className="text-stone-500 text-sm leading-relaxed font-light max-w-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
