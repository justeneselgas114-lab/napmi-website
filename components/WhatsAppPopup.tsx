
import React, { useState, useEffect } from 'react';

const WhatsAppPopup: React.FC = () => {
  const [shouldShowPulse, setShouldShowPulse] = useState(true);

  /**
   * INSTITUTIONAL CONTACT INTEGRATION
   * Number: +63 962 690 5291
   * Format for API: 639626905291
   */
  const phoneNumber = "639626905291"; 
  const message = "Hello, I am interested in NAPMI certification programs. Could you provide more information regarding the upcoming intake?";
  
  /**
   * FIX: Switching to api.whatsapp.com resolves NET::ERR_CERT_COMMON_NAME_INVALID 
   * which occurs when wa.me is intercepted or blocked by certain network firewalls.
   */
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Pulse effect duration
    const timer = setTimeout(() => setShouldShowPulse(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[110] flex flex-col items-end pointer-events-none">
      {/* Informational Tooltip / Bubble */}
      <div className="mb-4 pointer-events-auto">
        <div className="bg-white px-5 py-3 rounded-full shadow-2xl border border-stone-100 flex items-center space-x-3 animate-in fade-in slide-in-from-right-4 duration-1000">
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 whitespace-nowrap">
            Admissions Office Online
          </span>
        </div>
      </div>

      {/* Main Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] hover:scale-110 active:scale-95 overflow-visible"
        aria-label="Contact Admissions via WhatsApp"
      >
        {/* Pulsing ring effect */}
        {shouldShowPulse && (
          <span className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></span>
        )}
        
        {/* Brand Initial / Icon */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
          <span className="font-serif italic text-2xl text-stone-900">N</span>
        </div>

        {/* WhatsApp Icon (Reveals on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppPopup;
