import React from 'react';
import { 
  Sparkles, 
  FileText, 
  Award, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Users,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
  onNavigate: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onNavigate }) => {
  return (
    <section className="bg-slate-50 py-6 md:py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Main Blue Hero Card */}
        <div className="relative bg-blue-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center p-8 md:p-12 text-white">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <div className="grid grid-cols-12 gap-4 w-full h-full">
              <div className="col-span-1 border-r border-white"></div>
              <div className="col-span-1 border-r border-white"></div>
              <div className="col-span-1 border-r border-white"></div>
              <div className="col-span-1 border-r border-white"></div>
            </div>
          </div>

          {/* Left Column Text & CTAs */}
          <div className="z-10 max-w-2xl space-y-5 text-center lg:text-left mb-8 lg:mb-0">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-800 text-blue-200 text-xs font-bold rounded-full uppercase tracking-widest border border-blue-700">
              <ShieldCheck className="w-4 h-4 text-blue-300" />
              <span>{lang === 'hi' ? 'प्रवेश प्रारंभ 2026-27 | सम्बद्ध उ.प्र. बोर्ड' : 'Registration Open 2026-27 | U.P. Board'}</span>
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight font-serif">
              {lang === 'hi' ? (
                <>
                  <span className="text-blue-300">डी. पी. इण्टर कॉलेज</span> में आपका स्वागत है
                </>
              ) : (
                <>
                  Nurturing Minds,<br />
                  <span className="text-blue-300">Shaping Futures.</span>
                </>
              )}
            </h1>

            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {lang === 'hi'
                ? '38 वर्षों से ग्रामीण एवं शहरी अंचल के विद्यार्थियों को गुणवत्तापूर्ण शिक्षा, सुसज्जित प्रयोगशालाएं व नैतिक मूल्य प्रदान करने हेतु समर्पित संस्थान।'
                : 'Providing quality education, state-of-the-art practical laboratories, and moral values to the youth of the region for over three decades.'}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onNavigate('admissions')}
                className="bg-white text-blue-900 hover:bg-slate-100 px-7 py-3 rounded-full font-bold shadow-lg text-sm flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4 text-blue-900" />
                <span>{lang === 'hi' ? 'ऑनलाइन प्रवेश आवेदन' : 'Apply Online'}</span>
                <ArrowRight className="w-4 h-4 text-blue-900" />
              </button>

              <button
                onClick={() => onNavigate('results')}
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-bold shadow-md text-sm flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>{lang === 'hi' ? 'परीक्षा परिणाम' : 'Check Results'}</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-1.5 transition-all"
              >
                <MapPin className="w-4 h-4 text-blue-200" />
                <span>{lang === 'hi' ? 'गूगल मैप' : 'Our Campus'}</span>
              </button>
            </div>
          </div>

          {/* Right Column Highlights & Updates Box */}
          <div className="z-10 ml-auto w-full lg:w-80 bg-blue-800/50 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-blue-700 h-fit space-y-5">
            <h4 className="text-white font-bold text-sm flex items-center gap-2 border-b border-blue-700 pb-3">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
              <span>{lang === 'hi' ? 'प्रमुख सूचनाएं एवं अपडेट्स' : 'Latest Campus Updates'}</span>
            </h4>

            <ul className="space-y-3.5 text-xs">
              <li 
                onClick={() => onNavigate('notices')}
                className="text-blue-100 pb-2 border-b border-blue-700/60 cursor-pointer hover:text-white transition-colors flex items-start gap-2"
              >
                <ChevronRight className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'यूपी बोर्ड परीक्षा समय सारणी घोषित' : 'UP Board Exam Schedule released for High School & Intermediate.'}</span>
              </li>
              <li 
                onClick={() => onNavigate('notices')}
                className="text-blue-100 pb-2 border-b border-blue-700/60 cursor-pointer hover:text-white transition-colors flex items-start gap-2"
              >
                <ChevronRight className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'छात्रवृत्ति ऑनलाइन फॉर्म आवेदन की अंतिम तिथि समीप' : 'UP Scholarship portal online applications currently open.'}</span>
              </li>
              <li 
                onClick={() => onNavigate('notices')}
                className="text-blue-100 cursor-pointer hover:text-white transition-colors flex items-start gap-2"
              >
                <ChevronRight className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? 'वार्षिक खेलकूद एवं विज्ञान प्रदर्शनी समारोह' : 'Annual Sports Meet & Science Exhibition dates announced.'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Stat Cards Grid (From Design Theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col items-center text-center hover:border-blue-300 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-3">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-3xl font-extrabold text-slate-900 font-mono">{COLLEGE_INFO.stats.totalStudents}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
              {lang === 'hi' ? 'नामांकित छात्र' : 'Enrolled Students'}
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col items-center text-center hover:border-blue-300 transition-all">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center mb-3">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-3xl font-extrabold text-slate-900 font-mono">{COLLEGE_INFO.stats.passPercentage}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
              {lang === 'hi' ? 'बोर्ड परिणाम' : 'Board Pass Rate'}
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col items-center text-center hover:border-blue-300 transition-all">
            <div className="w-12 h-12 bg-purple-50 text-purple-800 rounded-xl flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-3xl font-extrabold text-slate-900 font-mono">6 Modern</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
              {lang === 'hi' ? 'प्रयोगशालाएं' : 'Practical Labs'}
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col items-center text-center hover:border-blue-300 transition-all">
            <div className="w-12 h-12 bg-orange-50 text-orange-800 rounded-xl flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-3xl font-extrabold text-slate-900 font-mono">{COLLEGE_INFO.stats.facultyCount}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
              {lang === 'hi' ? 'योग्य प्राध्यापक' : 'Qualified Faculty'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
