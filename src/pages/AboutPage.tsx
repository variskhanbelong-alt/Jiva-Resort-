import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Star, Users } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { ResilientImage } from '../components/ResilientImage';
import { RESORT_INFO } from '../data/resort';

export function AboutPage() {
  return (
    <>
      <PageSEO
        title="About Jiva Resort Cherrapunjee | 3-Star Hill Resort in Sohra"
        description="Learn about Jiva Resort Cherrapunjee in Saitsohpen, Sohra, Meghalaya — a 3-star hill resort near Sohra Golf Range and Seven Sisters Falls."
        keywords="About Jiva Resort Cherrapunjee, Jiva Resort Sohra, Hotels in Cherrapunjee, Resorts in Sohra Meghalaya"
      />

      <PageHeader
        kicker="About the Resort"
        title="Jiva Resort Cherrapunjee — Your Peaceful Hill Base in Sohra"
        subtitle="Located in Saitsohpen, Sohra, Jiva Resort Cherrapunjee combines comfortable hill accommodation, warm hospitality, and immediate proximity to Meghalaya’s iconic canyons and waterfalls."
        breadcrumbLabel="About Jiva Resort"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-slate-200 min-h-[260px]">
              <ResilientImage
                src={RESORT_INFO.panoramaImage}
                alt="Green rolling hills and highland plateau around Saitsohpen, Sohra, Meghalaya"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-center space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Surrounded by Green Hills &amp; Open Skies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Classified as a {RESORT_INFO.category}, {RESORT_INFO.name} welcomes couples, families, and nature travellers seeking unhurried rest in the hills of Sohra (Cherrapunjee), Meghalaya.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our location at Saitsohpen places guests approximately a one-minute walk from the Sohra Golf Range, around 2 km from State Highway 5, and around 3 km from Seven Sisters Falls — making morning walks and sightseeing excursions effortless.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/rooms"
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
                >
                  <span>Explore Rooms &amp; Tariffs</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-semibold transition-colors"
                >
                  Send Booking Enquiry
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <MapPin className="w-5 h-5 text-blue-700 mb-3" aria-hidden="true" />
              <h3 className="font-display text-base font-bold text-slate-900">Verified Address</h3>
              <p className="mt-1.5 text-sm text-slate-600">{RESORT_INFO.addressLine}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <Clock className="w-5 h-5 text-blue-700 mb-3" aria-hidden="true" />
              <h3 className="font-display text-base font-bold text-slate-900">Resort Timings</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Check-in: {RESORT_INFO.checkInTime}
                <br />
                Check-out: {RESORT_INFO.checkOutTime}
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <Star className="w-5 h-5 text-blue-700 mb-3" aria-hidden="true" />
              <h3 className="font-display text-base font-bold text-slate-900">Supplied Rating</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                {RESORT_INFO.ratingValue}/5 across {RESORT_INFO.reviewSummary}
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <Users className="w-5 h-5 text-blue-700 mb-3" aria-hidden="true" />
              <h3 className="font-display text-base font-bold text-slate-900">Languages Spoken</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                English and Hindi spoken by our hospitable front desk and dining staff.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
