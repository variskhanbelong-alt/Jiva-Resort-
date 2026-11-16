import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  MessageCircle,
  Check,
  CalendarCheck,
  Phone,
  Info,
} from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { ResilientImage } from '../components/ResilientImage';
import { getRoomBySlug, ROOM_CATEGORIES } from '../data/rooms';
import { RESORT_INFO } from '../data/resort';
import { buildQuickRoomWhatsAppUrl } from '../utils/booking';

export function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const room = getRoomBySlug(slug);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  if (!room) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <PageSEO
          title="Room Category Not Found | Jiva Resort Cherrapunjee"
          description="Explore our available room categories at Jiva Resort Cherrapunjee in Sohra, Meghalaya."
        />
        <h1 className="font-display text-3xl font-bold text-slate-900 mb-3">
          Room Category Not Found
        </h1>
        <p className="text-slate-600 mb-6">
          Please explore all six verified room categories available at Jiva Resort Cherrapunjee.
        </p>
        <Link
          to="/rooms"
          className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-semibold"
        >
          Browse All Rooms
        </Link>
      </section>
    );
  }

  const activeImg = room.images[selectedImageIdx] || room.images[0];
  const whatsappUrl = buildQuickRoomWhatsAppUrl(room.name);
  const otherRooms = ROOM_CATEGORIES.filter((r) => r.slug !== room.slug).slice(0, 3);

  return (
    <>
      <PageSEO
        title={`${room.name} | Jiva Resort Cherrapunjee, Sohra`}
        description={`${room.name} at Jiva Resort Cherrapunjee (${room.tariffDisplay} ${room.taxLabel}). ${room.shortSummary}`}
        keywords={`${room.name} Cherrapunjee, Jiva Resort Cherrapunjee rooms, Accommodation in Sohra`}
      />

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All Rooms &amp; Suites</span>
          </Link>

          <p className="text-xs font-semibold text-blue-700 tracking-wide mb-1.5">
            {room.occupancyNote} <span aria-hidden="true">·</span> {room.mealInclusion}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {room.name}
          </h1>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Gallery Column */}
            <div className="lg:col-span-7 space-y-3">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200">
                <ResilientImage
                  src={activeImg.src}
                  alt={activeImg.alt}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {room.images.map((img, idx) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setSelectedImageIdx(idx)}
                    aria-label={`View photo ${idx + 1} of ${room.name}`}
                    className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                      idx === selectedImageIdx
                        ? 'border-blue-700 ring-2 ring-blue-700/20'
                        : 'border-slate-200 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <ResilientImage
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details & Booking Action Column */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-xs font-medium text-slate-500">Indicative Tariff</p>
                <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                  <span className="font-display text-3xl font-bold text-slate-900 tabular-nums">
                    {room.tariffDisplay}
                  </span>
                  <span className="text-sm text-slate-600">{room.taxLabel}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Tariff is indicative and subject to final confirmation by Jiva Resort Cherrapunjee.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h2 className="font-display text-lg font-bold text-slate-900 mb-2">
                  Room Overview
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{room.description}</p>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h2 className="font-display text-lg font-bold text-slate-900 mb-3">
                  Verified Category Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {room.verifiedFeatures.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-5 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Book This Room on WhatsApp</span>
                </a>

                <Link
                  to={`/booking?room=${encodeURIComponent(room.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-semibold transition-colors"
                >
                  <CalendarCheck className="w-4 h-4 text-blue-700" aria-hidden="true" />
                  <span>Customise Dates in Enquiry Form</span>
                </Link>

                <a
                  href={RESORT_INFO.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Or Call Reservation Desk: {RESORT_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-800">Reservation Guidelines</p>
                  <p className="mt-1">
                    Check-in: {RESORT_INFO.checkInTime} · Check-out: {RESORT_INFO.checkOutTime}. Booking is confirmed only upon advance payment; same-day availability cannot be guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Categories */}
          <div className="pt-8 border-t border-slate-200">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
              Explore Other Room Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherRooms.map((other) => (
                <Link
                  key={other.id}
                  to={`/rooms/${other.slug}`}
                  onClick={() => setSelectedImageIdx(0)}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] bg-slate-100">
                    <ResilientImage
                      src={other.images[0].src}
                      alt={other.images[0].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500">{other.occupancyNote}</p>
                    <h3 className="font-display text-base font-bold text-slate-900 mt-0.5">
                      {other.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-700 mt-1 tabular-nums">
                      {other.tariffDisplay} <span className="text-xs font-normal text-slate-500">{other.taxLabel}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
