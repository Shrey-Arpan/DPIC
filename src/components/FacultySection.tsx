import React, { useState } from 'react';
import { Users, GraduationCap, Mail, Award, BookOpen, Search } from 'lucide-react';
import { FACULTY } from '../data/collegeData';
import { Language } from '../types';

interface FacultySectionProps {
  lang: Language;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ lang }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Physics', 'Mathematics', 'Chemistry', 'Biology', 'English', 'Hindi', 'Commerce', 'Computer Science'];

  const filteredFaculty = FACULTY.filter((f) => selectedDept === 'All' || f.department === selectedDept);

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 font-bold text-xs px-3.5 py-1 rounded-full border border-blue-200 mb-3">
            <Users className="w-3.5 h-3.5 text-blue-800" />
            <span>{lang === 'hi' ? 'शिक्षक एवं संकाय सदस्य' : 'QUALIFIED TEACHING FACULTY'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'अनुभवी एवं समर्पित अध्यापकमण्डल' : 'Dedicated Faculty & Department Heads'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {lang === 'hi'
              ? 'उच्च शिक्षा (Ph.D., M.Sc., M.A., B.Ed.) प्राप्त विषय विशेषज्ञ प्राध्यापक'
              : 'Empowering students with deep conceptual knowledge, board exam preparation & mentoring'}
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Department Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedDept === dept
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-xl border border-slate-200 group-hover:scale-[1.02] transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-2 left-2 bg-blue-900/90 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                    {member.experience} Exp
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full uppercase">
                    {member.department}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-serif mt-1">
                    {lang === 'hi' ? member.nameHi : member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">
                    {lang === 'hi' ? member.designationHi : member.designation}
                  </p>
                </div>

                <div className="space-y-1 text-xs text-slate-500 font-medium pt-2 border-t border-slate-200">
                  <p className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                    <span>{member.qualification}</span>
                  </p>
                  {member.email && (
                    <p className="flex items-center gap-1.5 text-blue-900 truncate">
                      <Mail className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
