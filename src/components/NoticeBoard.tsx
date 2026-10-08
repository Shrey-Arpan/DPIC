import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Filter, 
  Calendar, 
  FileText, 
  Download, 
  AlertCircle,
  ExternalLink,
  Tag
} from 'lucide-react';
import { NOTICES } from '../data/collegeData';
import { Language, Notice } from '../types';

interface NoticeBoardProps {
  lang: Language;
  onSelectNotice: (notice: Notice) => void;
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ lang, onSelectNotice }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredNotices = NOTICES.filter((n) => {
    const matchesCategory = selectedCategory === 'all' || n.category === selectedCategory;
    const titleMatch = (lang === 'hi' ? n.titleHi : n.title).toLowerCase().includes(searchTerm.toLowerCase());
    const contentMatch = (lang === 'hi' ? n.contentHi : n.content).toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && (titleMatch || contentMatch);
  });

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'admission':
        return <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase">Admission</span>;
      case 'exam':
        return <span className="bg-amber-100 text-amber-900 border border-amber-300 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase">Exam</span>;
      case 'board':
        return <span className="bg-rose-100 text-rose-900 border border-rose-300 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase">UP Board</span>;
      case 'event':
        return <span className="bg-indigo-100 text-indigo-900 border border-indigo-300 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase">Event</span>;
      default:
        return <span className="bg-slate-100 text-slate-800 border border-slate-300 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase">Academic</span>;
    }
  };

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 font-bold text-xs px-3.5 py-1 rounded-full border border-emerald-300 mb-2">
            <Bell className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'hi' ? 'डिजिटल सूचना पट्ट' : 'DIGITAL NOTICE BOARD'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'नवीनतम घोषणाएं एवं परिपत्र' : 'College Circulars & Official Announcements'}
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            {lang === 'hi'
              ? 'प्रवेश, परीक्षा समय-सारणी, छात्रवृत्ति एवं यूपी बोर्ड दिशानिर्देश'
              : 'Official notices, exam schedules, UP Board notifications and college event circulars'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: 'All', labelHi: 'सभी सूचनाएं' },
              { id: 'admission', label: 'Admission', labelHi: 'प्रवेश' },
              { id: 'exam', label: 'Exams', labelHi: 'परीक्षाएं' },
              { id: 'board', label: 'UP Board', labelHi: 'यूपी बोर्ड' },
              { id: 'event', label: 'Events', labelHi: 'आयोजन' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lang === 'hi' ? cat.labelHi : cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <input
              type="text"
              placeholder={lang === 'hi' ? 'सूचना खोजें...' : 'Search circulars...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-8 pr-3 py-1.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>

        </div>

        {/* Notice List */}
        <div className="space-y-3">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => onSelectNotice(notice)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer group bg-white hover:border-emerald-500 hover:shadow-md ${
                notice.isUrgent ? 'border-amber-300 ring-1 ring-amber-200/80' : 'border-slate-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {notice.isUrgent && (
                    <span className="bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1 animate-pulse">
                      <AlertCircle className="w-3 h-3" />
                      {lang === 'hi' ? 'अति आवश्यक' : 'URGENT'}
                    </span>
                  )}
                  {getCategoryBadge(notice.category)}
                  <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {notice.date}
                  </span>
                </div>

                {notice.attachmentName && (
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 flex items-center gap-1 self-start sm:self-auto">
                    <FileText className="w-3 h-3" />
                    <span>{notice.attachmentName}</span>
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors font-serif">
                {lang === 'hi' ? notice.titleHi : notice.title}
              </h3>

              <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                {lang === 'hi' ? notice.contentHi : notice.content}
              </p>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span>{lang === 'hi' ? 'पूरा विवरण पढ़ें & अटैचमेंट डाउनलोड करें' : 'Click to read complete notice & download file'}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {filteredNotices.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
              <p>{lang === 'hi' ? 'कोई सूचना नहीं मिली।' : 'No notices match your filter query.'}</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
