import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Waves, Compass, Users } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { ResilientImage } from '../components/ResilientImage';
import { RESORT_INFO } from '../data/resort';

const EXPERIENCES = [
  {
    icon: Sun,
    title: 'Morning Walks by Sohra Golf Range',
    description:
      'Step outside the resort for a refreshing one-minute stroll to the neighbouring Sohra Golf Range, where early morning clouds drift gently across open highland fairways.',
  },
  {
    icon: Waves,
    title: 'Poolside Relaxation & Spa Unwind',
    description:
      'Spend calm afternoons between waterfall outings beside our outdoor swimming pool, or schedule restorative time at the spa and warm hot tub facilities.',
  },
  {
    icon: Users,
    title: 'Family Time & Indoor Games Room',
    description:
      'Rainy Cherrapunjee afternoons turn into cosy memories in our indoor games room and dining hall — designed for children, parents, and multi-generational groups.',
  },
  {
    icon: Compass,
    title: 'Guided Canyon & Cave Day Trips',
    description:
      'Use Saitsohpen as your starting point for Seven Sisters Falls (~3 km), Mawsmai Cave, Arwah Cave, Wei Sawdong, and Nongriat living root bridge treks.',
  },
];

export function ExperiencesPage() {
  return (
    <>
      <PageSEO
        title="Experiences | Jiva Resort Cherrapunjee, Sohra"
        description="Discover curated resort and nature experiences at Jiva Resort Cherrapunjee: golf range walks, spa & hot tub relaxation, family games room, and Sohra waterfall outings."
        keywords="Meghalaya holiday resort, family resort in Cherrapunjee, Sohra experiences"
      />

      <PageHeader
        kicker="Curated Stays"
        title="Experiences Crafted Around Sohra’s Pace"
        subtitle="Whether you seek quiet mornings amidst misty hills or full-day waterfall trails, Jiva Resort Cherrapunjee balances outdoor adventure with soothing resort leisure."
        breadcrumbLabel="Experiences"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-slate-200 min-h-[260px]">
              <ResilientImage
                src={RESORT_INFO.spaImage}
                alt="Spa and hot tub wellness room overlooking misty Meghalaya hills"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-center space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Restful Evenings After Active Hill Trails
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Exploring Cherrapunjee’s limestone caverns and stepped valley trails is rewarding — and returning to warm hospitality makes the journey complete. Unwind in our hot tub and spa, enjoy dinner with family, and recharge for another day in Meghalaya.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/attractions"
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
                >
                  <span>Browse 13 Sohra Attractions</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-semibold transition-colors"
                >
                  Enquire About Your Trip
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCES.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.title}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">{exp.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
