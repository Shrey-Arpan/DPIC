import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  GraduationCap, 
  FileText, 
  Award, 
  BookOpen, 
  Users, 
  Image as ImageIcon, 
  Download, 
  Bell,
  Sparkles
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { Language } from '../types';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  urgentNoticeCount: number;
  onOpenUrgentNotices: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  urgentNoticeCount,
  onOpenUrgentNotices,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', labelHi: 'मुख्य पृष्ठ', icon: GraduationCap },
    { id: 'about', label: 'About Us', labelHi: 'हमारे बारे में', icon: Award },
    { id: 'academics', label: 'Academics & Streams', labelHi: 'पाठ्यक्रम एवं वर्ग', icon: BookOpen },
    { id: 'admissions', label: 'Admissions 2026', labelHi: 'प्रवेश 2026', icon: Sparkles, badge: 'OPEN' },
    { id: 'notices', label: 'Notice Board', labelHi: 'सूचना पट्ट', icon: Bell },
    { id: 'results', label: 'Student Results', labelHi: 'परीक्षा परिणाम', icon: FileText, badge: 'NEW' },
    { id: 'facilities', label: 'Campus Facilities', labelHi: 'सुविधाएं', icon: Users },
    { id: 'faculty', label: 'Faculty', labelHi: 'शिक्षक वृंद', icon: Users },
    { id: 'gallery', label: 'Photo Gallery', labelHi: 'चित्र दीर्घा', icon: ImageIcon },
    { id: 'downloads', label: 'Downloads', labelHi: 'डाउनलोड', icon: Download },
    { id: 'contact', label: 'Contact & Map', labelHi: 'संपर्क व नक्शा', icon: MapPin },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-amber-200/60 shadow-xs">
      {/* Top Emergency / Hotline & Language Bar */}
      <div className="bg-blue-900 text-white text-[11px] py-1.5 px-4 font-medium tracking-wide border-b border-blue-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="flex items-center gap-1.5 font-semibold bg-blue-800/80 px-2.5 py-0.5 rounded-full text-blue-100 border border-blue-700/50">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {lang === 'hi' ? 'ESTD. 1988 | कोड: UPB-1248 | सम्बद्ध उ.प्र. बोर्ड' : 'ESTD. 1988 | School Code: UPB-1248 | Affiliated to U.P. Board'}
            </span>
            <a href={`tel:${COLLEGE_INFO.phone.split('/')[0]}`} className="hover:text-blue-200 flex items-center gap-1 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-300" />
              <span>📞 {COLLEGE_INFO.phone}</span>
            </a>
            <a href={`mailto:${COLLEGE_INFO.email}`} className="hidden lg:flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-300" />
              <span>📧 {COLLEGE_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {urgentNoticeCount > 0 && (
              <button
                onClick={onOpenUrgentNotices}
                className="flex items-center gap-1.5 bg-red-700 hover:bg-red-800 text-white font-bold px-3 py-0.5 rounded-full text-[11px] transition-transform active:scale-95 shadow-xs"
              >
                <Bell className="w-3.5 h-3.5 animate-bounce" />
                <span>{urgentNoticeCount} {lang === 'hi' ? 'मुख्य सूचनाएं' : 'Urgent Notices'}</span>
              </button>
            )}

            {/* Language Switcher */}
            <div className="flex items-center bg-blue-950/80 rounded-full p-0.5 border border-blue-700/50">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-white text-blue-950 shadow-xs'
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'hi'
                    ? 'bg-white text-blue-950 shadow-xs'
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding Header Banner */}
      <div className="bg-white py-4 px-8 border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            {/* College Crest Logo */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-xl shadow-md transform group-hover:scale-105 transition-all">
              <GraduationCap className="w-7 h-7 text-white" />
              <div className="absolute -bottom-0.5 -right-0.5 bg-red-700 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full border border-white">
                DP
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-blue-900 leading-none group-hover:text-blue-800 transition-colors">
                  {lang === 'hi' ? COLLEGE_INFO.nameHi : COLLEGE_INFO.name}
                </h1>
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold mt-1 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                {lang === 'hi' ? COLLEGE_INFO.affiliationHi : COLLEGE_INFO.affiliation}
              </p>
            </div>
          </div>

          {/* Quick Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('admissions')}
              className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-5 py-2 rounded-full text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span>{lang === 'hi' ? 'ऑनलाइन प्रवेश 2026' : 'Online Admission 2026'}</span>
            </button>
            <button
              onClick={() => handleNavClick('results')}
              className="bg-red-700 hover:bg-red-800 text-white font-bold px-5 py-2 rounded-full text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>{lang === 'hi' ? 'परीक्षा परिणाम' : 'Result 2026'}</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Menu Bar */}
      <nav className="bg-white text-slate-700 border-b border-slate-200 hidden lg:block shadow-xs">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-start gap-6 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 py-3 text-xs font-bold whitespace-nowrap transition-all border-b-2 ${
                    isActive
                      ? 'border-blue-900 text-blue-900'
                      : 'border-transparent text-slate-600 hover:text-blue-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-900' : 'text-slate-400'}`} />
                  <span>{lang === 'hi' ? item.labelHi : item.label}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.2 text-[9px] font-bold rounded-full bg-red-700 text-white uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-b border-slate-800 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => handleNavClick('admissions')}
              className="bg-emerald-600 text-white font-semibold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'hi' ? 'प्रवेश 2026' : 'Admission 2026'}</span>
            </button>
            <button
              onClick={() => handleNavClick('results')}
              className="bg-amber-500 text-slate-950 font-semibold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'परिणाम देखें' : 'Check Results'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 divide-y divide-slate-800">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between py-2.5 px-2 text-xs font-medium rounded-md transition-colors ${
                    isActive ? 'bg-emerald-800/80 text-amber-300 font-bold' : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                    <span>{lang === 'hi' ? item.labelHi : item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-amber-400 text-slate-950">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
