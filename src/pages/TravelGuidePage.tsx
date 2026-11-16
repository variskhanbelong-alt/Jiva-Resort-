import { Link } from 'react-router-dom';
import { Car, CloudRain, Compass, Backpack, ArrowRight } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { RESORT_INFO } from '../data/resort';

const GUIDE_CARDS = [
  {
    icon: Car,
    title: 'Reaching Saitsohpen, Sohra',
    points: [
      'Jiva Resort Cherrapunjee is located in Saitsohpen, Sohra, approximately 2 km off State Highway 5.',
      'Guests typically travel via Shillong (Meghalaya’s capital) or Guwahati (nearest major railhead and airport hub), hiring private cabs or regional tourist vehicles along the scenic highland highway.',
      'Free on-site parking is available at the resort for guests travelling in personal or hired cars.',
    ],
  },
  {
    icon: CloudRain,
    title: 'Seasons & Weather in Cherrapunjee',
    points: [
      'Monsoon (June–September): Lush emerald cliffs and peak waterfall power, accompanied by heavy rainfall and shifting valley mist.',
      'Post-Monsoon & Winter (October–February): Crisp skies, clear canyon views across Nohkalikai and Seven Sisters Falls, and cool evenings requiring warm layers.',
      'Spring & Pre-Monsoon (March–May): Pleasant daytime warmth with refreshing mountain breezes and blooming plateau flora.',
    ],
  },
  {
    icon: Backpack,
    title: 'What to Pack for Sohra',
    points: [
      'Non-slip walking or trekking shoes — essential for damp stone cave paths and stepped waterfall trails.',
      'Lightweight waterproof jacket or umbrella regardless of season, as mountain showers can arrive unexpectedly.',
      'Layered woollens or fleece for crisp early mornings and evenings, plus a compact daypack for Nongriat hikes.',
    ],
  },
  {
    icon: Compass,
    title: 'Local Etiquette & Responsible Travel',
    points: [
      'Respect Khasi village norms, sacred forest groves, and posted viewpoint barriers along cliff edges.',
      'Keep waterfalls, caves, and root bridge trails completely litter-free; carry reusable water bottles.',
      'Start early for full-day treks like Double Decker Living Root Bridge and Rainbow Falls to return comfortably before dusk.',
    ],
  },
];

export function TravelGuidePage() {
  return (
    <>
      <PageSEO
        title="Travel Guide to Sohra (Cherrapunjee) | Jiva Resort Cherrapunjee"
        description="Practical travel guide to Sohra, Meghalaya: reaching Jiva Resort Cherrapunjee near State Highway 5, seasonal weather, packing essentials, and local travel tips."
        keywords="Travel guide to Sohra, How to reach Cherrapunjee, Jiva Resort Sohra location"
      />

      <PageHeader
        kicker="Visitor Planning"
        title="Travel Guide to Sohra, Meghalaya"
        subtitle="Practical tips for reaching Saitsohpen near State Highway 5, packing for highland weather, and timing your waterfall and cave visits."
        breadcrumbLabel="Travel Guide to Sohra"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUIDE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h2 className="font-display text-xl font-bold text-slate-900">{card.title}</h2>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed list-disc pl-5">
                    {card.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-lg font-bold text-slate-900">
                Resort Location Reference
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {RESORT_INFO.addressLine} — approx. 1-min walk from Sohra Golf Range, ~2 km from State Highway 5.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={RESORT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-semibold"
              >
                Open Google Maps
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
