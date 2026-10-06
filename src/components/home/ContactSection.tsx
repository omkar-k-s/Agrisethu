import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, isKannada } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'farmer',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Information & Office Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-[#EAF7EC] px-3.5 py-1 rounded-full">
                {t.contact.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17352A] mt-3">
                {t.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-[#63736B] mt-2 font-medium">
                {t.contact.lead}
              </p>
            </div>

            {/* Helpline Box */}
            <div className="p-4 rounded-2xl bg-[#EAF7EC] border border-[#087A3D]/20 text-[#064D2C] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#087A3D]" />
              </div>
              <div className="text-xs font-semibold">
                <span className="block text-[#087A3D] font-bold text-sm">
                  {t.contact.phone}
                </span>
                <span className="text-[#63736B]">{t.contact.helplineNote}</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF]">
                <MapPin className="w-4 h-4 text-[#087A3D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#17352A] block">
                    {t.contact.officeHeading}
                  </span>
                  <p className="text-[#63736B] mt-0.5">
                    {t.contact.officeAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF]">
                <Mail className="w-4 h-4 text-[#087A3D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#17352A] block">
                    {isKannada ? 'ಅಧಿಕೃತ ಇಮೇಲ್' : 'Official Email'}
                  </span>
                  <p className="text-[#63736B] mt-0.5">
                    {t.contact.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF6] border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <p>
                {isKannada
                  ? 'AgriSethu ಸ್ವತಂತ್ರ ಅಗ್ರಿಟೆಕ್ ನವೋದ್ಯಮ ಉಪಕ್ರಮವಾಗಿದ್ದು, ರೈತರೊಂದಿಗೆ ಪಾರದರ್ಶಕ ಸಂವಹನಕ್ಕೆ ಬದ್ಧವಾಗಿದೆ.'
                  : 'AgriSethu is an independent AgriTech initiative. We welcome inquiries from farmers, implement owners, and rural partners.'}
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F6FBF6] border border-[#DCE8DF] shadow-subtle">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EAF7EC] text-[#087A3D] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#17352A]">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-[#63736B] max-w-md mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        role: 'farmer',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#087A3D] text-white text-xs font-bold hover:bg-[#064D2C] transition-colors"
                  >
                    {isKannada ? 'ಮತ್ತೊಂದು ಸಂದೇಶ ಕಳುಹಿಸಿ' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#17352A] mb-1.5">
                        {t.contact.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isKannada ? 'ನಿಮ್ಮ ಹೆಸರು' : 'Your full name'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17352A] mb-1.5">
                        {t.contact.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#17352A] mb-1.5">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17352A] mb-1.5">
                        {t.contact.roleLabel}
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
                      >
                        <option value="farmer">{t.contact.roleFarmer}</option>
                        <option value="owner">{t.contact.roleOwner}</option>
                        <option value="supplier">{t.contact.roleSupplier}</option>
                        <option value="partner">{t.contact.rolePartner}</option>
                        <option value="other">{t.contact.roleOther}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17352A] mb-1.5">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isKannada
                          ? 'ನಿಮ್ಮ ವಿಚಾರಣೆ, ಪ್ರಶ್ನೆ ಅಥವಾ ಸಹಭಾಗಿತ್ವದ ಅಭಿಪ್ರಾಯವನ್ನು ಇಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ...'
                          : 'Share your questions, ideas or feedback for the AgriSethu team...'
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#087A3D] text-white font-bold text-sm shadow-md hover:bg-[#064D2C] hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.contact.submitBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
