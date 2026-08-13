import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, ChevronUp, X } from 'lucide-react';

import { Language, translations } from '../translations';

interface MobileBookingBarProps {
  onNavigateToBooking: () => void;
  lang: Language;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({ onNavigateToBooking, lang }) => {
  const t = translations[lang].mobileBooking;
  
  const [isExpanded, setIsExpanded] = useState(false);

  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  const defaultCheckOut = new Date(defaultCheckIn);
  defaultCheckOut.setDate(defaultCheckIn.getDate() + 3);

  const formatDateInput = (d: Date) => d.toISOString().split('T')[0];
  
  const [checkIn, setCheckIn] = useState<string>(formatDateInput(defaultCheckIn));
  const [checkOut, setCheckOut] = useState<string>(formatDateInput(defaultCheckOut));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    setIsExpanded(false);
    
    // Calculate total nights
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalNights = diffDays > 0 ? diffDays : 1;
    const totalGuests = adults + children;

    const text = `Bonjour Sarla, je souhaite réserver la Villa Little Bohème :
• Dates : Du ${checkIn} au ${checkOut} (${totalNights} nuit${totalNights > 1 ? 's' : ''})
• Hôtes : ${totalGuests} personne${totalGuests > 1 ? 's' : ''} (${adults} adulte${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} enfant${children > 1 ? 's' : ''}` : ''})
• Formule : Privatisation Intégrale Villa Little Bohème`;
    
    const whatsappUrl = `https://wa.me/447938766267?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute bottom-0 left-0 right-0 bg-white shadow-2xl rounded-t-3xl border-t border-[#E6E1D6]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-[#E6E1D6]">
              <h3 className="font-serif text-xl text-[#1A1A1A]">{t.expandedTitle}</h3>
              <button 
                onClick={() => setIsExpanded(false)}
                className="p-2 text-[#4A4A4A] hover:bg-[#F0ECE4] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <div className="p-5 space-y-4">
              {/* Dates */}
              <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-4">
                <span className="text-xs font-sans tracking-widest text-[#1A1A1A] uppercase font-semibold">
                  {t.dates}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8B2332]" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-transparent text-xs text-[#4A4A4A] focus:outline-none w-24"
                  />
                  <span className="text-[#4A4A4A]">-</span>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="bg-transparent text-xs text-[#4A4A4A] focus:outline-none w-24"
                  />
                </div>
              </div>

              {/* Adults */}
              <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-4">
                <span className="text-xs font-sans tracking-widest text-[#1A1A1A] uppercase font-semibold">
                  {t.adults}
                </span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-6 h-6 flex items-center justify-center text-[#4A4A4A] text-lg"
                  >−</button>
                  <span className="text-sm font-semibold w-4 text-center">{adults}</span>
                  <button 
                    onClick={() => setAdults(Math.min(12, adults + 1))}
                    className="w-6 h-6 flex items-center justify-center text-[#4A4A4A] text-lg"
                  >+</button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between border-b border-[#E6E1D6] pb-4">
                <span className="text-xs font-sans tracking-widest text-[#1A1A1A] uppercase font-semibold">
                  {t.children}
                </span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-6 h-6 flex items-center justify-center text-[#4A4A4A] text-lg"
                  >−</button>
                  <span className="text-sm font-semibold w-4 text-center">{children}</span>
                  <button 
                    onClick={() => setChildren(Math.min(10, children + 1))}
                    className="w-6 h-6 flex items-center justify-center text-[#4A4A4A] text-lg"
                  >+</button>
                </div>
              </div>
            </div>

            {/* CTA Button Inside Expanded */}
            <button
              onClick={handleSearch}
              className="w-full py-4 bg-[#C5A059] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center transition-colors active:bg-[#A38953]"
            >
              {t.search}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Bottom Bar (when collapsed) */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <button
              onClick={() => setIsExpanded(true)}
              className="w-full py-4 bg-[#C5A059] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)] active:bg-[#A38953] transition-colors"
            >
              {t.barTitle}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
