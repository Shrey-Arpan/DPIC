import React, { useState } from 'react';
import { Header } from './components/Header';
import { NoticeTicker } from './components/NoticeTicker';
import { HeroSection } from './components/HeroSection';
import { PrincipalMessage } from './components/PrincipalMessage';
import { AcademicsSection } from './components/AcademicsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { NoticeBoard } from './components/NoticeBoard';
import { StudentPortal } from './components/StudentPortal';
import { FacilitiesSection } from './components/FacilitiesSection';
import { FacultySection } from './components/FacultySection';
import { GallerySection } from './components/GallerySection';
import { DownloadsSection } from './components/DownloadsSection';
import { LocationAndContact } from './components/LocationAndContact';
import { NoticeModal } from './components/NoticeModal';
import { Footer } from './components/Footer';

import { Language, Notice } from './types';
import { NOTICES } from './data/collegeData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [lang, setLang] = useState<Language>('en');
  const [activeNoticeModal, setActiveNoticeModal] = useState<Notice | null>(null);
  const [preselectedStream, setPreselectedStream] = useState<string | undefined>(undefined);

  const urgentNotices = NOTICES.filter((n) => n.isUrgent);

  const handleApplyStream = (streamId: string) => {
    setPreselectedStream(streamId);
    setCurrentTab('admissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <>
            <HeroSection lang={lang} onNavigate={setCurrentTab} />
            <NoticeTicker
              lang={lang}
              onSelectNotice={setActiveNoticeModal}
              onOpenAllNotices={() => setCurrentTab('notices')}
            />
            <PrincipalMessage lang={lang} />
            <AcademicsSection lang={lang} onApplyForStream={handleApplyStream} />
            <FacilitiesSection lang={lang} />
            <LocationAndContact lang={lang} />
          </>
        );

      case 'about':
        return (
          <>
            <PrincipalMessage lang={lang} />
            <FacultySection lang={lang} />
          </>
        );

      case 'academics':
        return (
          <AcademicsSection lang={lang} onApplyForStream={handleApplyStream} />
        );

      case 'admissions':
        return (
          <AdmissionsSection lang={lang} preselectedStreamId={preselectedStream} />
        );

      case 'notices':
        return (
          <NoticeBoard lang={lang} onSelectNotice={setActiveNoticeModal} />
        );

      case 'results':
        return (
          <StudentPortal lang={lang} />
        );

      case 'facilities':
        return (
          <FacilitiesSection lang={lang} />
        );

      case 'faculty':
        return (
          <FacultySection lang={lang} />
        );

      case 'gallery':
        return (
          <GallerySection lang={lang} />
        );

      case 'downloads':
        return (
          <DownloadsSection lang={lang} />
        );

      case 'contact':
        return (
          <LocationAndContact lang={lang} />
        );

      default:
        return (
          <HeroSection lang={lang} onNavigate={setCurrentTab} />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-amber-300 selection:text-slate-950 flex flex-col justify-between">
      <div>
        <Header
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          lang={lang}
          setLang={setLang}
          urgentNoticeCount={urgentNotices.length}
          onOpenUrgentNotices={() => {
            if (urgentNotices.length > 0) setActiveNoticeModal(urgentNotices[0]);
          }}
        />

        {currentTab !== 'home' && (
          <NoticeTicker
            lang={lang}
            onSelectNotice={setActiveNoticeModal}
            onOpenAllNotices={() => setCurrentTab('notices')}
          />
        )}

        <main>{renderTabContent()}</main>
      </div>

      <Footer lang={lang} onNavigate={setCurrentTab} />

      {/* Notice Detail Modal */}
      <NoticeModal
        notice={activeNoticeModal}
        onClose={() => setActiveNoticeModal(null)}
        lang={lang}
      />
    </div>
  );
}
