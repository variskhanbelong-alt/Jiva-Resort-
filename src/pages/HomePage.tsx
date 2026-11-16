import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Users,
  ExternalLink,
  Star,
} from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { ResilientImage } from '../components/ResilientImage';
import { RoomCard } from '../components/RoomCard';
import { AmenityIcon } from '../components/AmenityIcon';
import { RESORT_INFO } from '../data/resort';
import { ROOM_CATEGORIES } from '../data/rooms';
import { RESORT_AMENITIES } from '../data/amenities';
import { SOHRA_ATTRACTIONS } from '../data/attractions';
import { buildBookingWhatsAppUrl, getDefaultDates } from '../utils/booking';

const FEATURED_AMENITIES = RESORT_AMENITIES.filter((a) =>
  [
    'complimentary-breakfast',
    'free-wifi',
    'swimming-pool',
    'restaurant',
    'golf',
    'spa',
    'free-parking',
    'front-desk',
  ].includes(a.id)
);

const FEATURED_ATTRACTIONS = SOHRA_ATTRACTIONS.slice(0, 4);

export function HomePage() {
  const navigate = useNavigate();
  const defaults = getDefaultDates();

  const [checkIn, setCheckIn] = useState(defaults.checkIn);
  const [checkOut, setCheckOut] = useState(defaults.checkOut);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleExploreRooms = () => {
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: String(adults),
      children: String(children),
    });
    navigate(`/rooms?${params.toString()}`);
  };

  const quickWhatsAppUrl = buildBookingWhatsAppUrl({
    guestName: 'Guest Enquiry',
    mobileNumber: 'Provided on WhatsApp',
    checkIn,
    checkOut,
    adults,
    children,
    roomCategory: 'Best Available Room Category',
    roomsCount: 1,
  });

  return (
    <>
      <PageSEO
        title="Jiva Resort Cherrapunjee | 3-Star Hill Resort in Sohra, Meghalaya"
        description="Experience Jiva Resort Cherrapunjee in Saitsohpen, Sohra, Meghalaya. Explore rooms & suites, resort dining, swimming pool, and nearby Sohra attractions."
        keywords="Jiva Resort Cherrapunjee, Jiva Resort Sohra, Resort in Cherrapunjee, Hotels in Cherrapunjee, Resorts in Sohra Meghalaya"
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={RESORT_INFO.heroImage}
            alt="Jiva Resort Cherrapunjee surrounded by misty green hills of Sohra, Meghalaya"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-slate-950/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-18 sm:pb-16 lg:pt-22 lg:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-medium text-blue-200 tracking-wide mb-3">
              {RESORT_INFO.category} <span aria-hidden="true">·</span> Saitsohpen, Sohra, Meghalaya{' '}
              <span aria-hidden="true">·</span> {RESORT_INFO.ratingValue}/{RESORT_INFO.ratingScale} ({RESORT_INFO.reviewSummary})
            </p>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance leading-[1.1]">
              Peaceful Hill Stays in the Green Valleys of Sohra
            </h1>

            <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Jiva Resort Cherrapunjee is a relaxing hill resort surrounded by the lush green hills of Sohra — approximately a 1-minute walk from Sohra Golf Range, around 2 km from State Highway 5, and around 3 km from Seven Sisters Falls.
            </p>
          </div>

          {/* Interactive Booking Enquiry Selector Bar */}
          <div className="mt-6 sm:mt-10 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xl shadow-slate-950/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-3.5 items-end">
              <div className="lg:col-span-2">
                <label htmlFor="hero-checkin" className="block text-xs font-semibold text-slate-700 mb-1.5 whitespace-nowrap">
                  Check-in (2:00 PM)
                </label>
                <input
                  id="hero-checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="hero-checkout" className="block text-xs font-semibold text-slate-700 mb-1.5 whitespace-nowrap">
                  Check-out (12:00 PM)
                </label>
                <input
                  id="hero-checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5 lg:col-span-4">
                <div>
                  <label htmlFor="hero-adults" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Adults
                  </label>
                  <select
                    id="hero-adults"
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="hero-children" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Children
                  </label>
                  <select
                    id="hero-children"
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleExploreRooms}
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <span>Explore Rooms</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>

                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Highlights Strip */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-xs font-medium text-slate-500">Sohra Golf Range</p>
              <p className="font-display text-lg font-bold text-slate-900 mt-0.5">
                Approx. 1-Min Walk
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Seven Sisters Falls</p>
              <p className="font-display text-lg font-bold text-slate-900 mt-0.5 tabular-nums">
                Approx. 3 km
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">State Highway 5</p>
              <p className="font-display text-lg font-bold text-slate-900 mt-0.5 tabular-nums">
                Approx. 2 km
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Guest Rating Summary</p>
              <p className="font-display text-lg font-bold text-slate-900 mt-0.5 flex items-center gap-1.5 tabular-nums">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
                <span>
                  {RESORT_INFO.ratingValue}/5 · ~7.2K reviews
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Suites Preview */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold text-blue-700 tracking-wide mb-2">
                Accommodation in Sohra
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Rooms &amp; Private Cottages
              </h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Six accommodation categories from comfortable highland rooms to private loft cottages. All tariffs shown are indicative and subject to confirmation by the resort.
              </p>
            </div>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap"
            >
              <span>Compare All 6 Categories</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROOM_CATEGORIES.map((room) => (
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
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-14 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold text-blue-700 tracking-wide mb-2">
                Resort Comfort &amp; Leisure
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Thoughtful Facilities for Every Stay
              </h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                From complimentary breakfast and sit-down dining to our swimming pool, spa, hot tub, games room, and 24-hour front desk support.
              </p>
            </div>
            <Link
              to="/amenities"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap"
            >
              <span>View All 26 Amenities</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_AMENITIES.map((amenity) => (
              <div
                key={amenity.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <AmenityIcon iconKey={amenity.iconKey} className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900">{amenity.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Experience Split Section */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-slate-200 min-h-[280px]">
              <ResilientImage
                src={RESORT_INFO.poolImage}
                alt="Outdoor swimming pool overlooking green hills at Jiva Resort Cherrapunjee"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 flex flex-col justify-center">
              <p className="text-xs font-semibold text-blue-700 tracking-wide mb-2">
                Our Sohra Experience
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
                Unhurried Mornings, Warm Khasi Hospitality &amp; Family Holidays
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Wake up to cool highland mist drifting across Saitsohpen, stroll a minute over to the Sohra Golf Range, enjoy a hearty breakfast buffet, and return in the evening to warm table service, the games room, or a quiet soak after visiting Cherrapunjee’s canyons and caves.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/experiences"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
                >
                  <span>Explore Resort Experiences</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/story"
                  className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-800 text-sm font-semibold transition-colors"
                >
                  Read Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Tourist Attractions Preview */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold text-blue-700 tracking-wide mb-2">
                Explore Cherrapunjee
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Waterfalls, Limestone Caves &amp; Viewpoints
              </h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Use Jiva Resort Cherrapunjee as your tranquil home base to visit Sohra’s famous natural landmarks, from Seven Sisters Falls to Nongriat’s living root bridges.
              </p>
            </div>
            <Link
              to="/attractions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap"
            >
              <span>See All 13 Attractions</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_ATTRACTIONS.map((item) => (
              <article
                key={item.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                  <ResilientImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs font-medium text-slate-500 mb-1">{item.category}</p>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800"
                  >
                    <span>Directions on Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Direct Contact Section */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold text-blue-700 tracking-wide mb-2">
                Plan Your Visit
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Direct Resort Desk &amp; Sohra Location
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Reach our team directly by WhatsApp, phone, or email for room availability, family bookings, local shuttle assistance, and group itineraries. Check-in is at {RESORT_INFO.checkInTime} and check-out is at {RESORT_INFO.checkOutTime}.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p className="text-slate-600">{RESORT_INFO.addressLine}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900">Timings</p>
                    <p className="text-slate-600">
                      Check-in {RESORT_INFO.checkInTime} · Check-out {RESORT_INFO.checkOutTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={RESORT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp: {RESORT_INFO.whatsappDisplay}</span>
              </a>

              <a
                href={RESORT_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call: {RESORT_INFO.phoneDisplay}</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={RESORT_INFO.emailHref}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-700" aria-hidden="true" />
                  <span>Email Desk</span>
                </a>
                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-blue-700" aria-hidden="true" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
