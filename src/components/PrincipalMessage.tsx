import React from 'react';
import { Quote, Award, CheckCircle, GraduationCap, Building } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';
import { Language } from '../types';

interface PrincipalMessageProps {
  lang: Language;
}

export const PrincipalMessage: React.FC<PrincipalMessageProps> = ({ lang }) => {
  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 font-bold text-xs px-3.5 py-1 rounded-full border border-blue-200 mb-3">
            <Award className="w-3.5 h-3.5 text-blue-800" />
            <span>{lang === 'hi' ? 'संस्थान नेतृत्व एवं संदेश' : 'INSTITUTIONAL LEADERSHIP'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'प्रधानाचार्य एवं प्रबंधकीय संदेश' : "Messages from Principal & Management"}
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Principal Card & Message */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-100 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-slate-100 pb-6">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
                  alt={COLLEGE_INFO.principalName}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-blue-900 shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    {lang === 'hi' ? COLLEGE_INFO.principalNameHi : COLLEGE_INFO.principalName}
                  </h3>
                  <p className="text-xs font-bold text-blue-900 mt-0.5">
                    {lang === 'hi' ? 'प्रधानाचार्य, डी. पी. इण्टर कॉलेज' : 'Principal, D.P. Inter College'}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1 flex items-center justify-center sm:justify-start gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-800" />
                    <span>{COLLEGE_INFO.principalQualification}</span>
                  </p>
                </div>
              </div>

              {/* Message Body */}
              <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                <p>
                  {lang === 'hi' ? (
                    'प्रिय विद्यार्थियों, अभिभावकों एवं शुभचिंतकों, डी. पी. इण्टर कॉलेज की ओर से आप सभी का हार्दिक अभिनंदन। शिक्षा केवल पुस्तकों तक सीमित ज्ञान प्राप्त करना नहीं है, अपितु विद्यार्थी के चरित्र निर्माण, नैतिक मूल्यों एवं तार्किक सोच का सर्वांगीण विकास करना है।'
                  ) : (
                    'Dear Students, Parents, and Well-wishers, welcome to D.P. Inter College. Education is not merely acquiring textbook knowledge; it is the holistic development of character, moral values, discipline, and scientific temperament.'
                  )}
                </p>
                <p>
                  {lang === 'hi' ? (
                    'हमारे विद्यालय का निरंतर प्रयास रहा है कि ग्रामीण व शहरी अंचल के प्रत्येक प्रतिभाशाली छात्र को आधुनिकतम विज्ञान प्रयोगशालाएं, कंप्यूटर शिक्षा, खेलकूद के अवसर एवं अनुभवी अध्यापकों का मार्गदर्शन प्राप्त हो सके ताकि वे यूपी बोर्ड परीक्षाओं में ही नहीं, अपितु जीवन के हर क्षेत्र में सफलता का परचम लहराएं।'
                  ) : (
                    'Our college strives continuously to ensure every deserving student receives access to state-of-the-art physics/chem/bio/computer labs, sports grounds, and expert faculty guidance to excel not just in UP Board examinations, but in all future endeavors.'
                  )}
                </p>
              </div>
            </div>

            {/* Core Values Bullets */}
            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2 bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                <CheckCircle className="w-4 h-4 text-blue-900 shrink-0" />
                <span>{lang === 'hi' ? 'अनुशासन एवं नैतिक मूल्य' : 'Discipline & Values'}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 p-2.5 rounded-xl border border-slate-200">
                <CheckCircle className="w-4 h-4 text-red-700 shrink-0" />
                <span>{lang === 'hi' ? 'व्यावहारिक विज्ञान प्रयोग' : 'Practical Science Focus'}</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                <CheckCircle className="w-4 h-4 text-blue-900 shrink-0" />
                <span>{lang === 'hi' ? 'शत-प्रतिशत बोर्ड परिणाम' : 'Excellent Board Result'}</span>
              </div>
            </div>
          </div>

          {/* Manager / Management Card */}
          <div className="lg:col-span-4 bg-blue-900 text-white border border-blue-800 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3 border-b border-blue-800 pb-4">
                <div className="w-12 h-12 rounded-xl bg-white text-blue-900 flex items-center justify-center font-bold shadow-xs">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-serif">
                    {lang === 'hi' ? COLLEGE_INFO.managerNameHi : COLLEGE_INFO.managerName}
                  </h3>
                  <p className="text-xs text-blue-200 font-medium">
                    {lang === 'hi' ? 'प्रबंधक / संस्थापक मंडल' : 'Manager / Founding Committee'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-blue-100 leading-relaxed font-normal">
                <p>
                  {lang === 'hi' ? (
                    'संस्थान की स्थापना वर्ष 1988 में इस संकल्प के साथ की गई थी कि क्षेत्र का कोई भी बच्चा गुणवत्तापूर्ण शिक्षा से वंचित न रहे। आज 38 वर्षों के समर्पित सफर के बाद हमारे पूर्व छात्र प्रशासनिक सेवाओं, चिकित्सा, इंजीनियरिंग एवं रक्षा सेवाओं में देश की सेवा कर रहे हैं।'
                  ) : (
                    'D.P. Inter College was established in 1988 with the vision that no child in the region should be deprived of quality education. Today, after 38 years of service, our alumni serve nationwide in administrative, medical, engineering, and defense sectors.'
                  )}
                </p>
              </div>

              <div className="bg-blue-950/80 border border-blue-800 rounded-xl p-3.5 space-y-1 text-xs">
                <p className="font-bold text-blue-200">
                  {lang === 'hi' ? 'उत्तर प्रदेश माध्यमिक शिक्षा परिषद सम्बद्धता' : 'UP Board Affiliation Details'}
                </p>
                <p className="text-blue-100">
                  {lang === 'hi' ? 'विद्यालय कोड: UPB-1248 | मान्यता: हाईस्कूल एवं इण्टरमीडिएट' : 'School Code: UPB-1248 | Recognized for Class 6th to 12th'}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-blue-800 text-[11px] text-blue-200 font-medium flex items-center justify-between">
              <span>Estd. Year 1988</span>
              <span>Regional Academic Excellence</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
