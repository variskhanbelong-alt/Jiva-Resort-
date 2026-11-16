import { Link } from 'react-router-dom';
import { Coffee, Utensils, ConciergeBell, Flame, Bell, Soup, ArrowRight } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { ResilientImage } from '../components/ResilientImage';
import { RESORT_INFO } from '../data/resort';

const DINING_OFFERINGS = [
  {
    icon: Coffee,
    title: 'Complimentary Breakfast & Breakfast Buffet',
    description:
      'Start your morning in Sohra with complimentary breakfast included across all room categories, featuring fresh buffet selections before you head out to the waterfalls.',
  },
  {
    icon: Utensils,
    title: 'On-Site Restaurant & Sit-Down Table Service',
    description:
      'Relax in our main dining room with attentive table service designed for families, couples, and groups seeking unhurried meals.',
  },
  {
    icon: Soup,
    title: 'Lunch & Full-Board Suite Dining',
    description:
      'AC Double and AC Family rooms include breakfast and lunch, while AC Suites and AC Suites Loft cottages include breakfast, lunch, and dinner.',
  },
  {
    icon: Flame,
    title: 'Buffet Dinner',
    description:
      'Return from Sohra’s caves and canyon walks to warm evening buffet dinners served in a cosy hillside dining setting.',
  },
  {
    icon: Bell,
    title: 'In-Room Service',
    description:
      'Prefer a quiet meal inside your room or private cottage? Room service brings warm dishes and beverages directly to your door.',
  },
  {
    icon: ConciergeBell,
    title: 'Special Dietary Notes',
    description:
      'Let our team know ahead of arrival if you have vegetarian preferences, family child-meal needs, or group dining timings.',
  },
];

export function DiningPage() {
  return (
    <>
      <PageSEO
        title="Restaurant & Dining | Jiva Resort Cherrapunjee, Sohra"
        description="Discover on-site dining at Jiva Resort Cherrapunjee: complimentary breakfast buffet, sit-down table service, buffet dinner, and room service in Sohra."
        keywords="Jiva Resort Cherrapunjee restaurant, Dining in Sohra, Cherrapunjee resort food"
      />

      <PageHeader
        kicker="Restaurant & Dining"
        title="Warm Highland Meals Served with Valley Views"
        subtitle="Enjoy complimentary morning breakfast, comforting buffet dinners, attentive table service, and convenient room service right inside the resort."
        breadcrumbLabel="Restaurant & Dining"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-slate-200 min-h-[260px]">
              <ResilientImage
                src={RESORT_INFO.diningImage}
                alt="Restaurant dining area overlooking green Sohra hills at Jiva Resort Cherrapunjee"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-center space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                From Morning Breakfast Buffets to Evening Dinners
              </h2>
              <p className="text-slate-600 leading-relaxed">
                After crisp highland mornings or full-day excursions to Nohkalikai and Nongriat, nothing brings guests together like warm, freshly prepared food. Our restaurant welcomes guests for breakfast, lunch, and dinner with comfortable table seating and courteous service.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Meal inclusions vary by room category — please review your chosen room details or confirm meal plans with our reservation desk at booking.
              </p>
              <div className="pt-2">
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
                >
                  <span>Enquire About Stays &amp; Meal Plans</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DINING_OFFERINGS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
