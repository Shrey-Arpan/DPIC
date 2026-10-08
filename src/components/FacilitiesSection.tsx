import React, { useState } from 'react';
import { 
  FlaskConical, 
  Laptop, 
  BookOpen, 
  Trophy, 
  Bus, 
  Tv, 
  CheckCircle2, 
  Clock, 
  Search,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { FACILITIES, TRANSPORT_ROUTES } from '../data/collegeData';
import { Language } from '../types';

interface FacilitiesSectionProps {
  lang: Language;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ lang }) => {
  const [selectedFacilityId, setSelectedFacilityId] = useState<string>('fac1');
  const [selectedRouteNo, setSelectedRouteNo] = useState<string>('Route 1');

  const activeFacility = FACILITIES.find((f) => f.id === selectedFacilityId) || FACILITIES[0];
  const activeRoute = TRANSPORT_ROUTES.find((r) => r.routeNo === selectedRouteNo) || TRANSPORT_ROUTES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-blue-900" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-blue-900" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-blue-900" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-blue-900" />;
      case 'Bus': return <Bus className="w-5 h-5 text-blue-900" />;
      default: return <Tv className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 font-bold text-xs px-3.5 py-1 rounded-full border border-blue-200 mb-3">
            <Trophy className="w-3.5 h-3.5 text-blue-800" />
            <span>{lang === 'hi' ? 'परिसर एवं संसाधन' : 'CAMPUS FACILITIES & INFRASTRUCTURE'}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif">
            {lang === 'hi' ? 'आधुनिक प्रयोगशालाएं व संसाधन' : 'State-of-the-Art Infrastructure & Transport'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {lang === 'hi'
              ? 'विद्यार्थियों के प्रयोगात्मक, तकनीकी व शारीरिक विकास हेतु सुसज्जित परिसर'
              : 'Empowering practical scientific inquiry, ICT skills, central library and sports excellence'}
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Facilities Grid Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {FACILITIES.map((fac) => {
            const isSelected = fac.id === selectedFacilityId;
            return (
              <button
                key={fac.id}
                onClick={() => setSelectedFacilityId(fac.id)}
                className={`p-3.5 rounded-2xl border text-center flex flex-col items-center justify-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-blue-900 text-white border-blue-800 shadow-md ring-2 ring-red-600'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                }`}
              >
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-white text-blue-900' : 'bg-blue-50'}`}>
                  {getIcon(fac.iconName)}
                </div>
                <span className="text-xs font-bold leading-tight">
                  {lang === 'hi' ? fac.titleHi.split(' ')[0] : fac.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Facility Detail Showcase */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-red-700 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
              CAMPUS HIGHLIGHT
            </span>
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              {lang === 'hi' ? activeFacility.titleHi : activeFacility.title}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {lang === 'hi' ? activeFacility.descriptionHi : activeFacility.description}
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {lang === 'hi' ? 'प्रमुख विशेषताएं:' : 'Key Infrastructure Features:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeFacility.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src={activeFacility.image}
              alt={activeFacility.title}
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xs border-2 border-slate-200"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Transport Routes Interactive Finder */}
        <div className="bg-blue-900 text-white rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-800 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-blue-900 flex items-center justify-center font-bold">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white">
                  {lang === 'hi' ? 'कॉलेज बस परिवहन एवं रूट समय-सारणी' : 'College Bus Transport & Route Schedule'}
                </h3>
                <p className="text-xs text-blue-200">
                  {lang === 'hi' ? 'आस-पास के सभी क्षेत्रों हेतु सुरक्षित जीपीएस युक्त बस सेवा' : 'GPS tracked safe transport fleet covering rural & urban stoppage points'}
                </p>
              </div>
            </div>

            {/* Route selector buttons */}
            <div className="flex items-center gap-2">
              {TRANSPORT_ROUTES.map((route) => (
                <button
                  key={route.routeNo}
                  onClick={() => setSelectedRouteNo(route.routeNo)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedRouteNo === route.routeNo
                      ? 'bg-white text-blue-900 shadow-xs'
                      : 'bg-blue-800 text-blue-100 hover:bg-blue-700'
                  }`}
                >
                  {route.routeNo}
                </button>
              ))}
            </div>
          </div>

          {/* Active Route Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 bg-blue-950/80 p-4 rounded-2xl border border-blue-800 space-y-3 text-xs">
              <p><span className="text-blue-300 font-semibold">Bus No:</span> <strong className="font-mono text-white">{activeRoute.busNumber}</strong></p>
              <p><span className="text-blue-300 font-semibold">Route Name:</span> {lang === 'hi' ? activeRoute.routeNameHi : activeRoute.routeName}</p>
              <p><span className="text-blue-300 font-semibold">In-charge Driver:</span> {activeRoute.driverName}</p>
              <p className="text-[11px] text-blue-200 pt-2 border-t border-blue-800">
                * Bus monthly fee varies from ₹600 - ₹750 depending on stoppage distance.
              </p>
            </div>

            {/* Stoppage Timetable */}
            <div className="md:col-span-8 overflow-x-auto rounded-xl border border-blue-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-blue-950/90 text-blue-200 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="py-2.5 px-3">Bus Stop Name</th>
                    <th className="py-2.5 px-3">Pickup Time</th>
                    <th className="py-2.5 px-3 text-right">Monthly Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-800">
                  {activeRoute.stops.map((stop, idx) => (
                    <tr key={idx} className="hover:bg-blue-800/50">
                      <td className="py-2.5 px-3 font-bold text-white flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-400" />
                        <span>{lang === 'hi' ? stop.stopNameHi : stop.stopName}</span>
                      </td>
                      <td className="py-2.5 px-3 font-mono text-blue-200">
                        <Clock className="w-3 h-3 inline mr-1 text-blue-300" />
                        {stop.time}
                      </td>
                      <td className="py-2.5 px-3 font-bold font-mono text-white text-right">
                        {stop.feePerMonth > 0 ? `₹${stop.feePerMonth}/mo` : 'Arrival'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
