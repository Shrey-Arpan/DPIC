import React, { useState } from 'react';
import { Download, FileText, HelpCircle, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { DOWNLOAD_DOCS, FAQS } from '../data/collegeData';
import { Language } from '../types';

interface DownloadsSectionProps {
  lang: Language;
}

export const DownloadsSection: React.FC<DownloadsSectionProps> = ({ lang }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleDownload = (docTitle: string) => {
    alert(lang === 'hi' ? `फाइल "${docTitle}" डाउनलोड हो रही है...` : `Downloading file "${docTitle}"...`);
  };

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 font-bold text-xs px-3.5 py-1 rounded-full border border-blue-200 mb-3">
            <Download className="w-3.5 h-3.5 text-blue-800" />
            <span>{lang === 'hi' ? 'डाउनलोड एवं सामान्य प्रश्न' : 'DOWNLOADS & FAQS'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'महत्वपूर्ण प्रपत्र एवं सामान्य प्रश्नोत्तरी' : 'Official Forms, Syllabus & Frequently Asked Questions'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {lang === 'hi'
              ? 'प्रॉस्पेक्टस, पाठ्यक्रम, स्थानांतरण प्रमाणपत्र आवेदन पत्र एवं छात्रवृत्ति गाइड'
              : 'Download academic prospectus, model papers, TC application & scholarship guides'}
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Download Center List (Left Column) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-serif border-b pb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-900" />
              <span>{lang === 'hi' ? 'डाउनलोड सेंटर (PDF प्रपत्र)' : 'Official Document Downloads'}</span>
            </h3>

            <div className="space-y-3">
              {DOWNLOAD_DOCS.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-3 hover:border-blue-400 transition-all"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full uppercase">
                      {doc.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">
                      {lang === 'hi' ? doc.titleHi : doc.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono">
                      File Size: {doc.fileSize} • Date: {doc.date}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDownload(lang === 'hi' ? doc.titleHi : doc.title)}
                    className="bg-blue-900 hover:bg-blue-950 text-white p-2.5 rounded-full transition-all shadow-xs shrink-0"
                    title="Download File"
                  >
                    <Download className="w-4 h-4 text-blue-200" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion (Right Column) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-serif border-b pb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-900" />
              <span>{lang === 'hi' ? 'सामान्य प्रश्नोत्तर (Frequently Asked Questions)' : 'Frequently Asked Questions'}</span>
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-3 text-xs font-bold text-slate-900 hover:bg-blue-50/50"
                    >
                      <span>{lang === 'hi' ? faq.questionHi : faq.question}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-blue-900 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>

                    {isOpen && (
                      <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-700 leading-relaxed animate-in fade-in duration-200">
                        {lang === 'hi' ? faq.answerHi : faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
