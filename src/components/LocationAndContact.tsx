import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Navigation, 
  Building2,
  Sparkles
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { Language } from '../types';

interface LocationAndContactProps {
  lang: Language;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({ lang }) => {
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      alert(lang === 'hi' ? 'कृपया अपना नाम एवं फोन नंबर भरें' : 'Please fill name and phone number');
      return;
    }
    setSubmittedMessage(true);
  };

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 font-bold text-xs px-3.5 py-1 rounded-full border border-blue-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-800" />
            <span>{lang === 'hi' ? 'स्थान एवं संपर्क करें' : 'LOCATION & CONTACT US'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'डी. पी. इण्टर कॉलेज गूगल मैप लोकेशन' : 'Visit D.P. Inter College Campus'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {lang === 'hi'
              ? 'गूगल मानचित्र के माध्यम से कॉलेज का सटीक स्थान एवं मार्ग निर्देश प्राप्त करें'
              : 'Find accurate location on Google Maps, get driving directions & connect with college office'}
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map & College Address Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Map Embedded iframe */}
            <div className="bg-white border-2 border-blue-900 rounded-3xl overflow-hidden shadow-md relative">
              <div className="bg-blue-900 text-white p-3.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-bold font-serif">
                  <MapPin className="w-4 h-4 text-blue-200 shrink-0" />
                  <span>D.P. INTER COLLEGE (Lat: 26.5828, Lng: 82.5233)</span>
                </div>

                <a
                  href={COLLEGE_INFO.gmapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-700 hover:bg-red-800 text-white font-extrabold px-3 py-1 rounded-full text-[11px] flex items-center gap-1 shadow-2xs transition-colors shrink-0"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>{lang === 'hi' ? 'गूगल मैप पर खोलें' : 'Open in Google Maps'}</span>
                </a>
              </div>

              {/* Map Iframe */}
              <iframe
                title="D.P. Inter College Google Map Location"
                src={`https://maps.google.com/maps?q=${COLLEGE_INFO.coordinates.lat},${COLLEGE_INFO.coordinates.lng}&z=16&output=embed`}
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80 md:h-96"
              ></iframe>

              <div className="p-4 bg-slate-900 text-slate-200 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-blue-300 shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'बभनान, बस्ती, अयोध्या व टांडा मुख्य मार्ग कनेक्टिविटी'
                      : 'Accessible via Babhnan, Basti, Ayodhya & Tanda main roads'}
                  </span>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${COLLEGE_INFO.coordinates.lat},${COLLEGE_INFO.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 font-bold hover:underline flex items-center gap-1 text-xs shrink-0"
                >
                  <span>{lang === 'hi' ? 'दिशा-निर्देश पाएं (Directions)' : 'Get Directions'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct Address & Hotline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Building2 className="w-4 h-4 text-blue-900" />
                  <span>{lang === 'hi' ? 'महाविद्यालय डाक पता' : 'Campus Postal Address'}</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {lang === 'hi' ? COLLEGE_INFO.addressHi : COLLEGE_INFO.address}
                </p>
                <p className="text-blue-900 font-bold pt-1">School Code: {COLLEGE_INFO.schoolCode}</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Clock className="w-4 h-4 text-blue-900" />
                  <span>{lang === 'hi' ? 'कार्यालय समय व हेल्पलाइन' : 'Office Hours & Hotline'}</span>
                </div>
                <p className="text-slate-600 font-medium">
                  <strong>Working Hours:</strong> {COLLEGE_INFO.officeHours}
                </p>
                <p className="text-slate-600 font-medium">
                  <strong>Phone:</strong> {COLLEGE_INFO.phone}
                </p>
                <p className="text-slate-600 font-medium truncate">
                  <strong>Email:</strong> {COLLEGE_INFO.email}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Contact Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xl font-bold font-serif text-slate-900 border-b pb-3 mb-5">
              {lang === 'hi' ? 'प्रशासन से संपर्क / पूछताछ करें' : 'Send Inquiry Message to College'}
            </h3>

            {submittedMessage ? (
              <div className="bg-blue-50 border border-blue-200 text-blue-950 p-6 rounded-2xl space-y-3 text-center">
                <CheckCircle2 className="w-12 h-12 text-blue-900 mx-auto" />
                <h4 className="text-base font-bold">
                  {lang === 'hi' ? 'संदेश सफलतापूर्वक भेजा गया!' : 'Message Submitted Successfully!'}
                </h4>
                <p className="text-xs text-blue-900 font-medium">
                  {lang === 'hi'
                    ? 'डी. पी. इण्टर कॉलेज कार्यालय प्रतिनिधि शीघ्र ही आपसे संपर्क करेंगे।'
                    : 'College administrative representative will review your query and respond shortly.'}
                </p>
                <button
                  onClick={() => setSubmittedMessage(false)}
                  className="bg-blue-900 text-white text-xs font-bold px-5 py-2.5 rounded-full mt-2"
                >
                  {lang === 'hi' ? 'अन्य संदेश भेजें' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'आपका नाम *' : 'Your Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'फोन / मोबाइल नंबर *' : 'Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9839212345"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'ईमेल आईडी' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'पूछताछ का विषय' : 'Inquiry Subject'}
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium focus:ring-2 focus:ring-blue-800"
                  >
                    <option value="Admission Inquiry">Admission Inquiry (प्रवेश सम्बन्धी)</option>
                    <option value="Scholarship Query">Scholarship Query (छात्रवृत्ति सम्बन्धी)</option>
                    <option value="TC & Certificates">TC & Certificates (टी. सी. व प्रमाण-पत्र)</option>
                    <option value="Bus Transport">Bus Transport (बस परिवहन)</option>
                    <option value="General Inquiry">General Inquiry (सामान्य पूछताछ)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'आपका संदेश *' : 'Your Message *'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Write your query here..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 px-4 rounded-full text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
                >
                  <Send className="w-4 h-4 text-blue-200" />
                  <span>{lang === 'hi' ? 'संदेश भेजें' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
