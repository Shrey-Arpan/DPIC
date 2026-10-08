import React from 'react';
import { X, Calendar, FileText, Download, Bell, AlertCircle } from 'lucide-react';
import { Language, Notice } from '../types';

interface NoticeModalProps {
  notice: Notice | null;
  onClose: () => void;
  lang: Language;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose, lang }) => {
  if (!notice) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border-2 border-blue-900 rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {notice.isUrgent && (
              <span className="bg-red-700 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {lang === 'hi' ? 'अति आवश्यक' : 'URGENT NOTICE'}
              </span>
            )}
            <span className="bg-blue-50 text-blue-900 border border-blue-200 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase">
              {notice.category}
            </span>
          </div>

          <h3 className="text-xl font-bold font-serif text-slate-900 leading-snug">
            {lang === 'hi' ? notice.titleHi : notice.title}
          </h3>

          <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-blue-800" />
            <span>Published Date: {notice.date}</span>
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed font-normal space-y-2">
          <p>{lang === 'hi' ? notice.contentHi : notice.content}</p>
        </div>

        {notice.attachmentName && (
          <div className="bg-blue-50 border border-blue-200 p-3 rounded-2xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-900 truncate">
              <FileText className="w-4 h-4 text-blue-800 shrink-0" />
              <span className="truncate">{notice.attachmentName}</span>
            </div>

            <button
              onClick={() => alert(`Downloading ${notice.attachmentName}...`)}
              className="bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shrink-0"
            >
              <Download className="w-3.5 h-3.5 text-blue-200" />
              <span>Download</span>
            </button>
          </div>
        )}

        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="bg-slate-900 text-white font-bold px-5 py-2 rounded-full text-xs"
          >
            {lang === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
