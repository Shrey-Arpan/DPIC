import { Notice, Stream, FacultyMember, GalleryItem, StudentResult, TransportRoute, Facility, FAQItem, DownloadDoc } from '../types';

export const COLLEGE_INFO = {
  name: 'D.P. Inter College',
  nameHi: 'डी. पी. इण्टर कॉलेज',
  tagline: 'Education • Excellence • Discipline • Integrity',
  taglineHi: 'शिक्षा • उत्कृष्टता • अनुशासन • संस्कार',
  affiliation: 'Affiliated to UP Board (Madhyamik Shiksha Parishad, Prayagraj)',
  affiliationHi: 'माध्यमिक शिक्षा परिषद, उत्तर प्रदेश (प्रयागराज) से सम्बद्ध',
  schoolCode: 'UPB-1248',
  estdYear: '1988',
  address: 'D.P. Inter College Campus, Main Road, Region 272153, Uttar Pradesh, India',
  addressHi: 'डी. पी. इण्टर कॉलेज परिसर, मुख्य मार्ग, उत्तर प्रदेश, भारत',
  phone: '+91 94501 23456 / +91 98392 87654',
  email: 'info@dpintercollege.edu.in',
  officeHours: 'Mon - Sat: 8:00 AM - 2:00 PM',
  principalName: 'Dr. Ram Naresh Pandey',
  principalNameHi: 'डॉ. राम नरेश पाण्डेय',
  principalQualification: 'M.Sc. (Physics), Ph.D., B.Ed.',
  managerName: 'Shri Durga Prasad Sharma',
  managerNameHi: 'श्री दुर्गा प्रसाद शर्मा',
  gmapUrl: 'https://www.google.com/maps/place/D.P.INTER+COLLEGE/@26.5828634,82.5207694,17z/data=!3m1!4b1!4m6!3m5!1s0x39909574051f887f:0x4b8acc88a7ca4206!8m2!3d26.5828586!4d82.5233497!16s%2Fg%2F11df04p1kp',
  coordinates: {
    lat: 26.5828586,
    lng: 82.5233497
  },
  stats: {
    totalStudents: '1,850+',
    passPercentage: '98.6%',
    facultyCount: '42+',
    campusArea: '5.5 Acres',
    alumniCount: '12,000+'
  }
};

export const NOTICES: Notice[] = [
  {
    id: 'n1',
    title: 'Admissions Open for Class 9th & 11th (Science, Commerce & Arts) - Session 2026-27',
    titleHi: 'कक्षा 9वीं एवं 11वीं (विज्ञान, वाणिज्य व कला वर्ग) में प्रवेश प्रारम्भ - सत्र 2026-27',
    category: 'admission',
    date: 'July 20, 2026',
    isUrgent: true,
    content: 'Online and offline admission forms for session 2026-27 are now available. Entrance test & merit registration guidelines can be submitted at the college office or through this portal.',
    contentHi: 'सत्र 2026-27 हेतु ऑनलाइन एवं ऑफलाइन प्रवेश फार्म उपलब्ध हैं। छात्र ऑनलाइन अथवा महाविद्यालय कार्यालय से फार्म प्राप्त कर जमा कर सकते हैं।',
    attachmentName: 'Admission_Guidelines_2026.pdf'
  },
  {
    id: 'n2',
    title: 'UP Board Class 10th & 12th Board Examination Form Verification Schedule',
    titleHi: 'यूपी बोर्ड कक्षा 10वीं व 12वीं परीक्षा फॉर्म सत्यापन समय-सारणी',
    category: 'board',
    date: 'July 18, 2026',
    isUrgent: true,
    content: 'All regular students of Class 10th and 12th must verify their subject choices, spelling of names, and Aadhar registration details before July 30, 2026 at Counter No. 2.',
    contentHi: 'कक्षा 10वीं और 12वीं के समस्त संस्थागत छात्र अपना नाम, विषय तथा आधार विवरण का सत्यापन 30 जुलाई 2026 तक पटल क्र. 2 पर अवश्य करा लें।',
    attachmentName: 'Board_Verification_Notice.pdf'
  },
  {
    id: 'n3',
    title: 'Annual Science & Art Exhibition Competition 2026 Announcement',
    titleHi: 'वार्षिक विज्ञान एवं कला प्रदर्शनी प्रतियोगिता 2026 की घोषणा',
    category: 'event',
    date: 'July 12, 2026',
    isUrgent: false,
    content: 'D.P. Inter College will host the Inter-School Science & Craft Exhibition on August 10, 2026. Interested student models must be registered with the Physics/Chemistry HOD by August 2.',
    contentHi: 'महाविद्यालय में 10 अगस्त 2026 को विज्ञान व कला प्रदर्शनी का आयोजन किया जाएगा। प्रतिभागी छात्र अपने मॉडल का पंजीकरण 2 अगस्त तक करा लें।',
    attachmentName: 'Science_Exhibition_Rules.pdf'
  },
  {
    id: 'n4',
    title: 'Pre-Board Quarterly Internal Assessment Schedule for Class 9 to 12',
    titleHi: 'कक्षा 9 से 12 हेतु प्रथम त्रैमासिक आतंरिक मूल्यांकन परीक्षा समय सारणी',
    category: 'exam',
    date: 'July 05, 2026',
    isUrgent: false,
    content: 'Quarterly internal unit tests start from August 16, 2026. Attendance is mandatory for internal evaluation grading required by UP Board.',
    contentHi: 'प्रथम त्रैमासिक मूल्यांकन परीक्षा 16 अगस्त 2026 से प्रारम्भ होगी। सभी छात्रों हेतु उपस्थिति अनिवार्य है।',
    attachmentName: 'Quarterly_Exam_Schedule.pdf'
  },
  {
    id: 'n5',
    title: 'State Govt. Laptop & Medhavi Student Scholarship Portal Registration Open',
    titleHi: 'उत्तर प्रदेश शासन मेधावी छात्र छात्रवृत्ति व प्रोत्साहन योजना पंजीकरण',
    category: 'academic',
    date: 'June 28, 2026',
    isUrgent: false,
    content: 'Eligible SC/ST/OBC and Economically Weaker Section (EWS) students can apply for government scholarships at the computer lab between 10:00 AM to 1:00 PM.',
    contentHi: 'छात्रवृत्ति हेतु पात्र छात्र कंप्यूटर लैब में पूर्वाहन 10:00 से अपराह्न 1:00 बजे तक अपना पंजीकरण एवं दस्तावेज जमा कर सकते हैं।',
    attachmentName: 'Scholarship_Form_Instructions.pdf'
  }
];

export const STREAMS: Stream[] = [
  {
    id: 'science',
    name: 'Intermediate Science Stream (PCM / PCB)',
    nameHi: 'इण्टरमीडिएट विज्ञान वर्ग (गणित / जीवविज्ञान)',
    classRange: 'Class 11th & 12th',
    description: 'Comprehensive science stream tailored for engineering (JEE), medical (NEET), and research entrance preparations with state-of-the-art practical laboratories.',
    descriptionHi: 'प्रतियोगी परीक्षाओं (JEE / NEET) एवं अनुसंधान उन्मुख आधुनिक प्रयोगशालाओं के साथ उत्कृष्ट शिक्षण।',
    seats: 240,
    annualFee: 4800,
    subjects: [
      { code: '301', name: 'General Hindi', nameHi: 'सामान्य हिंदी', marks: 100 },
      { code: '302', name: 'English', nameHi: 'अंग्रेजी', marks: 100 },
      { code: '312', name: 'Physics (Theory + Practical)', nameHi: 'भौतिक विज्ञान', isPractical: true, marks: 100 },
      { code: '313', name: 'Chemistry (Theory + Practical)', nameHi: 'रसायन विज्ञान', isPractical: true, marks: 100 },
      { code: '314', name: 'Mathematics / Biology', nameHi: 'गणित / जीवविज्ञान', isPractical: true, marks: 100 },
      { code: '315', name: 'Computer Science / Environmental Science', nameHi: 'कंप्यूटर साइंस / पर्यावरण', isPractical: true, marks: 100 }
    ]
  },
  {
    id: 'commerce',
    name: 'Intermediate Commerce Stream',
    nameHi: 'इण्टरमीडिएट वाणिज्य वर्ग',
    classRange: 'Class 11th & 12th',
    description: 'Designed for future Chartered Accountants, Banking, Finance, and Business Management professionals with emphasis on accounting, economics, and business studies.',
    descriptionHi: 'लेखांकन, व्यावसायिक अध्ययन, अर्थशास्त्र एवं बैंकिंग करियर की ठोस नींव हेतु समृद्ध पाठ्यक्रम।',
    seats: 120,
    annualFee: 4200,
    subjects: [
      { code: '301', name: 'General Hindi', nameHi: 'सामान्य हिंदी', marks: 100 },
      { code: '302', name: 'English', nameHi: 'अंग्रेजी', marks: 100 },
      { code: '321', name: 'Accountancy', nameHi: 'बहीखाता एवं लेखाशास्त्र', marks: 100 },
      { code: '322', name: 'Business Studies', nameHi: 'व्यापारिक संगठन एवं पत्र व्यवहार', marks: 100 },
      { code: '323', name: 'Economics', nameHi: 'अर्थशास्त्र', marks: 100 },
      { code: '324', name: 'Commercial Math / Computer', nameHi: 'व्यावसायिक गणित / कंप्यूटर', isPractical: true, marks: 100 }
    ]
  },
  {
    id: 'arts',
    name: 'Intermediate Humanities & Arts Stream',
    nameHi: 'इण्टरमीडिएट कला वर्ग',
    classRange: 'Class 11th & 12th',
    description: 'Empowering students targeting Civil Services (UPSC/UPPSC), Law, Literature, and Social Sciences with analytical reading and general knowledge grounding.',
    descriptionHi: 'नागरिक सेवाओं (UPSC/UPPSC), शिक्षा एवं साहित्य के क्षेत्र में सफलता हेतु बहुविषयक कला वर्ग।',
    seats: 180,
    annualFee: 3600,
    subjects: [
      { code: '301', name: 'Hindi Literature', nameHi: 'हिंदी साहित्य', marks: 100 },
      { code: '302', name: 'English', nameHi: 'अंग्रेजी', marks: 100 },
      { code: '331', name: 'Geography', nameHi: 'भूगोल', isPractical: true, marks: 100 },
      { code: '332', name: 'History', nameHi: 'इतिहास', marks: 100 },
      { code: '333', name: 'Civics / Political Science', nameHi: 'नागरिक शास्त्र', marks: 100 },
      { code: '334', name: 'Sociology / Economics', nameHi: 'समाजशास्त्र / अर्थशास्त्र', marks: 100 }
    ]
  },
  {
    id: 'highschool',
    name: 'High School (Class 9th & 10th General Science & Arts)',
    nameHi: 'हाईस्कूल (कक्षा 9वीं एवं 10वीं)',
    classRange: 'Class 9th & 10th',
    description: 'Strong foundation across core disciplines as mandated by Madhyamik Shiksha Parishad, UP, with physical education, moral education, and practical lab works.',
    descriptionHi: 'माध्यमिक शिक्षा परिषद उत्तर प्रदेश द्वारा निर्धारित बुनियादी विषयों का सशक्त एवं सर्वांगीण अभ्यास।',
    seats: 320,
    annualFee: 3200,
    subjects: [
      { code: '101', name: 'Hindi', nameHi: 'हिंदी', marks: 100 },
      { code: '102', name: 'English', nameHi: 'अंग्रेजी', marks: 100 },
      { code: '103', name: 'Mathematics', nameHi: 'गणित', marks: 100 },
      { code: '104', name: 'Science (Physics, Chem, Bio)', nameHi: 'विज्ञान', isPractical: true, marks: 100 },
      { code: '105', name: 'Social Science (History, Geo, Civics, Eco)', nameHi: 'सामाजिक विज्ञान', marks: 100 },
      { code: '106', name: 'Art / Computer Science', nameHi: 'चित्रकला / कंप्यूटर विज्ञान', isPractical: true, marks: 100 }
    ]
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Dr. Ram Naresh Pandey',
    nameHi: 'डॉ. राम नरेश पाण्डेय',
    designation: 'Principal & HOD Physics',
    designationHi: 'प्रधानाचार्य एवं विभागाध्यक्ष (भौतिकी)',
    department: 'Physics',
    qualification: 'M.Sc. Physics, Ph.D., B.Ed.',
    experience: '28 Years',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    email: 'principal@dpintercollege.edu.in'
  },
  {
    id: 'f2',
    name: 'Shri Shailendra Kumar Verma',
    nameHi: 'श्री शैलेंद्र कुमार वर्मा',
    designation: 'Vice Principal & Mathematics Lecturer',
    designationHi: 'उप-प्रधानाचार्य एवं प्रवक्ता (गणित)',
    department: 'Mathematics',
    qualification: 'M.Sc. Mathematics, B.Ed.',
    experience: '22 Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    email: 'sk.verma@dpintercollege.edu.in'
  },
  {
    id: 'f3',
    name: 'Dr. Anjali Tripathi',
    nameHi: 'डॉ. अंजलि त्रिपाठी',
    designation: 'Senior Lecturer - Chemistry',
    designationHi: 'वरिष्ठ प्रवक्ता (रसायन विज्ञान)',
    department: 'Chemistry',
    qualification: 'M.Sc., Ph.D. Organic Chemistry',
    experience: '18 Years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f4',
    name: 'Shri Arvind Nath Mishra',
    nameHi: 'श्री अरविंद नाथ मिश्रा',
    designation: 'Lecturer - Biology',
    designationHi: 'प्रवक्ता (जीव विज्ञान)',
    department: 'Biology',
    qualification: 'M.Sc. Zoology, B.Ed.',
    experience: '16 Years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f5',
    name: 'Smt. Sunita Srivastava',
    nameHi: 'श्रीमती सुनिता श्रीवास्तव',
    designation: 'Senior Lecturer - English & Literature',
    designationHi: 'वरिष्ठ प्रवक्ता (अंग्रेजी)',
    department: 'English',
    qualification: 'M.A. English Lit., B.Ed.',
    experience: '20 Years',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f6',
    name: 'Shri Vijay Bahadur Singh',
    nameHi: 'श्री विजय बहादुर सिंह',
    designation: 'Lecturer - Hindi & Sanskrit',
    designationHi: 'प्रवक्ता (हिंदी व संस्कृत)',
    department: 'Hindi',
    qualification: 'M.A. Hindi & Sanskrit, B.Ed.',
    experience: '19 Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f7',
    name: 'Shri Ramesh Chandra Gupta',
    nameHi: 'श्री रमेश चंद्र गुप्ता',
    designation: 'Lecturer - Commerce & Accountancy',
    designationHi: 'प्रवक्ता (वाणिज्य व लेखाशास्त्र)',
    department: 'Commerce',
    qualification: 'M.Com, B.Ed., CA-Inter',
    experience: '15 Years',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'f8',
    name: 'Shri Dharmendra Kumar Yadav',
    nameHi: 'श्री धर्मेन्द्र कुमार यादव',
    designation: 'Computer Science & ICT Head',
    designationHi: 'प्रवक्ता (कंप्यूटर विज्ञान व आईटी)',
    department: 'Computer Science',
    qualification: 'MCA, B.Tech CSE, B.Ed.',
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'D.P. Inter College Main Academic Building Front View',
    titleHi: 'डी. पी. इण्टर कॉलेज मुख्य प्रशासनिक एवं शैक्षणिक भवन',
    category: 'campus',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
    date: 'March 2026'
  },
  {
    id: 'g2',
    title: 'Students Performing Chemistry Lab Practicals',
    titleHi: 'रसायन विज्ञान प्रयोगशाला में प्रयोगात्मक कार्य करते छात्र',
    category: 'labs',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200',
    date: 'February 2026'
  },
  {
    id: 'g3',
    title: 'Annual Sports Day Athletics Championship',
    titleHi: 'वार्षिक खेलकूद प्रतियोगिता एवं एथलेटिक्स स्पर्धा',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200',
    date: 'January 2026'
  },
  {
    id: 'g4',
    title: 'Modern Computer Science & Coding Laboratory',
    titleHi: 'आधुनिक कंप्यूटर विज्ञान एवं आईटी लैब',
    category: 'labs',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    date: 'March 2026'
  },
  {
    id: 'g5',
    title: 'Republic Day Flag Hoisting & Parade Ceremony',
    titleHi: 'गणतंत्र दिवस ध्वजारोहण एवं एनसीसी परेड समारोह',
    category: 'cultural',
    imageUrl: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=1200',
    date: 'January 26, 2026'
  },
  {
    id: 'g6',
    title: 'Central Library & Reading Hall',
    titleHi: 'केंद्रीय पुस्तकालय एवं वाचनालय',
    category: 'campus',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200',
    date: 'February 2026'
  },
  {
    id: 'g7',
    title: 'Science Model Exhibition Winners Awarding',
    titleHi: 'विज्ञान मॉडल प्रदर्शनी पुरस्कार वितरण',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200',
    date: 'November 2025'
  },
  {
    id: 'g8',
    title: 'Inter-House Volleyball Tournament Final',
    titleHi: 'अंतर-सदन वॉलीबॉल प्रतियोगिता फाइनल मैच',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=1200',
    date: 'December 2025'
  }
];

export const SAMPLE_RESULTS: Record<string, StudentResult> = {
  '202601': {
    rollNo: '202601',
    studentName: 'Aarav Kumar Sharma',
    studentNameHi: 'आरव कुमार शर्मा',
    fatherName: 'Shri Rajesh Sharma',
    motherName: 'Smt. Sunita Sharma',
    className: '12th',
    stream: 'Science (PCM)',
    academicYear: '2025-2026',
    dob: '15/08/2008',
    schoolCode: '1248',
    subjects: [
      { subject: 'General Hindi', subjectHi: 'सामान्य हिंदी', maxMarks: 100, obtainedTheory: 88, grade: 'A+' },
      { subject: 'English', subjectHi: 'अंग्रेजी', maxMarks: 100, obtainedTheory: 85, grade: 'A+' },
      { subject: 'Physics', subjectHi: 'भौतिक विज्ञान', maxMarks: 100, obtainedTheory: 64, obtainedPractical: 29, grade: 'A+' },
      { subject: 'Chemistry', subjectHi: 'रसायन विज्ञान', maxMarks: 100, obtainedTheory: 61, obtainedPractical: 28, grade: 'A+' },
      { subject: 'Mathematics', subjectHi: 'गणित', maxMarks: 100, obtainedTheory: 95, grade: 'A+' }
    ],
    totalMarks: 500,
    obtainedMarks: 450,
    percentage: 90.0,
    resultStatus: 'PASSED (DISTINCTION)'
  },
  '202602': {
    rollNo: '202602',
    studentName: 'Priya Verma',
    studentNameHi: 'प्रिया वर्मा',
    fatherName: 'Shri Anil Verma',
    motherName: 'Smt. Kavita Verma',
    className: '12th',
    stream: 'Science (PCB)',
    academicYear: '2025-2026',
    dob: '22/11/2008',
    schoolCode: '1248',
    subjects: [
      { subject: 'General Hindi', subjectHi: 'सामान्य हिंदी', maxMarks: 100, obtainedTheory: 91, grade: 'A+' },
      { subject: 'English', subjectHi: 'अंग्रेजी', maxMarks: 100, obtainedTheory: 89, grade: 'A+' },
      { subject: 'Physics', subjectHi: 'भौतिक विज्ञान', maxMarks: 100, obtainedTheory: 65, obtainedPractical: 30, grade: 'A+' },
      { subject: 'Chemistry', subjectHi: 'रसायन विज्ञान', maxMarks: 100, obtainedTheory: 63, obtainedPractical: 29, grade: 'A+' },
      { subject: 'Biology', subjectHi: 'जीव विज्ञान', maxMarks: 100, obtainedTheory: 66, obtainedPractical: 30, grade: 'A+' }
    ],
    totalMarks: 500,
    obtainedMarks: 463,
    percentage: 92.6,
    resultStatus: 'PASSED (DISTINCTION)'
  },
  '202603': {
    rollNo: '202603',
    studentName: 'Shivam Yadav',
    studentNameHi: 'शिवम यादव',
    fatherName: 'Shri Mahendra Yadav',
    motherName: 'Smt. Usha Yadav',
    className: '10th',
    academicYear: '2025-2026',
    dob: '05/04/2010',
    schoolCode: '1248',
    subjects: [
      { subject: 'Hindi', subjectHi: 'हिंदी', maxMarks: 100, obtainedTheory: 82, grade: 'A' },
      { subject: 'English', subjectHi: 'अंग्रेजी', maxMarks: 100, obtainedTheory: 78, grade: 'A' },
      { subject: 'Mathematics', subjectHi: 'गणित', maxMarks: 100, obtainedTheory: 88, grade: 'A+' },
      { subject: 'Science', subjectHi: 'विज्ञान', maxMarks: 100, obtainedTheory: 58, obtainedPractical: 29, grade: 'A' },
      { subject: 'Social Science', subjectHi: 'सामाजिक विज्ञान', maxMarks: 100, obtainedTheory: 81, grade: 'A' },
      { subject: 'Drawing', subjectHi: 'चित्रकला', maxMarks: 100, obtainedTheory: 60, obtainedPractical: 28, grade: 'A+' }
    ],
    totalMarks: 600,
    obtainedMarks: 484,
    percentage: 80.67,
    resultStatus: 'PASSED (FIRST DIVISION)'
  },
  '202604': {
    rollNo: '202604',
    studentName: 'Ananya Gupta',
    studentNameHi: 'अनन्या गुप्ता',
    fatherName: 'Shri Sanjeev Gupta',
    motherName: 'Smt. Rekha Gupta',
    className: '12th',
    stream: 'Commerce',
    academicYear: '2025-2026',
    dob: '12/01/2008',
    schoolCode: '1248',
    subjects: [
      { subject: 'General Hindi', subjectHi: 'सामान्य हिंदी', maxMarks: 100, obtainedTheory: 86, grade: 'A+' },
      { subject: 'English', subjectHi: 'अंग्रेजी', maxMarks: 100, obtainedTheory: 84, grade: 'A+' },
      { subject: 'Accountancy', subjectHi: 'बहीखाता एवं लेखाशास्त्र', maxMarks: 100, obtainedTheory: 92, grade: 'A+' },
      { subject: 'Business Studies', subjectHi: 'व्यापारिक संगठन', maxMarks: 100, obtainedTheory: 88, grade: 'A+' },
      { subject: 'Economics', subjectHi: 'अर्थशास्त्र', maxMarks: 100, obtainedTheory: 85, grade: 'A+' }
    ],
    totalMarks: 500,
    obtainedMarks: 435,
    percentage: 87.0,
    resultStatus: 'PASSED (FIRST DIVISION)'
  },
  '202605': {
    rollNo: '202605',
    studentName: 'Rohan Srivastava',
    studentNameHi: 'रोहन श्रीवास्तव',
    fatherName: 'Shri Deepak Srivastava',
    motherName: 'Smt. Madhu Srivastava',
    className: '10th',
    academicYear: '2025-2026',
    dob: '18/09/2010',
    schoolCode: '1248',
    subjects: [
      { subject: 'Hindi', subjectHi: 'हिंदी', maxMarks: 100, obtainedTheory: 94, grade: 'A+' },
      { subject: 'English', subjectHi: 'अंग्रेजी', maxMarks: 100, obtainedTheory: 91, grade: 'A+' },
      { subject: 'Mathematics', subjectHi: 'गणित', maxMarks: 100, obtainedTheory: 98, grade: 'A+' },
      { subject: 'Science', subjectHi: 'विज्ञान', maxMarks: 100, obtainedTheory: 68, obtainedPractical: 30, grade: 'A+' },
      { subject: 'Social Science', subjectHi: 'सामाजिक विज्ञान', maxMarks: 100, obtainedTheory: 90, grade: 'A+' },
      { subject: 'Computer Science', subjectHi: 'कंप्यूटर साइंस', maxMarks: 100, obtainedTheory: 67, obtainedPractical: 30, grade: 'A+' }
    ],
    totalMarks: 600,
    obtainedMarks: 568,
    percentage: 94.67,
    resultStatus: 'PASSED (DISTINCTION)'
  }
};

export const FACILITIES: Facility[] = [
  {
    id: 'fac1',
    title: 'Advanced Science Laboratories',
    titleHi: 'उन्नत विज्ञान प्रयोगशालाएं',
    description: 'Separate, spacious and well-equipped Physics, Chemistry, and Biology practical laboratories with safety apparatus and individual student workbenches.',
    descriptionHi: 'भौतिकी, रसायन एवं जीव विज्ञान की पृथक एवं आधुनिक उपकरणों से सुसज्जित विशाल प्रयोगशालाएं।',
    iconName: 'FlaskConical',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    highlights: ['Digital Oscilloscopes & Optical Benches', 'High-power Microscopes & Anatomy Specimen Hub', 'Fume Hoods & Safety Fire Extinguishers']
  },
  {
    id: 'fac2',
    title: 'High-Speed ICT Computer Lab',
    titleHi: 'हाई-स्पीड आईटी व कंप्यूटर लैब',
    description: 'Air-conditioned computer laboratory with 50+ modern desktops, high-speed fiber internet, projector for coding demos, and UPS power backup.',
    descriptionHi: '50 से अधिक आधुनिक कंप्यूटर, हाई-स्पीड इंटरनेट, ऑनलाइन डिजिटल शिक्षण एवं निरंतर बिजली बैकअप।',
    iconName: 'Laptop',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    highlights: ['50+ Intel Core i5 Desktop PCs', 'C++, Python & MS Office Training', 'High-Speed Gigabit Fiber Connectivity']
  },
  {
    id: 'fac3',
    title: 'Central Library & Reading Room',
    titleHi: 'केंद्रीय पुस्तकालय एवं वाचनालय',
    description: 'Quiet learning environment housing over 12,000 books, national newspapers, monthly competitive exam magazines (Pratiyogita Darpan), and syllabus textbooks.',
    descriptionHi: '12,000 से अधिक पुस्तकों, संदर्भ ग्रन्थों, समाचार पत्रों एवं प्रतियोगी पत्रिकाओं का समृद्ध संग्रह।',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
    highlights: ['12,000+ Textbooks & Reference Literature', 'Daily Hindi & English Newspapers', 'Dedicated Silent Study Zone for Board Students']
  },
  {
    id: 'fac4',
    title: 'Sports Grounds & Fitness Arena',
    titleHi: 'विशाल खेल का मैदान एवं स्पोर्ट्स ग्राउंड',
    description: 'Multi-sport athletic field for Cricket, Football, Volleyball, Badminton, Kabaddi, and Track & Field events with professional coaches.',
    descriptionHi: 'क्रिकेट, वॉलीबॉल, फुटबॉल, बैडमिंटन एवं एथलेटिक्स हेतु विशाल क्रीड़ा स्थल एवं कुशल प्रशिक्षक।',
    iconName: 'Trophy',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800',
    highlights: ['Standard Volleyball & Basketball Courts', 'Annual Inter-District Sports Tournaments', 'NCC & Scout Guide Wings']
  },
  {
    id: 'fac5',
    title: 'Safe Campus Bus Transport',
    titleHi: 'सुरक्षित बस परिवहन सेवा',
    description: 'Fleet of GPS-tracked yellow school buses connecting nearby rural and urban routes with dedicated female conductors and trained drivers.',
    descriptionHi: 'आस-पास के सभी क्षेत्रों व मार्गों से सुरक्षित एवं जीपीएस युक्त बस परिवहन सुविधा।',
    iconName: 'Bus',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
    highlights: ['Real-time Bus Tracking & Speed Limiters', 'Covers 15+ Bus Stop Routes', 'Emergency First Aid & Safety Guards']
  },
  {
    id: 'fac6',
    title: 'Smart Audio-Visual Classrooms',
    titleHi: 'स्मार्ट ऑडियो-विजुअल कक्षाएं',
    description: 'Interactive smart boards and HD projectors to explain complex scientific concepts through 3D animations and digital tutorials.',
    descriptionHi: '3D एनिमेशन और डिजिटल वीडियो ट्यूटोरियल के माध्यम से कठिन विषयों का सरलीकृत अध्ययन।',
    iconName: 'Tv',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800',
    highlights: ['Digital Interactive Touch Screens', 'Visual Learning for Physics & Bio Diagrams', 'Regular Audio-Visual Seminars']
  }
];

export const TRANSPORT_ROUTES: TransportRoute[] = [
  {
    routeNo: 'Route 1',
    routeName: 'Main Highway & Town Line',
    routeNameHi: 'मुख्य हाईवे व टाउन मार्ग',
    busNumber: 'UP-51-AB-1248',
    driverName: 'Shri Satish Kumar (+91 94150 11223)',
    contactNumber: '+91 94150 11223',
    stops: [
      { stopName: 'Market Square / Chauraha', stopNameHi: 'मुख्य बाजार चौराहा', time: '07:10 AM', feePerMonth: 600 },
      { stopName: 'Railway Crossing Gate', stopNameHi: 'रेलवे क्रॉसिंग गेट', time: '07:25 AM', feePerMonth: 650 },
      { stopName: 'Old Bus Station', stopNameHi: 'पुराना बस स्टैंड', time: '07:35 AM', feePerMonth: 700 },
      { stopName: 'College Campus Gate', stopNameHi: 'महाविद्यालय मुख्य द्वार', time: '07:55 AM', feePerMonth: 0 }
    ]
  },
  {
    routeNo: 'Route 2',
    routeName: 'East Rural Circle & Bypass',
    routeNameHi: 'पूर्वी ग्रामीण अंचल व बाईपास मार्ग',
    busNumber: 'UP-51-AB-1249',
    driverName: 'Shri Ramdev Yadav (+91 98380 44556)',
    contactNumber: '+91 98380 44556',
    stops: [
      { stopName: 'Babhnan Road T-Point', stopNameHi: 'बभनान रोड तिराहा', time: '07:05 AM', feePerMonth: 750 },
      { stopName: 'Purani Bazar', stopNameHi: 'पुरानी बाजार', time: '07:20 AM', feePerMonth: 700 },
      { stopName: 'Sugar Mill Gate', stopNameHi: 'शुगर मिल गेट', time: '07:38 AM', feePerMonth: 650 },
      { stopName: 'College Campus Gate', stopNameHi: 'महाविद्यालय मुख्य द्वार', time: '07:55 AM', feePerMonth: 0 }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is the affiliation board of D.P. Inter College?',
    questionHi: 'डी. पी. इण्टर कॉलेज किस शिक्षा बोर्ड से सम्बद्ध है?',
    answer: 'D.P. Inter College is fully recognized and affiliated to Madhyamik Shiksha Parishad, Uttar Pradesh (UP Board, Prayagraj) with School Code UPB-1248.',
    answerHi: 'डी. पी. इण्टर कॉलेज माध्यमिक शिक्षा परिषद, उत्तर प्रदेश (यूपी बोर्ड, प्रयागराज) से विद्यालय कोड UPB-1248 के अंतर्गत पूर्णतः मान्यता प्राप्त है।',
    category: 'General'
  },
  {
    question: 'What documents are required for Class 9th and 11th admission?',
    questionHi: 'कक्षा 9वीं एवं 11वीं में प्रवेश हेतु कौन-कौन से दस्तावेज आवश्यक हैं?',
    answer: 'Requirements: 1) Previous class passed Marksheet copy, 2) Original Transfer Certificate (TC), 3) Character Certificate, 4) Aadhar Card copy, 5) 4 Passport size photos, 6) Caste/Income Certificate (for scholarships).',
    answerHi: 'आवश्यक दस्तावेज: 1) पूर्व कक्षा की अंकसूची छायाप्रति, 2) स्थानांतरण प्रमाणपत्र (TC मूल), 3) चरित्र प्रमाणपत्र, 4) आधार कार्ड, 5) 4 पासपोर्ट फोटो, 6) जाति/आय प्रमाणपत्र।',
    category: 'Admission'
  },
  {
    question: 'Are practical laboratories available for Science stream students?',
    questionHi: 'क्या विज्ञान वर्ग के छात्रों हेतु प्रयोगात्मक प्रयोगशालाएं उपलब्ध हैं?',
    answer: 'Yes! We have dedicated Physics, Chemistry, Biology, and Computer Science laboratories equipped with modern apparatus adhering strictly to UP Board practical syllabus.',
    answerHi: 'जी हाँ! हमारे पास भौतिकी, रसायन, जीव विज्ञान एवं कंप्यूटर साइंस हेतु पूर्णतः सुसज्जित एवं विशाल पृथक प्रयोगशालाएं उपलब्ध हैं।',
    category: 'Academics'
  },
  {
    question: 'How can students check their board / internal examination results online?',
    questionHi: 'छात्र अपना परीक्षा परिणाम ऑनलाइन कैसे देख सकते हैं?',
    answer: 'Students can visit the "Student Portal" tab on this website, select their class (10th or 12th), enter their Roll Number (e.g., 202601), and instantly view and print their detailed marksheet.',
    answerHi: 'छात्र वेबसाइट के "स्टूडेंट पोर्टल" टैब पर जाकर अपनी कक्षा चुनकर अपना अनुक्रमांक (उदा. 202601) दर्ज करके अंकपत्र देख व प्रिंट कर सकते हैं।',
    category: 'Student Portal'
  },
  {
    question: 'How to reach D.P. Inter College using Google Maps?',
    questionHi: 'गूगल मैप के माध्यम से डी. पी. इण्टर कॉलेज कैसे पहुंचें?',
    answer: 'You can click the "View on Google Maps" button in the Location section below or search "D.P. INTER COLLEGE" on Google Maps. Coordinates: 26.5828586, 82.5233497.',
    answerHi: 'आप नीचे "लोकेशन" सेक्शन में "गूगल मैप पर देखें" बटन पर क्लिक कर सकते हैं अथवा गूगल मैप पर "D.P. INTER COLLEGE" सर्च कर सकते हैं।',
    category: 'Location'
  }
];

export const DOWNLOAD_DOCS: DownloadDoc[] = [
  {
    id: 'd1',
    title: 'D.P. Inter College Official Prospectus 2026-27',
    titleHi: 'डी. पी. इण्टर कॉलेज आधिकारिक प्रॉस्पेक्टस 2026-27',
    fileSize: '2.8 MB',
    category: 'Prospectus',
    date: 'July 2026'
  },
  {
    id: 'd2',
    title: 'UP Board Class 10th & 12th Complete Syllabus 2026-27',
    titleHi: 'यूपी बोर्ड कक्षा 10वीं व 12वीं सम्पूर्ण पाठ्यक्रम',
    fileSize: '4.1 MB',
    category: 'Syllabus',
    date: 'June 2026'
  },
  {
    id: 'd3',
    title: 'Application Form for Transfer Certificate (TC) & Character Certificate',
    titleHi: 'टी. सी. एवं चरित्र प्रमाणपत्र हेतु आवेदन पत्र',
    fileSize: '450 KB',
    category: 'Forms',
    date: '2026'
  },
  {
    id: 'd4',
    title: 'State Scholarship & Fee Reimbursement Declaration Form',
    titleHi: 'छात्रवृत्ति एवं शुल्क प्रतिपूर्ति घोषणा पत्र',
    fileSize: '820 KB',
    category: 'Scholarship',
    date: '2026'
  },
  {
    id: 'd5',
    title: 'Model Test Papers for Class 10th & 12th Board Preparation',
    titleHi: 'कक्षा 10वीं व 12वीं बोर्ड परीक्षा मॉडल प्रश्न पत्र',
    fileSize: '5.2 MB',
    category: 'Exams',
    date: '2026'
  }
];
