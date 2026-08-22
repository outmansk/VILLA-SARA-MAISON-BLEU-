import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Users, Moon, CheckCircle2, Sparkles, Coffee, ShieldCheck, ArrowRight } from 'lucide-react';
import { BookingReservation } from '../types';
import { Language, translations } from '../translations';

interface BookingSectionProps {
  selectedSuiteId?: string;
  onBookingSuccess?: (booking: BookingReservation) => void;
  lang: Language;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedSuiteId,
  onBookingSuccess,
  lang
}) => {
  const t = translations[lang].booking;

  // Default check-in: tomorrow, check-out: 3 days after tomorrow
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  
  const defaultCheckOut = new Date(defaultCheckIn);
  defaultCheckOut.setDate(defaultCheckIn.getDate() + 3);

  const formatDateInput = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDateInput(defaultCheckIn));
  const [checkOut, setCheckOut] = useState<string>(formatDateInput(defaultCheckOut));
  const [guests, setGuests] = useState<number>(4);

  // Guest details form state
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingReservation | null>(null);

  // Calculate total nights
  const totalNights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [checkIn, checkOut]);

  // Full villa rental rate: 1,850€ per night
  const villaNightlyRate = 1850;
  const nightlySubtotal = villaNightlyRate * totalNights;
  const cleaningFee = 250;
  const totalPrice = nightlySubtotal + cleaningFee;

  // Min dates
  const minCheckIn = formatDateInput(today);
  const minCheckOut = useMemo(() => {
    if (!checkIn) return minCheckIn;
    const cin = new Date(checkIn);
    cin.setDate(cin.getDate() + 1);
    return formatDateInput(cin);
  }, [checkIn, minCheckIn]);

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCheckIn(val);
    const cin = new Date(val);
    const cout = new Date(checkOut);
    if (cout <= cin) {
      const newCout = new Date(cin);
      newCout.setDate(cin.getDate() + 2);
      setCheckOut(formatDateInput(newCout));
    }
  };

  const targetPhoneNumber = '+447938766267';
  const targetPhoneFormatted = '+44 7938 766267';

  const getWhatsAppBookingUrl = (booking: {
    fullName: string;
    email: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalNights: number;
    totalPrice: number;
    specialRequests: string;
  }) => {
    const text = `Bonjour Sara, je souhaite réserver la Villa Little Bohème :
• Nom : ${booking.fullName}
• Email : ${booking.email}
• Téléphone : ${booking.phone || 'Non renseigné'}
• Dates : Du ${booking.checkIn} au ${booking.checkOut} (${booking.totalNights} nuit${booking.totalNights > 1 ? 's' : ''})
• Hôtes : ${booking.guests} personne${booking.guests > 1 ? 's' : ''}
• Formule : Privatisation Intégrale Villa Little Bohème
• Montant estimé : ${booking.totalPrice} €
• Demandes particulières : ${booking.specialRequests || 'Aucune'}`;

    return `https://wa.me/447938766267?text=${encodeURIComponent(text)}`;
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const reservation: BookingReservation = {
        checkIn,
        checkOut,
        guests,
        suiteId: 'privatisation-complete-villa',
        fullName,
        email,
        phone,
        specialRequests,
        totalNights,
        totalPrice
      };
      setIsSubmitting(false);
      setConfirmedBooking(reservation);
      if (onBookingSuccess) {
        onBookingSuccess(reservation);
      }

      // Automatically open WhatsApp with details
      const waUrl = getWhatsAppBookingUrl({
        fullName,
        email,
        phone,
        checkIn,
        checkOut,
        guests,
        totalNights,
        totalPrice,
        specialRequests
      });
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section id="reservation" className="py-14 sm:py-28 bg-[#F5F2EC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B2332]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9CFC1]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Minimalist Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#C5A059] tracking-wide leading-tight">
            {t.title}
          </h2>
        </div>

        {confirmedBooking ? (
          /* Confirmation State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-[#FAF6F0] border border-[#E6E1D6] rounded-3xl p-8 sm:p-12 text-center shadow-xl relative"
          >
            <div className="w-16 h-16 bg-[#8B2332]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#8B2332]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-sans tracking-widest text-[#8B2332] uppercase font-semibold block mb-2">
              {t.confirmationTitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] mb-4">
              {t.thankYou(confirmedBooking.fullName)}
            </h3>
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-8">
              {t.confirmedMessage}
            </p>

            {/* Summary Ticket */}
            <div className="bg-[#F0ECE4] border border-[#E6E1D6] rounded-2xl p-6 text-left mb-8 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-[#E6E1D6] pb-2">
                <span className="text-[#8B2332]">{t.refCode} :</span>
                <span className="font-mono font-medium text-[#1A1A1A]">MLB-VILLA-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between border-b border-[#E6E1D6] pb-2">
                <span className="text-[#8B2332]">{t.villaOptionTitle}</span>
                <span className="font-medium text-[#1A1A1A]">Privatisation Intégrale</span>
              </div>
              <div className="flex justify-between border-b border-[#E6E1D6] pb-2">
                <span className="text-[#8B2332]">{t.guests} :</span>
                <span className="font-medium text-[#1A1A1A]">{t.guestCount(confirmedBooking.guests)}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-semibold text-[#1A1A1A]">
                <span>{t.totalPrice} :</span>
                <span className="text-[#8B2332] font-serif text-base">{confirmedBooking.totalPrice} €</span>
              </div>
            </div>

            <p className="text-xs text-[#8B2332] mb-6">
              Votre demande a été transmise directement au numéro +44 7938 766267 (WhatsApp Conciergerie).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href={getWhatsAppBookingUrl({
                  fullName: confirmedBooking.fullName,
                  email: confirmedBooking.email,
                  phone: confirmedBooking.phone,
                  checkIn: confirmedBooking.checkIn,
                  checkOut: confirmedBooking.checkOut,
                  guests: confirmedBooking.guests,
                  totalNights: confirmedBooking.totalNights,
                  totalPrice: confirmedBooking.totalPrice,
                  specialRequests: confirmedBooking.specialRequests
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#20bd5a] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
              >
                <span>Envoyer sur WhatsApp (+44 7938 766267)</span>
              </a>

              <button
                onClick={() => setConfirmedBooking(null)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#8B2332] text-[#FAF6F0] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#5C121F] transition-colors cursor-pointer"
              >
                {t.bookAnother}
              </button>
            </div>
          </motion.div>
        ) : (
          /* Main Interactive Booking Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Column: Date Selector & Form */}
            <div className="lg:col-span-7 bg-[#FAF6F0] border border-[#E6E1D6] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm space-y-6 sm:space-y-8">
              {/* Step 1: Dates & Guests Selector Bar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-sans tracking-widest text-[#8B2332] uppercase font-semibold flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" /> {t.step1}
                  </span>
                  <span className="text-xs text-[#8B2332] font-serif italic">
                    {t.nightsCount(totalNights)}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Check-In */}
                  <div className="bg-[#F0ECE4] border border-[#E6E1D6] rounded-2xl p-3 focus-within:border-[#8B2332] transition-colors">
                    <label className="text-[10px] font-sans tracking-wider uppercase text-[#8B2332] block font-medium mb-1">
                      {t.checkIn}
                    </label>
                    <input
                      type="date"
                      min={minCheckIn}
                      value={checkIn}
                      onChange={handleCheckInChange}
                      className="w-full bg-transparent text-xs font-sans font-medium text-[#1A1A1A] focus:outline-hidden cursor-pointer"
                    />
                  </div>

                  {/* Check-Out */}
                  <div className="bg-[#F0ECE4] border border-[#E6E1D6] rounded-2xl p-3 focus-within:border-[#8B2332] transition-colors">
                    <label className="text-[10px] font-sans tracking-wider uppercase text-[#8B2332] block font-medium mb-1">
                      {t.checkOut}
                    </label>
                    <input
                      type="date"
                      min={minCheckOut}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent text-xs font-sans font-medium text-[#1A1A1A] focus:outline-hidden cursor-pointer"
                    />
                  </div>

                  {/* Guests */}
                  <div className="bg-[#F0ECE4] border border-[#E6E1D6] rounded-2xl p-3 focus-within:border-[#8B2332] transition-colors">
                    <label className="text-[10px] font-sans tracking-wider uppercase text-[#8B2332] block font-medium mb-1">
                      {t.guests}
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-transparent text-xs font-sans font-medium text-[#1A1A1A] focus:outline-hidden cursor-pointer"
                    >
                      {[1, 2, 4, 6, 8, 10, 12].map((num) => (
                        <option key={num} value={num}>
                          {t.guestCount(num)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Full Villa Rental Highlight */}
              <div>
                <span className="text-xs font-sans tracking-widest text-[#8B2332] uppercase font-semibold block mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> {t.step2}
                </span>

                <div className="p-5 rounded-2xl border border-[#8B2332] bg-[#8B2332]/10 shadow-xs flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-medium text-[#1A1A1A]">
                      {t.villaOptionTitle}
                    </h4>
                    <p className="text-xs text-[#8B2332] font-light mt-0.5">
                      {t.villaOptionSub}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-lg text-[#1A1A1A] font-semibold">
                      1 850 €
                    </span>
                    <span className="text-xs text-[#8B2332] block">/ nuit</span>
                  </div>
                </div>
              </div>

              {/* Step 3: Guest Contact Form */}
              <div>
                <span className="text-xs font-sans tracking-widest text-[#8B2332] uppercase font-semibold block mb-4">
                  {t.step3}
                </span>

                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-sans tracking-wider uppercase text-[#8B2332] block mb-1">
                        {t.fullName} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marie Dupont"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#F0ECE4] border border-[#E6E1D6] rounded-xl text-xs text-[#1A1A1A] focus:outline-hidden focus:border-[#8B2332]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-sans tracking-wider uppercase text-[#8B2332] block mb-1">
                        {t.email} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. marie@exemple.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#F0ECE4] border border-[#E6E1D6] rounded-xl text-xs text-[#1A1A1A] focus:outline-hidden focus:border-[#8B2332]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-sans tracking-wider uppercase text-[#8B2332] block mb-1">
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +33 6 12 34 56 78"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#F0ECE4] border border-[#E6E1D6] rounded-xl text-xs text-[#1A1A1A] focus:outline-hidden focus:border-[#8B2332]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-sans tracking-wider uppercase text-[#8B2332] block mb-1">
                        {t.specialRequests}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chef privé, transfert, petit-déjeuner végan"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#F0ECE4] border border-[#E6E1D6] rounded-xl text-xs text-[#1A1A1A] focus:outline-hidden focus:border-[#8B2332]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-4 bg-[#8B2332] text-[#FAF6F0] rounded-xl text-xs font-medium uppercase tracking-[0.25em] transition-all hover:bg-[#5C121F] hover:shadow-lg disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{t.submitting}</span>
                    ) : (
                      <>
                        <span>{t.submitBtn}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Price Breakdown */}
            <div className="lg:col-span-5 bg-[#FAF6F0] border border-[#E6E1D6] rounded-3xl p-6 sm:p-8 shadow-md sticky top-28 space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img
                  src="/photos/59.jpg"
                  alt="MY LITTLE BOHÈME Villa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#D9CFC1] font-semibold block">
                    {t.privatizationBadge || 'Privatisation Exclusive'}
                  </span>
                  <h3 className="font-serif text-lg font-medium">
                    {t.villaOptionTitle}
                  </h3>
                </div>
              </div>

              {/* Selected Dates Summary */}
              <div className="bg-[#F0ECE4] rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-[#E6E1D6] pb-2.5">
                  <span className="text-[#8B2332] font-medium flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5" /> {t.step1}
                  </span>
                  <span className="font-semibold text-[#1A1A1A]">
                    {new Date(checkIn).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} → {new Date(checkOut).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8B2332] font-medium flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5" /> {t.summaryTitle}
                  </span>
                  <span className="font-semibold text-[#1A1A1A]">
                    {t.nightsCount(totalNights)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[#8B2332] font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> {t.guests}
                  </span>
                  <span className="font-semibold text-[#1A1A1A]">
                    {t.guestCount(guests)}
                  </span>
                </div>
              </div>

              {/* Price Calculation Breakdown */}
              <div className="border-t border-[#E6E1D6] pt-4 space-y-2.5 text-xs">
                <div className="flex justify-between text-[#1A1A1A]/80">
                  <span>1 850 € × {t.nightsCount(totalNights)}</span>
                  <span className="font-medium text-[#1A1A1A]">{nightlySubtotal} €</span>
                </div>

                <div className="flex justify-between text-[#1A1A1A]/80">
                  <span>{t.breakfastTax}</span>
                  <span className="text-[#8B2332] font-medium">Inclus</span>
                </div>

                <div className="flex justify-between text-[#1A1A1A]/80">
                  <span>{t.cleaningFee}</span>
                  <span className="font-medium text-[#1A1A1A]">{cleaningFee} €</span>
                </div>

                <div className="border-t border-[#E6E1D6] pt-3 flex justify-between items-baseline">
                  <span className="font-serif text-base text-[#1A1A1A] font-semibold">{t.totalPrice}</span>
                  <span className="font-serif text-2xl text-[#8B2332] font-bold">{totalPrice} €</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

