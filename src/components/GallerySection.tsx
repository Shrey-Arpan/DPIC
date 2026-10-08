import React, { useState } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY } from '../data/collegeData';
import { Language, GalleryItem } from '../types';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos', labelHi: 'सभी चित्र' },
    { id: 'campus', label: 'Campus', labelHi: 'परिसर' },
    { id: 'labs', label: 'Laboratories', labelHi: 'प्रयोगशालाएं' },
    { id: 'sports', label: 'Sports Meet', labelHi: 'खेलकूद' },
    { id: 'cultural', label: 'Cultural & Republic Day', labelHi: 'सांस्कृतिक कार्यक्रम' },
    { id: 'events', label: 'Exhibitions', labelHi: 'प्रदर्शनी व कार्यक्रम' },
  ];

  const filteredGallery = GALLERY.filter((g) => activeCategory === 'all' || g.category === activeCategory);

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 font-bold text-xs px-3.5 py-1 rounded-full border border-blue-200 mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-blue-800" />
            <span>{lang === 'hi' ? 'चित्र दीर्घा' : 'COLLEGE PHOTO GALLERY'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'कैंपस गतिविधियों की झलकियां' : 'Glimpses of Campus Life & Events'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {lang === 'hi'
              ? 'खेलकूद, विज्ञान प्रदर्शनी, स्वतंत्रता दिवस, एनसीसी व सांस्कृतिक आयोजनों के चित्र'
              : 'Visual moments capturing academic practicals, sports championships & annual functions'}
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {lang === 'hi' ? cat.labelHi : cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative h-60 rounded-2xl overflow-hidden cursor-pointer shadow-xs border border-slate-200"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">
                  {item.category} • {item.date}
                </span>
                <h3 className="text-xs font-bold font-serif line-clamp-2 mt-0.5">
                  {lang === 'hi' ? item.titleHi : item.title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 bg-slate-950/60 p-1.5 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-slate-900 text-white border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                className="w-full max-h-[70vh] object-contain bg-slate-950"
                referrerPolicy="no-referrer"
              />

              <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-900 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase">
                    {lightboxItem.category}
                  </span>
                  <span className="text-xs text-slate-400">{lightboxItem.date}</span>
                </div>
                <h3 className="text-lg font-bold font-serif text-white">
                  {lang === 'hi' ? lightboxItem.titleHi : lightboxItem.title}
                </h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
