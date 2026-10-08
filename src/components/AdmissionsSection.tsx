import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Printer, 
  Download, 
  User, 
  Phone, 
  BookOpen, 
  FileCheck, 
  HelpCircle,
  QrCode,
  ShieldCheck,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COLLEGE_INFO, STREAMS } from '../data/collegeData';
import { Language } from '../types';

interface AdmissionsSectionProps {
  lang: Language;
  preselectedStreamId?: string;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  lang,
  preselectedStreamId,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submittedApp, setSubmittedApp] = useState<any | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    targetClass: preselectedStreamId === 'highschool' ? '9th' : '11th',
    stream: preselectedStreamId || 'science',
    studentName: '',
    dob: '',
    gender: 'Male',
    category: 'General',
    aadharNo: '',
    mobile: '',
    email: '',
    fatherName: '',
    motherName: '',
    guardianMobile: '',
    fatherOccupation: 'Agriculture / Farmer',
    annualIncome: '1,20,000',
    address: '',
    previousSchool: '',
    previousClass: '10th',
    previousRollNo: '',
    previousMarks: '',
    previousTotal: '600',
  });

  const [docSimulated, setDocSimulated] = useState({
    photoUploaded: true,
    marksheetUploaded: true,
    tcUploaded: false,
    aadharUploaded: true,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.studentName) {
      alert(lang === 'hi' ? 'कृपया छात्र/छात्रा का पूरा नाम दर्ज करें' : 'Please enter student full name');
      return;
    }
    if (step === 2 && (!formData.mobile || formData.mobile.length < 10)) {
      alert(lang === 'hi' ? 'कृपया 10 अंकों का मोबाइल नंबर दर्ज करें' : 'Please enter valid 10-digit mobile number');
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNumber = `DPIC-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const appRecord = {
      ...formData,
      refNumber,
      appliedDate: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'VERIFIED & PROVISIONALLY ACCEPTED',
    };

    setSubmittedApp(appRecord);
    
    // Confetti effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  const handlePrintSlip = () => {
    window.print();
  };

  const handleResetForm = () => {
    setSubmittedApp(null);
    setStep(1);
    setFormData({
      targetClass: '11th',
      stream: 'science',
      studentName: '',
      dob: '',
      gender: 'Male',
      category: 'General',
      aadharNo: '',
      mobile: '',
      email: '',
      fatherName: '',
      motherName: '',
      guardianMobile: '',
      fatherOccupation: 'Agriculture / Farmer',
      annualIncome: '1,20,000',
      address: '',
      previousSchool: '',
      previousClass: '10th',
      previousRollNo: '',
      previousMarks: '',
      previousTotal: '600',
    });
  };

  return (
    <section className="py-12 bg-slate-100 min-h-screen border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 font-bold text-xs px-3.5 py-1 rounded-full border border-emerald-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'ऑनलाइन प्रवेश पोर्टल 2026-27' : 'ONLINE ADMISSION PORTAL 2026-27'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'डी. पी. इण्टर कॉलेज ऑनलाइन पंजीकरण' : 'D.P. Inter College Admission Application'}
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            {lang === 'hi'
              ? 'कक्षा 9वीं, 10वीं, 11वीं एवं 12वीं (विज्ञान, वाणिज्य व कला वर्ग) हेतु नवीन पंजीकरण'
              : 'Direct registration form for Class 9th, 10th, 11th & 12th (Science, Commerce & Arts)'}
          </p>
        </div>

        {/* Successful Submission Printable Slip View */}
        {submittedApp ? (
          <div className="bg-white border-2 border-emerald-600 rounded-3xl p-6 md:p-10 shadow-xl space-y-6 print:border-none print:shadow-none print:p-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-slate-900 pb-6 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-emerald-800 text-amber-300 flex items-center justify-center font-bold text-xl border-2 border-amber-400">
                  DPIC
                </div>
                <div>
                  <h3 className="text-2xl font-black font-serif text-slate-900">
                    {lang === 'hi' ? COLLEGE_INFO.nameHi : COLLEGE_INFO.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800">
                    {lang === 'hi' ? COLLEGE_INFO.affiliationHi : COLLEGE_INFO.affiliation}
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono">
                    School Code: {COLLEGE_INFO.schoolCode} | Estd. {COLLEGE_INFO.estdYear}
                  </p>
                </div>
              </div>

              <div className="text-center sm:text-right bg-amber-50 border border-amber-300 p-3 rounded-2xl shrink-0">
                <p className="text-[10px] font-bold text-amber-900 uppercase">
                  {lang === 'hi' ? 'आवेदन संदर्भ संख्या' : 'APPLICATION REF NO.'}
                </p>
                <p className="text-lg font-black text-amber-950 font-mono">
                  {submittedApp.refNumber}
                </p>
                <p className="text-[10px] text-slate-500">{submittedApp.appliedDate}</p>
              </div>
            </div>

            {/* Application Status Badge */}
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-3 text-emerald-950">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-extrabold">
                    {lang === 'hi' ? 'पंजीकरण सफलतापूर्वक पूर्ण हुआ!' : 'Registration Successfully Received!'}
                  </h4>
                  <p className="text-xs text-emerald-800 font-medium">
                    {lang === 'hi'
                      ? 'कृपया इस रसीद का प्रिंट आउट लें और मूल दस्तावेजों के साथ विद्यालय कार्यालय में प्रस्तुत करें।'
                      : 'Please print this acknowledgement receipt and submit it with original documents at college counter.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrintSlip}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm print:hidden"
                >
                  <Printer className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'प्रिंट रसीद' : 'Print Slip'}</span>
                </button>
                <button
                  onClick={handleResetForm}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold px-3 py-2 rounded-xl text-xs flex items-center gap-1 print:hidden"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'नया फॉर्म' : 'New Form'}</span>
                </button>
              </div>
            </div>

            {/* Detailed Student Application Summary Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-800">
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h5 className="font-bold text-slate-900 border-b pb-1 text-xs uppercase tracking-wider">
                  1. Personal Information
                </h5>
                <p><span className="font-semibold text-slate-500">Student Name:</span> <strong className="text-slate-900">{submittedApp.studentName}</strong></p>
                <p><span className="font-semibold text-slate-500">Target Class & Stream:</span> <strong>Class {submittedApp.targetClass} ({submittedApp.stream.toUpperCase()})</strong></p>
                <p><span className="font-semibold text-slate-500">Date of Birth:</span> {submittedApp.dob}</p>
                <p><span className="font-semibold text-slate-500">Gender / Category:</span> {submittedApp.gender} / {submittedApp.category}</p>
                <p><span className="font-semibold text-slate-500">Aadhar Number:</span> {submittedApp.aadharNo || 'XXXX-XXXX-1234'}</p>
                <p><span className="font-semibold text-slate-500">Mobile Number:</span> {submittedApp.mobile}</p>
              </div>

              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h5 className="font-bold text-slate-900 border-b pb-1 text-xs uppercase tracking-wider">
                  2. Family & Academic Details
                </h5>
                <p><span className="font-semibold text-slate-500">Father's Name:</span> {submittedApp.fatherName}</p>
                <p><span className="font-semibold text-slate-500">Mother's Name:</span> {submittedApp.motherName}</p>
                <p><span className="font-semibold text-slate-500">Previous School:</span> {submittedApp.previousSchool || 'Secondary School'}</p>
                <p><span className="font-semibold text-slate-500">Previous Class Marks:</span> {submittedApp.previousMarks} / {submittedApp.previousTotal}</p>
                <p><span className="font-semibold text-slate-500">Permanent Address:</span> {submittedApp.address || COLLEGE_INFO.address}</p>
              </div>
            </div>

            {/* Documents Checklist & Seal Simulation */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-[11px] text-slate-600">
                <p className="font-bold text-slate-800">{lang === 'hi' ? 'साथ लाएं (मूल दस्तावेज):' : 'Documents to Submit at Office:'}</p>
                <p>✓ 10th / Previous Class Original Marksheet & 2 Photocopies</p>
                <p>✓ Original Transfer Certificate (TC) signed by Principal</p>
                <p>✓ 4 Recent Passport size photographs & Aadhar card copy</p>
              </div>

              <div className="text-center border-2 border-dashed border-slate-300 p-4 rounded-xl w-48 shrink-0">
                <p className="text-[10px] text-slate-400 uppercase font-bold">College Office Seal</p>
                <p className="text-xs font-serif font-bold text-emerald-900 mt-4">D.P. Inter College</p>
                <p className="text-[9px] text-slate-500">Authorized Signatory</p>
              </div>
            </div>

          </div>
        ) : (
          /* Multi-Step Interactive Form */
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            
            {/* Progress Stepper */}
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
              {[
                { num: 1, label: lang === 'hi' ? 'छात्र विवरण' : 'Student Info' },
                { num: 2, label: lang === 'hi' ? 'अभिभावक विवरण' : 'Parent Info' },
                { num: 3, label: lang === 'hi' ? 'शैक्षणिक विवरण' : 'Academic Record' },
                { num: 4, label: lang === 'hi' ? 'सत्यापन व जमा' : 'Submit' },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${
                      step >= s.num
                        ? 'bg-emerald-800 text-amber-300 ring-2 ring-emerald-200'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {s.num}
                  </div>
                  <span className={`text-xs font-medium hidden sm:inline ${step >= s.num ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Student Information */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-slate-900 border-b pb-2">
                    {lang === 'hi' ? 'कक्षा एवं छात्र की व्यक्तिगत जानकारी' : 'Step 1: Class Choice & Personal Details'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'प्रवेश कक्षा चुनें *' : 'Target Admission Class *'}
                      </label>
                      <select
                        value={formData.targetClass}
                        onChange={(e) => handleInputChange('targetClass', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      >
                        <option value="9th">Class 9th (High School First Year)</option>
                        <option value="10th">Class 10th (High School Board)</option>
                        <option value="11th">Class 11th (Intermediate First Year)</option>
                        <option value="12th">Class 12th (Intermediate Board)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'संकाय (इण्टरमीडिएट) *' : 'Select Stream (Class 11/12) *'}
                      </label>
                      <select
                        value={formData.stream}
                        onChange={(e) => handleInputChange('stream', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      >
                        <option value="science">Science Stream (PCM / PCB)</option>
                        <option value="commerce">Commerce Stream (Accountancy/Eco)</option>
                        <option value="arts">Humanities / Arts Stream</option>
                        <option value="highschool">General Stream (Class 9th & 10th)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'छात्र/छात्रा का पूरा नाम *' : 'Student Full Name (As per Marksheet) *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav Kumar Sharma"
                        value={formData.studentName}
                        onChange={(e) => handleInputChange('studentName', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'जन्म तिथि *' : 'Date of Birth (DOB) *'}
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'लिंग *' : 'Gender *'}
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      >
                        <option value="Male">Male (पुरुष)</option>
                        <option value="Female">Female (महिला)</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'वर्ग / जाति श्रेणी *' : 'Category (for Scholarship) *'}
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      >
                        <option value="General">General (सामान्य)</option>
                        <option value="OBC">OBC (अन्य पिछड़ा वर्ग)</option>
                        <option value="SC">SC (अनुसूचित जाति)</option>
                        <option value="ST">ST (अनुसूचित जनजाति)</option>
                        <option value="EWS">EWS (आर्थिक रूप से कमजोर)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Parent & Contact Details */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-slate-900 border-b pb-2">
                    {lang === 'hi' ? 'अभिभावक एवं संपर्क विवरण' : 'Step 2: Parent & Guardian Details'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'पिता का नाम *' : "Father's Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shri Rajesh Sharma"
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange('fatherName', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'माता का नाम *' : "Mother's Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Smt. Sunita Sharma"
                        value={formData.motherName}
                        onChange={(e) => handleInputChange('motherName', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर (WhatsApp) *' : 'Student / Parent Mobile No. *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9839212345"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'आधार नंबर' : 'Aadhar Card Number'}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1234-5678-9012"
                        value={formData.aadharNo}
                        onChange={(e) => handleInputChange('aadharNo', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'स्थाई पता *' : 'Permanent Address *'}
                      </label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Village / Town, Post, District, Pin Code"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Academic Record */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-slate-900 border-b pb-2">
                    {lang === 'hi' ? 'पूर्व कक्षा का शैक्षणिक विवरण' : 'Step 3: Previous Academic Performance'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'पूर्व विद्यालय का नाम' : 'Previous School/College Name'}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Janata High School"
                        value={formData.previousSchool}
                        onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'पूर्व कक्षा का अनुक्रमांक (Roll No)' : 'Previous Class Board Roll No'}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 20258942"
                        value={formData.previousRollNo}
                        onChange={(e) => handleInputChange('previousRollNo', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'प्राप्तांक' : 'Marks Obtained'}
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 480"
                        value={formData.previousMarks}
                        onChange={(e) => handleInputChange('previousMarks', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'पूर्णांक' : 'Total Marks'}
                      </label>
                      <input
                        type="number"
                        placeholder="600 or 500"
                        value={formData.previousTotal}
                        onChange={(e) => handleInputChange('previousTotal', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </div>

                  {/* Document Checklist Demo */}
                  <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 space-y-2 text-xs">
                    <p className="font-bold text-amber-900 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-amber-700" />
                      <span>{lang === 'hi' ? 'आवश्यक दस्तावेज (सत्यापन हेतु फोटोकॉपी अपलोड)' : 'Documents Status Checklist'}</span>
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-amber-800">
                      <span>✓ Passport Size Photo (Simulated)</span>
                      <span>✓ Previous Class Marksheet (Simulated)</span>
                      <span>✓ Aadhar Card Copy (Simulated)</span>
                      <span>✓ Original TC (At College Counter)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Final Review & Submit */}
              {step === 4 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <h3 className="text-base font-bold text-slate-900 border-b pb-2">
                    {lang === 'hi' ? 'आवेदन का अंतिम पुनरीक्षण एवं जमा' : 'Step 4: Review & Final Submit'}
                  </h3>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-2">
                    <p><strong className="text-slate-500">Student:</strong> {formData.studentName} | DOB: {formData.dob}</p>
                    <p><strong className="text-slate-500">Class & Stream:</strong> Class {formData.targetClass} - {formData.stream.toUpperCase()}</p>
                    <p><strong className="text-slate-500">Parent:</strong> Father {formData.fatherName} | Mobile: {formData.mobile}</p>
                    <p><strong className="text-slate-500">Address:</strong> {formData.address || 'Local Region, UP'}</p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-300 p-3 rounded-xl text-xs text-emerald-900 flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <p>
                      {lang === 'hi'
                        ? 'मैं यह घोषणा करता/करती हूँ कि मेरे द्वारा दी गई सभी जानकारियां सत्य हैं। किसी भी विसंगति पर मेरा आवेदन निरस्त किया जा सकता है।'
                        : 'I hereby declare that all details provided above are true to the best of my knowledge.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors"
                  >
                    {lang === 'hi' ? 'पीछे' : 'Back'}
                  </button>
                ) : <div></div>}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-sm transition-all"
                  >
                    {lang === 'hi' ? 'आगे बढ़ें' : 'Next Step'}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black px-8 py-3 rounded-xl text-xs shadow-md transition-transform active:scale-95 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>{lang === 'hi' ? 'आवेदन ऑनलाइन जमा करें' : 'Submit Admission Application'}</span>
                  </button>
                )}
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
