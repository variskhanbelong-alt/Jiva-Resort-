import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ExternalLink, Compass, ArrowRight } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { ResilientImage } from '../components/ResilientImage';
import { SOHRA_ATTRACTIONS } from '../data/attractions';

const ATTRACTION_FILTERS = ['All (13)', 'Waterfall', 'Cave', 'Living Root Bridge', 'Park & Viewpoint'] as const;

export function AttractionsPage() {
  const [filter, setFilter] = useState<(typeof ATTRACTION_FILTERS)[number]>('All (13)');

  const filteredAttractions =
    filter === 'All (13)'
      ? SOHRA_ATTRACTIONS
      : SOHRA_ATTRACTIONS.filter((a) => a.category === filter);

  return (
    <>
      <PageSEO
        title="13 Nearby Tourist Attractions in Sohra | Jiva Resort Cherrapunjee"
        description="Explore waterfalls, caves, living root bridges, and parks near Jiva Resort Cherrapunjee: Seven Sisters Falls, Nohkalikai Falls, Mawsmai Cave, Wei Sawdong, Rainbow Falls, and more."
        keywords="Resort near Seven Sisters Falls, Cherrapunjee tourist attractions, Nohkalikai Falls resort, Sohra sightseeing guide"
      />

      <PageHeader
        kicker="Sohra Sightseeing Guide"
        title="Nearby Waterfalls, Limestone Caves &amp; Viewpoints"
        subtitle="Explore thirteen memorable Meghalaya landmarks reachable from Jiva Resort Cherrapunjee. Distances marked approximate should be verified with local road conditions on the day of travel."
        breadcrumbLabel="Nearby Tourist Attractions"
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl"
            role="group"
            aria-label="Filter tourist attractions"
          >
            {ATTRACTION_FILTERS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                  filter === tab
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAttractions.map((attraction) => (
              <article
                key={attraction.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <ResilientImage
                    src={attraction.image}
                    alt={attraction.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col space-y-3">
                  <p className="text-xs font-medium text-slate-500">
                    {attraction.category} <span aria-hidden="true">·</span> Visual Destination Guide
                  </p>

                  <h2 className="font-display text-xl font-bold text-slate-900">
                    {attraction.name}
                  </h2>

                  <p className="text-xs text-blue-800 bg-blue-50 rounded-lg px-3 py-2 flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-700" aria-hidden="true" />
                    <span>{attraction.approximateDistanceNote}</span>
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">{attraction.description}</p>

                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600 flex-1">
                    <p>
                      <strong className="text-slate-900">Why visit:</strong> {attraction.whyVisit}
                    </p>
                    <p>
                      <strong className="text-slate-900">Travel tips:</strong> {attraction.travelTips}
                    </p>
                  </div>

                  <div className="pt-3">
                    <a
                      href={attraction.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 hover:border-blue-700 bg-slate-50 hover:bg-blue-50 text-slate-900 hover:text-blue-800 text-sm font-semibold transition-colors"
                    >
                      <Compass className="w-4 h-4 text-blue-700" aria-hidden="true" />
                      <span>Google Maps Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold">
                Need Local Shuttle Assistance for Sightseeing?
              </h2>
              <p className="text-sm text-slate-300 mt-1.5 max-w-2xl">
                Our 24-hour front desk can guide you on local shuttle options, seasonal waterfall flow, and sunrise timing from Saitsohpen.
              </p>
            </div>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold whitespace-nowrap shrink-0"
            >
              <span>Plan Your Stay</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
