import React, { useState } from 'react';
import { Bell, ChevronRight, Pause, Play, AlertCircle } from 'lucide-react';
import { NOTICES } from '../data/collegeData';
import { Language, Notice } from '../types';

interface NoticeTickerProps {
  lang: Language;
  onSelectNotice: (notice: Notice) => void;
  onOpenAllNotices: () => void;
}

export const NoticeTicker: React.FC<NoticeTickerProps> = ({
  lang,
  onSelectNotice,
  onOpenAllNotices,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const urgentNotices = NOTICES.filter((n) => n.isUrgent || n.category === 'admission');

  return (
    <div className="bg-blue-50/80 border-y border-blue-200/80 text-slate-800 py-2 px-4 shadow-2xs">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        {/* Ticker Badge Label */}
        <div className="flex items-center gap-1.5 bg-blue-900 text-white font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shrink-0 shadow-2xs">
          <AlertCircle className="w-3.5 h-3.5 text-blue-200" />
          <span>{lang === 'hi' ? 'नवीनतम सूचनाएं' : 'LATEST NOTICES'}</span>
        </div>

        {/* Rolling Ticker Container */}
        <div 
          className="flex-1 overflow-hidden relative cursor-pointer group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex items-center gap-8 whitespace-nowrap transition-all ${
              isPaused ? '' : 'animate-marquee'
            }`}
          >
            {urgentNotices.concat(urgentNotices).map((notice, idx) => (
              <span
                key={`${notice.id}-${idx}`}
                onClick={() => onSelectNotice(notice)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-900 hover:underline transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                <span>{lang === 'hi' ? notice.titleHi : notice.title}</span>
                <span className="text-[10px] text-blue-900 bg-blue-100 px-2 py-0.2 rounded-full font-bold">
                  {notice.date}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 shrink-0 text-slate-600">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 rounded hover:bg-blue-100 transition-colors"
            title={isPaused ? 'Play Ticker' : 'Pause Ticker'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onOpenAllNotices}
            className="text-xs font-bold text-blue-900 hover:text-blue-950 flex items-center gap-0.5 hover:underline pl-2 border-l border-blue-200"
          >
            <span>{lang === 'hi' ? 'सभी देखें' : 'View All'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
