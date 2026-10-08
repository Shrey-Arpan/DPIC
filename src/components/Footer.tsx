import React from 'react';
import { GraduationCap, Award, Phone, Mail, MapPin, ExternalLink, Heart, ShieldCheck } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-blue-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Branding & Affiliation */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-bold text-lg border border-blue-800">
                DPIC
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white">
                  {lang === 'hi' ? COLLEGE_INFO.nameHi : COLLEGE_INFO.name}
                </h3>
                <p className="text-xs text-blue-300 font-medium">
                  {lang === 'hi' ? COLLEGE_INFO.affiliationHi : COLLEGE_INFO.affiliation}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {lang === 'hi'
                ? 'माध्यमिक शिक्षा परिषद, उत्तर प्रदेश (प्रयागराज) से सम्बद्ध। गुणवत्तापूर्ण शिक्षा, विज्ञान प्रयोगशालाएं एवं अनुशासन हेतु समर्पित संस्थान।'
                : 'Affiliated to Madhyamik Shiksha Parishad, UP Board Prayagraj (School Code: UPB-1248). Empowering students with quality education & ethics since 1988.'}
            </p>

            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs text-blue-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>School Code: {COLLEGE_INFO.schoolCode} | Estd. {COLLEGE_INFO.estdYear}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif border-b border-slate-800 pb-2">
              {lang === 'hi' ? 'त्वरित नेविगेशन' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-300 transition-colors">
                  {lang === 'hi' ? 'मुख्य पृष्ठ (Home)' : 'Home Page'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('academics')} className="hover:text-blue-300 transition-colors">
                  {lang === 'hi' ? 'पाठ्यक्रम व विषय वर्ग (Academics)' : 'Academic Streams'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admissions')} className="hover:text-red-400 transition-colors text-red-400 font-bold">
                  {lang === 'hi' ? 'ऑनलाइन प्रवेश आवेदन 2026' : 'Online Admission 2026-27'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('results')} className="hover:text-red-400 transition-colors text-red-400 font-bold">
                  {lang === 'hi' ? 'परीक्षा परिणाम व अंकपत्र' : 'Check Results & Marksheet'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('notices')} className="hover:text-blue-300 transition-colors">
                  {lang === 'hi' ? 'डिजिटल सूचना पट्ट' : 'Digital Notice Board'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('facilities')} className="hover:text-blue-300 transition-colors">
                  {lang === 'hi' ? 'प्रयोगशालाएं एवं बस परिवहन' : 'Labs & Transport Facilities'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: UP Board & External Links */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif border-b border-slate-800 pb-2">
              {lang === 'hi' ? 'बोर्ड एवं पोर्टल' : 'Board Portals'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://upmsp.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>UPMSP Official</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://scholarship.up.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <span>UP Scholarship Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('downloads')} className="hover:text-blue-300 transition-colors">
                  {lang === 'hi' ? 'प्रॉस्पेक्टस व फॉर्म्स' : 'Downloads Center'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-blue-300 transition-colors">
                  {lang === 'hi' ? 'गूगल मैप लोकेशन' : 'Campus Location Map'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency Helpline */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif border-b border-slate-800 pb-2">
              {lang === 'hi' ? 'संपर्क व एंटी-रैगिंग' : 'Contact & Helpline'}
            </h4>
            <p className="text-slate-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{COLLEGE_INFO.address}</span>
            </p>
            <p className="text-slate-400 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{COLLEGE_INFO.phone}</span>
            </p>
            <p className="text-slate-400 flex items-center gap-2 truncate">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="truncate">{COLLEGE_INFO.email}</span>
            </p>

            <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl space-y-1">
              <p className="font-bold text-red-400 text-[11px]">Anti-Ragging Helpline:</p>
              <p className="text-[11px] text-slate-300 font-mono">1800-180-5522 (Toll Free 24x7)</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} D.P. Inter College (UPB-1248). All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>D.P. Inter College Official Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
