import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Printer, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  Download,
  GraduationCap,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { COLLEGE_INFO, SAMPLE_RESULTS } from '../data/collegeData';
import { Language, StudentResult } from '../types';

interface StudentPortalProps {
  lang: Language;
}

export const StudentPortal: React.FC<StudentPortalProps> = ({ lang }) => {
  const [rollInput, setRollInput] = useState<string>('202601');
  const [selectedClass, setSelectedClass] = useState<'10th' | '12th'>('12th');
  const [activeResult, setActiveResult] = useState<StudentResult | null>(SAMPLE_RESULTS['202601']);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError(null);
    const cleanRoll = rollInput.trim();
    if (!cleanRoll) return;

    const result = SAMPLE_RESULTS[cleanRoll];
    if (result) {
      setActiveResult(result);
    } else {
      setActiveResult(null);
      setSearchError(
        lang === 'hi'
          ? `अनुक्रमांक "${cleanRoll}" का परिणाम नहीं मिला। कृपया नमूना अनुक्रमांक (जैसे 202601, 202602, 202603) का प्रयास करें।`
          : `Roll Number "${cleanRoll}" not found in current database. Please try sample roll numbers e.g. 202601, 202602, 202603.`
      );
    }
  };

  const handleQuickRollClick = (roll: string) => {
    setRollInput(roll);
    setSearchError(null);
    setActiveResult(SAMPLE_RESULTS[roll] || null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-12 bg-slate-100 min-h-screen border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 font-bold text-xs px-3.5 py-1 rounded-full border border-amber-300 mb-2">
            <FileText className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'hi' ? 'छात्र पोर्टल एवं परिणाम ऑनलाइन' : 'ONLINE MARKSHEET & RESULT PORTAL'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'यूपी बोर्ड परीक्षा परिणाम खोजें' : 'Check Board & Internal Exam Results'}
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            {lang === 'hi'
              ? 'अपना अनुक्रमांक (Roll Number) दर्ज करें एवं डिजिटल अंकपत्र (Marksheet) देखें व डाउनलोड करें'
              : 'Enter student Roll Number to access verified marksheet & provisional academic transcripts'}
          </p>
        </div>

        {/* Search Bar Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-4">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'परीक्षा कक्षा' : 'Select Examination Class'}
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value as '10th' | '12th')}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-emerald-600"
              >
                <option value="12th">Class 12th Intermediate (इण्टरमीडिएट)</option>
                <option value="10th">Class 10th High School (हाईस्कूल)</option>
              </select>
            </div>

            <div className="md:col-span-5">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'अनुक्रमांक दर्ज करें (Roll No)' : 'Enter 6-Digit Roll Number'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. 202601"
                  value={rollInput}
                  onChange={(e) => setRollInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs font-bold font-mono focus:ring-2 focus:ring-emerald-600"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Search className="w-4 h-4 text-amber-300" />
                <span>{lang === 'hi' ? 'परिणाम देखें' : 'Search Result'}</span>
              </button>
            </div>
          </form>

          {/* Helper Sample Roll Numbers */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-slate-500">
              {lang === 'hi' ? 'परीक्षण हेतु नमूना अनुक्रमांक:' : 'Try Sample Roll Numbers:'}
            </span>
            {Object.keys(SAMPLE_RESULTS).map((roll) => (
              <button
                key={roll}
                onClick={() => handleQuickRollClick(roll)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border transition-all ${
                  rollInput === roll
                    ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                }`}
              >
                {roll} ({SAMPLE_RESULTS[roll].studentName.split(' ')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Error Message if search fails */}
        {searchError && (
          <div className="bg-rose-50 border border-rose-200 text-rose-900 p-4 rounded-2xl flex items-center gap-3 text-xs mb-8">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <p>{searchError}</p>
          </div>
        )}

        {/* Marksheet Display Card */}
        {activeResult && (
          <div className="bg-white border-2 border-emerald-800 rounded-3xl p-6 md:p-10 shadow-xl space-y-6 relative overflow-hidden print:border-none print:shadow-none print:p-0">
            
            {/* Watermark Background Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <GraduationCap className="w-96 h-96 text-emerald-950" />
            </div>

            {/* Marksheet Header */}
            <div className="text-center border-b-2 border-slate-900 pb-5 relative z-10">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                MADHYAMIK SHIKSHA PARISHAD, UTTAR PRADESH
              </p>
              <h3 className="text-2xl md:text-3xl font-black font-serif text-slate-900 mt-1">
                {lang === 'hi' ? COLLEGE_INFO.nameHi : COLLEGE_INFO.name}
              </h3>
              <p className="text-xs font-semibold text-emerald-800">
                School Code: {COLLEGE_INFO.schoolCode} | Annual Board Examination Statement of Marks ({activeResult.academicYear})
              </p>
            </div>

            {/* Student & Examination Details Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-800 relative z-10">
              <div className="space-y-1">
                <p><span className="font-semibold text-slate-500">Roll Number:</span> <strong className="font-mono text-emerald-900 text-sm">{activeResult.rollNo}</strong></p>
                <p><span className="font-semibold text-slate-500">Candidate Name:</span> <strong className="text-slate-900">{activeResult.studentName}</strong></p>
                <p><span className="font-semibold text-slate-500">Father's Name:</span> {activeResult.fatherName}</p>
                <p><span className="font-semibold text-slate-500">Mother's Name:</span> {activeResult.motherName}</p>
              </div>

              <div className="space-y-1 md:text-right">
                <p><span className="font-semibold text-slate-500">Class:</span> <strong>{activeResult.className} {activeResult.stream ? `(${activeResult.stream})` : ''}</strong></p>
                <p><span className="font-semibold text-slate-500">Date of Birth:</span> {activeResult.dob}</p>
                <p><span className="font-semibold text-slate-500">Result Status:</span> <span className="bg-emerald-100 text-emerald-900 font-extrabold px-2 py-0.5 rounded">{activeResult.resultStatus}</span></p>
              </div>
            </div>

            {/* Subject Marks Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-300 relative z-10">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-amber-300 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="py-2.5 px-3">#</th>
                    <th className="py-2.5 px-3">{lang === 'hi' ? 'विषय' : 'Subject Name'}</th>
                    <th className="py-2.5 px-3 text-center">Max Marks</th>
                    <th className="py-2.5 px-3 text-center">Theory</th>
                    <th className="py-2.5 px-3 text-center">Practical</th>
                    <th className="py-2.5 px-3 text-center">Total Marks</th>
                    <th className="py-2.5 px-3 text-right">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {activeResult.subjects.map((sub, idx) => {
                    const subjectTotal = sub.obtainedTheory + (sub.obtainedPractical || 0);
                    return (
                      <tr key={idx} className="hover:bg-amber-50/40">
                        <td className="py-2.5 px-3 font-mono text-slate-400">{idx + 1}</td>
                        <td className="py-2.5 px-3 font-bold text-slate-900">
                          {lang === 'hi' ? sub.subjectHi : sub.subject}
                        </td>
                        <td className="py-2.5 px-3 text-center font-mono">{sub.maxMarks}</td>
                        <td className="py-2.5 px-3 text-center font-mono font-semibold">{sub.obtainedTheory}</td>
                        <td className="py-2.5 px-3 text-center font-mono text-slate-600">
                          {sub.obtainedPractical !== undefined ? sub.obtainedPractical : '-'}
                        </td>
                        <td className="py-2.5 px-3 text-center font-mono font-bold text-slate-900">
                          {subjectTotal}
                        </td>
                        <td className="py-2.5 px-3 text-right font-bold text-emerald-800">{sub.grade}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Summary Grand Total & Division Box */}
            <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 shadow-md">
              <div>
                <p className="text-xs text-amber-300 uppercase font-bold tracking-wider">
                  {lang === 'hi' ? 'कुल प्राप्तांक एवं प्रतिशत' : 'OVERALL PERFORMANCE SUMMARY'}
                </p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-black font-mono text-amber-300">
                    {activeResult.obtainedMarks} / {activeResult.totalMarks}
                  </span>
                  <span className="text-xl font-bold font-mono text-emerald-200">
                    ({activeResult.percentage.toFixed(2)}%)
                  </span>
                </div>
              </div>

              <div className="text-center md:text-right bg-emerald-800/80 border border-emerald-700 p-3 rounded-xl">
                <p className="text-[10px] text-emerald-300 uppercase font-semibold">FINAL RESULT DIVISION</p>
                <p className="text-base font-extrabold text-amber-300">
                  {activeResult.resultStatus}
                </p>
              </div>
            </div>

            {/* Principal Signature & Stamp Simulation */}
            <div className="pt-6 border-t border-slate-300 flex items-center justify-between relative z-10 text-xs">
              <div>
                <p className="text-[11px] text-slate-500 font-semibold">Verified by Examination Controller</p>
                <p className="text-emerald-900 font-bold mt-1">D.P. Inter College Office</p>
              </div>

              <div className="text-right">
                <div className="font-serif italic font-bold text-slate-800 text-sm">Dr. R.N. Pandey</div>
                <p className="text-[11px] font-bold text-slate-900">Principal Signature & Seal</p>
              </div>
            </div>

            {/* Print Action Bar */}
            <div className="flex items-center justify-center gap-3 pt-2 print:hidden">
              <button
                onClick={handlePrint}
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm transition-all"
              >
                <Printer className="w-4 h-4 text-amber-300" />
                <span>{lang === 'hi' ? 'मार्कशीट प्रिंट / सेव करें' : 'Print / Save Marksheet PDF'}</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
