import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, HeartHandshake, Loader2, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, isKannada } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [needsActivation, setNeedsActivation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'farmer',
    message: '',
  });

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'farmer': return 'Farmer (ರೈತರು)';
      case 'owner': return 'Equipment Owner (ಯಂತ್ರೋಪಕರಣ ಮಾಲೀಕರು)';
      case 'supplier': return 'Agricultural Supplier (ಪೂರೈಕೆದಾರರು)';
      case 'partner': return 'Partner / NGO (ಪಾಲುದಾರರು)';
      case 'other': return 'Other / General Enquiry (ಇತರೆ)';
      default: return role;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    setNeedsActivation(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/ksomkar7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Name': formData.name.trim(),
          'Phone': formData.phone.trim(),
          'Email': formData.email.trim() || 'Not provided',
          'Stakeholder Role': getRoleLabel(formData.role),
          'Message / Inquiry': formData.message.trim() || 'No message provided',
          '_subject': `RaithaSetu Inquiry: ${formData.name.trim()} (${formData.phone.trim()})`,
          '_template': 'table',
          '_captcha': 'false',
        }),
      });

      const result = await response.json().catch(() => null);

      if (result && typeof result.message === 'string' && result.message.toLowerCase().includes('activat')) {
        setNeedsActivation(true);
        return;
      }

      if (response.ok && (!result || result.success === 'true' || result.success === true)) {
        setSubmitted(true);
      } else {
        throw new Error(result?.message || 'Submission failed');
      }
    } catch (err: any) {
      console.error('ContactSection form error:', err);
      if (err?.message && err.message.toLowerCase().includes('activat')) {
        setNeedsActivation(true);
      } else {
        setErrorMessage(
          isKannada
            ? 'ಸಂದೇಶ ಕಳುಹಿಸುವಾಗ ದೋಷ ಕಂಡುಬಂದಿದೆ. ದಯವಿಟ್ಟು ನೇರವಾಗಿ ksomkar7@gmail.com ಗೆ ಇಮೇಲ್ ಮಾಡಿ.'
            : 'Could not send automatically right now. Please try again or email us directly at ksomkar7@gmail.com'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
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
                  <a
                    href="mailto:ksomkar7@gmail.com"
                    className="text-[#63736B] hover:text-[#087A3D] transition-colors mt-0.5 block"
                  >
                    ksomkar7@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF6] border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <p>
                {isKannada
                  ? 'RaithaSetu ಸ್ವತಂತ್ರ ಅಗ್ರಿಟೆಕ್ ನವೋದ್ಯಮ ಉಪಕ್ರಮವಾಗಿದ್ದು, ರೈತರೊಂದಿಗೆ ಪಾರದರ್ಶಕ ಸಂವಹನಕ್ಕೆ ಬದ್ಧವಾಗಿದೆ.'
                  : 'RaithaSetu is an independent AgriTech initiative. We welcome inquiries from farmers, implement owners, and rural partners.'}
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
                          : 'Share your questions, ideas or feedback for the RaithaSetu team...'
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
                    />
                  </div>

                  {needsActivation && (
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs space-y-2">
                      <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                        <Mail className="w-4 h-4 text-amber-700 flex-shrink-0" />
                        <span>{isKannada ? 'ಇಮೇಲ್ ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ ಅಗತ್ಯವಿದೆ (One-Time Activation)' : 'One-Time Form Activation Required'}</span>
                      </div>
                      <p className="leading-relaxed">
                        {isKannada
                          ? 'FormSubmit ನಿಂದ ksomkar7@gmail.com ಗೆ ಸಕ್ರಿಯಗೊಳಿಸುವ ಇಮೇಲ್ ಕಳುಹಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ Gmail (Inbox ಅಥವಾ Spam) ತೆರೆದು "Activate Form" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ನಂತರ ಸಂದೇಶಗಳು ನೇರವಾಗಿ ನಿಮ್ಮ ಇಮೇಲ್‌ಗೆ ಬರುತ್ತವೆ!'
                          : 'An activation email from FormSubmit has just been sent to ksomkar7@gmail.com. Please check your Gmail (Inbox and Spam/Promotions) and click the "Activate Form" button once. After activating, all future messages will arrive directly!'}
                      </p>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <a
                        href={`mailto:ksomkar7@gmail.com?subject=${encodeURIComponent(`RaithaSetu Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`)}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white font-semibold text-xs hover:bg-red-700 transition-colors whitespace-nowrap self-start sm:self-auto"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email Directly</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#087A3D] text-white font-bold text-sm shadow-md hover:bg-[#064D2C] hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.contact.submitting}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.contact.submitBtn}</span>
                        </>
                      )}
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
