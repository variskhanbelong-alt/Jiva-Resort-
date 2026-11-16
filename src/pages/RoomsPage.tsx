import { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Info, ArrowRight } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { RoomCard } from '../components/RoomCard';
import { ROOM_CATEGORIES } from '../data/rooms';
import { RESORT_INFO } from '../data/resort';

export function RoomsPage() {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState<'all' | 'rooms' | 'suites'>('all');

  const checkIn = searchParams.get('checkIn') || undefined;
  const checkOut = searchParams.get('checkOut') || undefined;
  const adults = searchParams.get('adults') ? Number(searchParams.get('adults')) : undefined;
  const children = searchParams.get('children') ? Number(searchParams.get('children')) : undefined;

  const filteredRooms = useMemo(() => {
    if (filter === 'rooms') {
      return ROOM_CATEGORIES.filter((r) => !r.id.includes('suites'));
    }
    if (filter === 'suites') {
      return ROOM_CATEGORIES.filter((r) => r.id.includes('suites'));
    }
    return ROOM_CATEGORIES;
  }, [filter]);

  return (
    <>
      <PageSEO
        title="Rooms & Suites in Cherrapunjee | Jiva Resort Sohra"
        description="Explore 6 room categories at Jiva Resort Cherrapunjee: Non-AC Room, AC Deluxe, AC Double, AC Family, AC Suites, and AC Suites Loft Room with direct WhatsApp enquiry."
        keywords="Rooms in Cherrapunjee, Accommodation in Sohra, Jiva Resort Cherrapunjee room rates, Hotels in Cherrapunjee"
      />

      <PageHeader
        kicker="Accommodation in Sohra"
        title="Rooms, Family Stays &amp; Private Cottage Suites"
        subtitle="Browse all six room categories at Jiva Resort Cherrapunjee. Tariffs displayed are indicative per night and subject to confirmation and applicable taxes by the resort."
        breadcrumbLabel="Rooms & Suites"
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {(checkIn || checkOut) && (
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-sm text-blue-950">
                Showing rooms for your selected enquiry dates:{' '}
                <strong>{checkIn || 'Flexible'}</strong> to <strong>{checkOut || 'Flexible'}</strong>
                {typeof adults === 'number' && ` · ${adults} Adults`}
                {typeof children === 'number' && children > 0 && `, ${children} Children`}
              </p>
              <Link
                to={`/booking?${searchParams.toString()}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap"
              >
                <span>Open Full Enquiry Form</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl self-start" role="group" aria-label="Filter room categories">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`min-h-[40px] px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                  filter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Categories (6)
              </button>
              <button
                type="button"
                onClick={() => setFilter('rooms')}
                className={`min-h-[40px] px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                  filter === 'rooms' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Rooms (4)
              </button>
              <button
                type="button"
                onClick={() => setFilter('suites')}
                className={`min-h-[40px] px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                  filter === 'suites' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cottage Suites (2)
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Check-in {RESORT_INFO.checkInTime} <span aria-hidden="true">·</span> Check-out {RESORT_INFO.checkOutTime}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                checkIn={checkIn}
                checkOut={checkOut}
                adults={adults}
                children={children}
              />
            ))}
          </div>

          {/* Reservation Guidelines Notice */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="font-display text-lg font-bold text-slate-900 mb-2">
                  Important Tariff &amp; Reservation Notes
                </h2>
                <ul className="space-y-1.5 text-sm text-slate-600 list-disc pl-5">
                  {RESORT_INFO.reservationGuidelines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
