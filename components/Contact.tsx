
import React, { useState } from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  /**
   * CRITICAL INTEGRATION STEPS:
   * 
   * 1. In your Google Apps Script editor:
   *    - Click "Deploy" > "New Deployment".
   *    - Select "Web App".
   *    - Set "Execute as": "Me".
   *    - Set "Who has access": "Anyone".
   * 2. COPY THE "Web App URL" (it MUST end in /exec).
   * 3. PASTE that URL below.
   */
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQxcWBTc4SFgoQoDDeEND4wvNCEihjOnSSDHxv9RarLBH-I1MifdfnJcii3IaI0KuoiQ/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Fallback/Validation check
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE_APPS_SCRIPT") || GOOGLE_SCRIPT_URL.endsWith("/dev")) {
      if (GOOGLE_SCRIPT_URL.endsWith("/dev")) {
        console.error("NAPMI ERROR: You are using a /dev URL. You must deploy as a Web App and use the /exec URL.");
        setStatus('error');
        alert("Configuration Error: Please use the /exec deployment URL, not the /dev URL.");
        return;
      }
      
      // Simulation for previewing UI
      console.warn("NAPMI: No valid /exec URL provided. Simulating successful submission...");
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
      return;
    }

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toLocaleString(),
        source: 'NAPMI Website Formal Inquiry'
      };

      /**
       * We use 'text/plain' and 'no-cors' to bypass the CORS preflight check 
       * that Google Apps Script doesn't support. Your script's JSON.parse 
       * will still work because the body IS a valid JSON string.
       */
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      // In no-cors mode, we don't get a readable response, so we trigger success
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-stone-950 text-stone-200 relative overflow-hidden">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=2400" 
          alt="Pilates Studio Architecture" 
          className="w-full h-full object-cover opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40"></div>
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-800/10 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        <div className="mb-32 text-center">
          <Reveal>
            <h3 className="text-3xl md:text-6xl font-serif text-white mb-8 tracking-tight">Expand Your Professional Horizon.</h3>
            <p className="text-stone-400 text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the next generation of movement specialists. <br className="hidden md:block" />
              Learn more about our <span className="text-white border-b border-white/20 pb-1">NPCP, PMA, and STOTT accredited pathways.</span>
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.6em] text-stone-500 mb-10">Admissions Office</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-10 leading-[1.1] tracking-tight">The Path <br /> to Mastery <br /><span className="italic text-stone-400">Begins Here.</span></h3>
              <p className="text-stone-400 font-light leading-relaxed text-lg mb-12 opacity-80 max-w-md">
                Our enrollment advisors provide tailored guidance for international certification candidates and clinical movement practitioners.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-12 backdrop-blur-sm">
                 <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-300 leading-relaxed flex items-start gap-3">
                   <svg className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                   <span>
                     <span className="text-white block mb-1">Response Protocol:</span>
                     Applications are reviewed within 72 business hours. For immediate technical assistance, please utilize our encrypted WhatsApp portal.
                   </span>
                 </p>
              </div>
              
              <div className="space-y-10">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-bold mb-3">Primary Institutional Office</p>
                  <p className="text-stone-300 font-light text-base group-hover:text-white transition-colors duration-500 leading-loose">
                    North American Pilates & Movement Institute <br />
                    Western Blvd, Hayward, CA 94541 <br />
                    United States of America
                  </p>
                </div>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-stone-600 font-bold mb-3">Electronic Correspondence</p>
                  <a 
                    href="mailto:contact.napmi@gmail.com" 
                    className="text-stone-300 font-light text-base group-hover:text-white transition-colors duration-500 block border-b border-white/10 w-fit pb-1"
                  >
                    contact.napmi@gmail.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div className="relative min-h-[650px] flex flex-col">
                {/* Form State */}
                <form 
                  onSubmit={handleSubmit} 
                  className={`space-y-10 p-8 md:p-14 bg-white/[0.04] border border-white/10 rounded-sm backdrop-blur-2xl transition-all duration-1000 shadow-2xl ${
                    status === 'success' ? 'opacity-0 scale-95 pointer-events-none absolute inset-0' : 'opacity-100 scale-100'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-stone-500 block mb-2 group-focus-within:text-white transition-colors">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-stone-800 py-4 text-white focus:outline-none focus:border-stone-400 transition-all duration-700 placeholder:text-stone-800 font-light text-lg"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="relative group">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-stone-500 block mb-2 group-focus-within:text-white transition-colors">Institutional Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-stone-800 py-4 text-white focus:outline-none focus:border-stone-400 transition-all duration-700 placeholder:text-stone-800 font-light text-lg"
                        placeholder="jane@university.edu"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-stone-500 block mb-2 group-focus-within:text-white transition-colors">Statement of Professional Interest</label>
                    <textarea
                      id="message"
                      required
                      rows={12}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-stone-800 py-4 text-white focus:outline-none focus:border-stone-400 transition-all duration-700 placeholder:text-stone-800 font-light text-lg resize-none min-h-[300px]"
                      placeholder="Please provide a detailed statement regarding your clinical background, current certifications, and your specific objectives for seeking NAPMI international accreditation..."
                    ></textarea>
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`group relative w-full overflow-hidden font-bold uppercase tracking-[0.4em] py-6 text-[11px] rounded-sm transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] disabled:opacity-70 ${
                        status === 'error' ? 'bg-red-900/40 text-white border border-red-500/50' : 'bg-white text-stone-900'
                      }`}
                    >
                      <span className={`relative z-10 transition-opacity duration-500 ${status === 'loading' ? 'opacity-0' : 'opacity-100'}`}>
                        {status === 'error' ? 'Connection Error' : 'Submit Formal Inquiry'}
                      </span>
                      
                      {status === 'loading' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-6 border-[2px] border-stone-900 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-stone-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                    </button>
                    <p className="text-center text-[8px] uppercase tracking-[0.4em] text-stone-600 mt-6 font-bold">
                      Institutional Data Protection Protocol Enforced
                    </p>
                  </div>
                </form>

                {/* Success State Overlay */}
                <div 
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center p-10 md:p-20 bg-stone-900/80 border border-white/10 rounded-sm backdrop-blur-3xl transition-all duration-1000 transform ${
                    status === 'success' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
                  }`}
                >
                  <div className="mb-12 relative">
                    <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden">
                      <svg className={`w-16 h-16 text-white transition-all duration-1000 ${status === 'success' ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path className="check-path" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" />
                      </svg>
                      {/* Inner glow pulse */}
                      {status === 'success' && <div className="absolute inset-0 bg-white/5 animate-pulse"></div>}
                    </div>
                    {/* Spinning outer ring */}
                    <div className="absolute inset-0 w-32 h-32 rounded-full border-t-2 border-white/30 animate-spin pointer-events-none"></div>
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Transmission <br /> Successful</h4>
                  <p className="text-stone-400 font-light text-lg mb-12 max-w-sm leading-relaxed">
                    Your credentials have been securely transmitted to our academic database. A NAPMI admissions advisor will contact you within 72 hours.
                  </p>
                  
                  <button 
                    onClick={() => setStatus('idle')}
                    className="group flex items-center space-x-4 text-[11px] uppercase tracking-[0.4em] font-bold text-stone-500 hover:text-white transition-all"
                  >
                    <span className="w-8 h-px bg-stone-700 group-hover:bg-white group-hover:w-16 transition-all duration-500"></span>
                    <span>Return to Admissions</span>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .check-path {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: drawCheck 1.2s cubic-bezier(0.65, 0, 0.45, 1) forwards 0.5s;
        }
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
      `}} />
    </section>
  );
};

export default Contact;
