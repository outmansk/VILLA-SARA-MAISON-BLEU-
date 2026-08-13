import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';
import { studioData, instagramPosts } from '../data';
import { ContactFormData } from '../types';
import { Language, translations } from '../translations';

interface ContactProps {
  preselectedService?: string;
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService = '', lang }) => {
  const t = translations[lang].contact;

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    serviceType: preselectedService || 'Réservation Privatisation Villa',
    location: '',
    timeline: 'Saison 2026',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const getWhatsAppContactUrl = (data: ContactFormData) => {
    const text = `Bonjour Sarla, vous avez un nouveau message depuis la Villa Little Bohème :
• Nom : ${data.fullName}
• Email : ${data.email}
• Objet : ${data.serviceType}
• Origine / Ville : ${data.location || 'Non précisé'}
• Période : ${data.timeline || 'Non précisé'}
• Message : ${data.message}`;

    return `https://wa.me/447938766267?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      const waUrl = getWhatsAppContactUrl(formData);
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-14 sm:py-24 md:py-36 bg-[#F2EFE9] border-t border-[#EAE6DD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium text-[#6C7D6B]">
              {t.eyebrow}
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#6C7D6B]/40" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#2A2E2C]">
            {t.title}
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base font-sans font-light text-[#5A605D] max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Instagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 space-y-8 sm:space-y-10"
          >
            {/* Quick Contact Cards */}
            <div className="space-y-5 sm:space-y-6 bg-[#FBF9F5] p-5 sm:p-8 rounded-2xl border border-[#EAE6DD]">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F2EFE9] rounded-full text-[#6C7D6B] shrink-0">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#6C7D6B] font-semibold block">
                    Email Direct
                  </span>
                  <a
                    href={`mailto:${studioData.email}`}
                    className="font-serif text-lg text-[#2A2E2C] hover:text-[#6C7D6B] transition-colors"
                  >
                    {studioData.email}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F2EFE9] rounded-full text-[#6C7D6B] shrink-0">
                  <Instagram className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#6C7D6B] font-semibold block">
                    Instagram Journal
                  </span>
                  <a
                    href="https://www.instagram.com/mylittleboheme_marrakech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg text-[#2A2E2C] hover:text-[#6C7D6B] transition-colors"
                  >
                    {studioData.instagram}
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F2EFE9] rounded-full text-[#6C7D6B] shrink-0">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#6C7D6B] font-semibold block">
                    Localisation &amp; Accès
                  </span>
                  <p className="font-serif text-lg text-[#2A2E2C]">
                    {studioData.location}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#F2EFE9] rounded-full text-[#6C7D6B] shrink-0">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#6C7D6B] font-semibold block">
                    Téléphone &amp; WhatsApp Direct
                  </span>
                  <a
                    href="https://wa.me/447938766267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg text-[#2A2E2C] hover:text-[#6C7D6B] transition-colors block"
                  >
                    +44 7938 766267
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Feed Preview */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#2A2E2C]">
                  Instagram Journal
                </span>
                <span className="text-xs text-[#6C7D6B] font-light">@mylittleboheme_marrakech</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {instagramPosts.map((post) => (
                  <a
                    key={post.id}
                    href="https://www.instagram.com/mylittleboheme_marrakech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square rounded-xl overflow-hidden group border border-[#EAE6DD]"
                  >
                    <img
                      src={post.image}
                      alt={post.caption}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover img-editorial-hover"
                    />
                    <div className="absolute inset-0 bg-[#374436]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Instagram className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 bg-[#FBF9F5] p-5 sm:p-12 rounded-2xl border border-[#EAE6DD] shadow-lg"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 bg-[#6C7D6B] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#2A2E2C]">
                  {t.successMessage}
                </h3>
                <p className="text-xs text-[#6C7D6B] max-w-md mx-auto">
                  Votre message a été transmis directement à notre numéro conciergerie +44 7938 766267.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={getWhatsAppContactUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#20bd5a] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Envoyer sur WhatsApp (+44 7938 766267)</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 border border-[#6C7D6B] text-[#2A2E2C] rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#6C7D6B] hover:text-white transition-colors cursor-pointer"
                  >
                    Nouveau message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-medium text-[#2A2E2C] mb-2">
                      {t.fullNameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Camille Laurent"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#EAE6DD] rounded-xl text-base sm:text-sm text-[#2A2E2C] focus:outline-hidden focus:border-[#6C7D6B] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-medium text-[#2A2E2C] mb-2">
                      {t.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. camille@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#EAE6DD] rounded-xl text-base sm:text-sm text-[#2A2E2C] focus:outline-hidden focus:border-[#6C7D6B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Interest */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-medium text-[#2A2E2C] mb-2">
                      {t.serviceLabel}
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#EAE6DD] rounded-xl text-base sm:text-sm text-[#2A2E2C] focus:outline-hidden focus:border-[#6C7D6B] transition-colors"
                    >
                      <option value="Réservation Privatisation Villa">Privatisation Villa Entière</option>
                      <option value="Séjour Court Terme">Séjour Court Terme</option>
                      <option value="Événement Privé / Shooting">Événement Privé &amp; Shooting</option>
                      <option value="Conciergerie & Chef Privé">Conciergerie &amp; Services de Séjour</option>
                      <option value="Autre demande">Autre Information</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-medium text-[#2A2E2C] mb-2">
                      {t.locationLabel}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Paris, Palma, Genève"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#EAE6DD] rounded-xl text-base sm:text-sm text-[#2A2E2C] focus:outline-hidden focus:border-[#6C7D6B] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-medium text-[#2A2E2C] mb-2">
                    {t.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Précisez la période souhaitée, le nombre d'hôtes ou vos questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F2EFE9] border border-[#EAE6DD] rounded-xl text-base sm:text-sm text-[#2A2E2C] focus:outline-hidden focus:border-[#6C7D6B] transition-colors resize-none"
                  />
                </div>

                {/* Large CTA Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#6C7D6B] hover:bg-[#374436] text-white rounded-full text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <span>Envoi du message...</span>
                  ) : (
                    <>
                      <span>{t.sendBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

