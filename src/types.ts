export type Language = 'en' | 'hi';

export interface Notice {
  id: string;
  title: string;
  titleHi: string;
  category: 'academic' | 'exam' | 'admission' | 'event' | 'board';
  date: string;
  isUrgent?: boolean;
  content: string;
  contentHi: string;
  attachmentName?: string;
}

export interface Subject {
  code: string;
  name: string;
  nameHi: string;
  isPractical?: boolean;
  marks: number;
}

export interface Stream {
  id: string;
  name: string;
  nameHi: string;
  classRange: string;
  description: string;
  descriptionHi: string;
  subjects: Subject[];
  annualFee: number;
  seats: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  nameHi: string;
  designation: string;
  designationHi: string;
  department: string;
  qualification: string;
  experience: string;
  image: string;
  email?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleHi: string;
  category: 'campus' | 'labs' | 'sports' | 'events' | 'cultural';
  imageUrl: string;
  date: string;
}

export interface SubjectMark {
  subject: string;
  subjectHi: string;
  maxMarks: number;
  obtainedTheory: number;
  obtainedPractical?: number;
  grade: string;
}

export interface StudentResult {
  rollNo: string;
  studentName: string;
  studentNameHi: string;
  fatherName: string;
  motherName: string;
  className: '10th' | '12th';
  stream?: string;
  academicYear: string;
  dob: string;
  schoolCode: string;
  subjects: SubjectMark[];
  totalMarks: number;
  obtainedMarks: number;
  percentage: number;
  resultStatus: 'PASSED (FIRST DIVISION)' | 'PASSED (DISTINCTION)' | 'PASSED (SECOND DIVISION)';
}

export interface TransportRoute {
  routeNo: string;
  routeName: string;
  routeNameHi: string;
  busNumber: string;
  driverName: string;
  contactNumber: string;
  stops: { stopName: string; stopNameHi: string; time: string; feePerMonth: number }[];
}

export interface Facility {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  iconName: string;
  image: string;
  highlights: string[];
}

export interface FAQItem {
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
  category: string;
}

export interface DownloadDoc {
  id: string;
  title: string;
  titleHi: string;
  fileSize: string;
  category: string;
  date: string;
}
