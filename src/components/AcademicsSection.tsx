import React, { useState } from 'react';
import { 
  BookOpen, 
  FlaskConical, 
  Calculator, 
  Globe2, 
  Users, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { STREAMS } from '../data/collegeData';
import { Language, Stream } from '../types';

interface AcademicsSectionProps {
  lang: Language;
  onApplyForStream: (streamId: string) => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({
  lang,
  onApplyForStream,
}) => {
  const [selectedStreamId, setSelectedStreamId] = useState<string>('science');
  const [selectedCategory, setSelectedCategory] = useState<'all' | '11-12' | '9-10'>('all');

  const activeStream = STREAMS.find((s) => s.id === selectedStreamId) || STREAMS[0];

  const filteredStreams = STREAMS.filter((s) => {
    if (selectedCategory === '11-12') return s.id !== 'highschool';
    if (selectedCategory === '9-10') return s.id === 'highschool';
    return true;
  });

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 font-bold text-xs px-3.5 py-1 rounded-full border border-blue-200 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-800" />
            <span>{lang === 'hi' ? 'पाठ्यक्रम एवं संकाय' : 'ACADEMICS & CURRICULUM'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'शैक्षणिक वर्ग एवं विषय संरचना' : 'Academic Streams & Subject Combinations'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {lang === 'hi'
              ? 'माध्यमिक शिक्षा परिषद उत्तर प्रदेश (यूपी बोर्ड) द्वारा स्वीकृत मानक पाठ्यक्रम'
              : 'UP Board Madhyamik Shiksha Parishad prescribed curriculum for High School & Intermediate'}
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'hi' ? 'समस्त कक्षाएं (9वीं से 12वीं)' : 'All Classes (9th to 12th)'}
          </button>
          <button
            onClick={() => setSelectedCategory('11-12')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === '11-12'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'hi' ? 'इण्टरमीडिएट (11वीं व 12वीं)' : 'Intermediate (11th & 12th)'}
          </button>
          <button
            onClick={() => setSelectedCategory('9-10')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === '9-10'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'hi' ? 'हाईस्कूल (9वीं व 10वीं)' : 'High School (9th & 10th)'}
          </button>
        </div>

        {/* Interactive Stream Selection & Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stream Selector Buttons (Left Column) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              {lang === 'hi' ? 'संकाय चुनें' : 'SELECT STREAM'}
            </h3>

            {filteredStreams.map((stream) => {
              const isSelected = stream.id === selectedStreamId;
              return (
                <div
                  key={stream.id}
                  onClick={() => setSelectedStreamId(stream.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-900 text-white border-blue-800 shadow-md ring-2 ring-red-600'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-red-700 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {stream.classRange}
                    </span>
                    <span className={`text-xs font-medium ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                      {stream.seats} {lang === 'hi' ? 'सीटें' : 'Seats'}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-serif mt-2">
                    {lang === 'hi' ? stream.nameHi : stream.name}
                  </h4>

                  <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                    {lang === 'hi' ? stream.descriptionHi : stream.description}
                  </p>

                  <div className="mt-3 pt-2 border-t border-blue-800/60 flex items-center justify-between text-xs font-semibold">
                    <span className={isSelected ? 'text-blue-200' : 'text-blue-900'}>
                      {lang === 'hi' ? 'वार्षिक शुल्क:' : 'Annual Fee:'} ₹{stream.annualFee.toLocaleString()}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Stream Details (Right Column) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="bg-blue-50 text-blue-900 font-bold text-[11px] px-2.5 py-1 rounded-full border border-blue-200">
                  {activeStream.classRange}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900 mt-2">
                  {lang === 'hi' ? activeStream.nameHi : activeStream.name}
                </h3>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-right shrink-0">
                <p className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">
                  {lang === 'hi' ? 'वार्षिक शिक्षण शुल्क' : 'Total Academic Fee'}
                </p>
                <p className="text-2xl font-extrabold text-blue-900 font-mono">
                  ₹{activeStream.annualFee.toLocaleString()} <span className="text-xs text-slate-600 font-normal">/ {lang === 'hi' ? 'वर्ष' : 'Yr'}</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {lang === 'hi' ? activeStream.descriptionHi : activeStream.description}
            </p>

            {/* Subjects Table */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-900" />
                  <span>{lang === 'hi' ? 'निर्धारित विषय एवं अंक विभाजन' : 'Prescribed Subjects & Mark Breakdown'}</span>
                </h4>
                <span className="text-xs text-slate-500 font-medium">
                  {lang === 'hi' ? 'कुल 6 अनिवार्य/ऐच्छिक विषय' : 'UP Board Syllabus'}
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="py-2.5 px-3">Subject Code</th>
                      <th className="py-2.5 px-3">{lang === 'hi' ? 'विषय का नाम' : 'Subject Name'}</th>
                      <th className="py-2.5 px-3">{lang === 'hi' ? 'प्रयोगात्मक परीक्षा' : 'Practical Exam'}</th>
                      <th className="py-2.5 px-3 text-right">Max Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activeStream.subjects.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/40">
                        <td className="py-2.5 px-3 font-mono text-slate-500 font-bold">{sub.code}</td>
                        <td className="py-2.5 px-3 font-bold text-slate-800">
                          {lang === 'hi' ? sub.nameHi : sub.name}
                        </td>
                        <td className="py-2.5 px-3">
                          {sub.isPractical ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-blue-50 text-blue-900 px-2 py-0.5 rounded-full border border-blue-200">
                              <FlaskConical className="w-3 h-3 text-blue-800" />
                              {lang === 'hi' ? '30 अंक लैब प्रयोगात्मक' : '30 Marks Practical Lab'}
                            </span>
                          ) : (
                            <span className="text-slate-400 text-[11px]">{lang === 'hi' ? 'केवल लिखित' : 'Theory Only'}</span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 font-bold font-mono text-slate-900 text-right">
                          {sub.marks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action CTA inside Stream Card */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-600 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0" />
                <span>
                  {lang === 'hi'
                    ? 'अनुसूचित जाति/जनजाति एवं मेधावी छात्रों हेतु शासन छात्रवृत्ति उपलब्ध'
                    : 'UP Govt. Scholarship & Fee Reimbursement applicable'}
                </span>
              </div>

              <button
                onClick={() => onApplyForStream(activeStream.id)}
                className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-6 py-2.5 rounded-full text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>{lang === 'hi' ? 'इस वर्ग में आवेदन करें' : 'Apply for this Stream'}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
