import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowRight } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { AmenityIcon } from '../components/AmenityIcon';
import { RESORT_AMENITIES } from '../data/amenities';

const CATEGORIES = [
  'All',
  'Dining & Culinary',
  'Recreation & Wellness',
  'Guest Services',
  'Room & Bath Notes',
] as const;

export function AmenitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>('All');

  const visibleAmenities =
    selectedCategory === 'All'
      ? RESORT_AMENITIES
      : RESORT_AMENITIES.filter((a) => a.category === selectedCategory);

  return (
    <>
      <PageSEO
        title="Amenities & Facilities | Jiva Resort Cherrapunjee, Sohra"
        description="Explore all 26 resort amenities at Jiva Resort Cherrapunjee: swimming pool, spa, hot tub, restaurant, golf proximity, fitness centre, free Wi-Fi, free parking, and 24-hour front desk."
        keywords="Jiva Resort Cherrapunjee amenities, Cherrapunjee resort with swimming pool, Sohra family resort facilities"
      />

      <PageHeader
        kicker="Facilities & Services"
        title="Resort Amenities Designed for Comfort in Sohra"
        subtitle="From complimentary breakfast, swimming pool, spa, and hot tub to 24-hour front desk assistance, free parking, and child-friendly and pet-friendly hospitality."
        breadcrumbLabel="Amenities & Facilities"
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl"
            role="group"
            aria-label="Filter resort amenities"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleAmenities.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <AmenityIcon iconKey={amenity.iconKey} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">{amenity.category}</span>
                </div>
                <h2 className="font-display text-lg font-bold text-slate-900">{amenity.name}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="font-display text-base font-bold text-slate-900">
                  Category-Specific Room Features
                </h2>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                  Certain in-room features — such as Air Conditioning (available in AC categories while Non-AC Rooms use ceiling fans) or private Bathtubs (highlighted in select rooms like the AC Suites Loft Room) — vary by selected room category. Please verify with our desk before booking.
                </p>
              </div>
            </div>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold whitespace-nowrap shrink-0"
            >
              <span>Compare Room Categories</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
