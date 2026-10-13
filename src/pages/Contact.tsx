import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock, Loader2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      const response = await fetch('https://formsubmit.co/ajax/raithasetu@gmail.com', {
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
      console.error('Contact form submission error:', err);
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
    <div className="bg-[#F6FBF6] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087A3D] bg-white px-3.5 py-1 rounded-full border border-[#DCE8DF]">
            {t.contact.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17352A] tracking-tight">
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg text-[#63736B] font-medium font-kannada">
            {t.contact.lead}
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-[#DCE8DF] shadow-subtle space-y-5">
              <h2 className="text-xl font-bold text-[#17352A]">
                {t.contact.officeHeading}
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF]">
                  <Phone className="w-5 h-5 text-[#087A3D] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#064D2C] block">
                      {isKannada ? 'ರೈತ ಸಹಾಯವಾಣಿ (Helpline)' : 'Farmer Support Helpline'}
                    </span>
                    <a href="tel:+918028002474" className="text-sm font-extrabold text-[#17352A] hover:text-[#087A3D]">
                      {t.contact.phone}
                    </a>
                    <span className="text-[11px] text-[#63736B] block mt-0.5">
                      {t.contact.helplineNote}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF]">
                  <Mail className="w-5 h-5 text-[#087A3D] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#064D2C] block">
                      {isKannada ? 'ಅಧಿಕೃತ ಇಮೇಲ್' : 'Official Email'}
                    </span>
                    <a
                      href="mailto:raithasetu@gmail.com"
                      className="text-sm font-semibold text-[#17352A] hover:text-[#087A3D] transition-colors"
                    >
                      raithasetu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF]">
                  <MapPin className="w-5 h-5 text-[#087A3D] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#064D2C] block">
                      {isKannada ? 'ಕಚೇರಿ ವಿಳಾಸ' : 'Office Location'}
                    </span>
                    <p className="text-xs text-[#17352A] leading-relaxed mt-0.5">
                      {t.contact.officeAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF]">
                  <Clock className="w-5 h-5 text-[#087A3D] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#064D2C] block">
                      {isKannada ? 'ಕಾರ್ಯನಿರ್ವಹಣಾ ಸಮಯ' : 'Operating Hours'}
                    </span>
                    <p className="text-xs text-[#17352A] mt-0.5">
                      {isKannada
                        ? 'ಸೋಮವಾರದಿಂದ ಶನಿವಾರ, ಬೆಳಿಗ್ಗೆ ೯:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦ ರವರೆಗೆ'
                        : 'Monday to Saturday, 9:00 AM – 6:00 PM IST'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <p>
                  {isKannada
                    ? 'RaithaSetu ಸ್ವತಂತ್ರ ಅಗ್ರಿಟೆಕ್ ನವೋದ್ಯಮ ಉಪಕ್ರಮವಾಗಿದ್ದು, ರೈತರಿಗೆ ಪಾರದರ್ಶಕ ಮಾಹಿತಿ ನೀಡಲು ಬದ್ಧವಾಗಿದೆ.'
                    : 'RaithaSetu is an independent AgriTech initiative. We welcome inquiries from farmers, implement owners, and rural partners.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DCE8DF] shadow-subtle">
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
                  <h2 className="text-xl font-bold text-[#17352A] mb-1">
                    {isKannada ? 'ವಿಚಾರಣಾ ಫಾರ್ಮ್' : 'Send us an Inquiry'}
                  </h2>
                  <p className="text-xs text-[#63736B] mb-4">
                    {isKannada
                      ? 'ನಿಮ್ಮ ಆಲೋಚನೆ ಅಥವಾ ವಿಚಾರಣೆಯನ್ನು ಕೆಳಗೆ ತಿಳಿಸಿ'
                      : 'Fill in your details below for a prompt response from our team'}
                  </p>

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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-[#F6FBF6] text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-[#F6FBF6] text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-[#F6FBF6] text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#17352A] mb-1.5">
                        {t.contact.roleLabel}
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-[#F6FBF6] text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE8DF] bg-[#F6FBF6] text-sm focus:outline-none focus:ring-2 focus:ring-[#087A3D]/30 focus:border-[#087A3D]"
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
                          ? 'FormSubmit ನಿಂದ raithasetu@gmail.com ಗೆ ಸಕ್ರಿಯಗೊಳಿಸುವ ಇಮೇಲ್ ಕಳುಹಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ Gmail (Inbox ಅಥವಾ Spam) ತೆರೆದು "Activate Form" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ನಂತರ ಸಂದೇಶಗಳು ನೇರವಾಗಿ ನಿಮ್ಮ ಇಮೇಲ್‌ಗೆ ಬರುತ್ತವೆ!'
                          : 'An activation email from FormSubmit has just been sent to raithasetu@gmail.com. Please check your Gmail (Inbox and Spam/Promotions) and click the "Activate Form" button once. After activating, all future messages will arrive directly!'}
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
                        href={`mailto:raithasetu@gmail.com?subject=${encodeURIComponent(`RaithaSetu Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`)}`}
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
    </div>
  );
};
