import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { ResilientImage } from '../components/ResilientImage';
import { RESORT_INFO } from '../data/resort';

export function StoryPage() {
  return (
    <>
      <PageSEO
        title="Our Resort Story | Jiva Resort Cherrapunjee, Sohra"
        description="Discover the story and spirit of Jiva Resort Cherrapunjee — rooted in Sohra’s natural beauty, peaceful hills, local warmth, and family hospitality."
        keywords="Jiva Resort Cherrapunjee story, Sohra Meghalaya resort, family resort in Cherrapunjee"
      />

      <PageHeader
        kicker="Our Resort Story"
        title="Hospitality Shaped by the Clouds & Hills of Sohra"
        subtitle="An unhurried retreat built around Sohra’s natural rhythm — where morning mist, green meadows, and genuine care come together for memorable holidays."
        breadcrumbLabel="Our Resort Story"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-2xl overflow-hidden bg-slate-200 aspect-[16/9]">
            <ResilientImage
              src={RESORT_INFO.heroImage}
              alt="Misty highland slopes surrounding Jiva Resort Cherrapunjee"
              className="w-full h-full object-cover"
            />
          </div>

          <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6 text-slate-700 leading-relaxed">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Where Sohra Slows Down
            </h2>
            <p>
              Sohra — known around the world as Cherrapunjee — is a landscape of sudden, breathtaking contrasts. One hour brings warm highland sunshine across rolling green hills; the next wraps the plateau in silver mist drifting up from deep limestone valleys. Jiva Resort Cherrapunjee was envisioned as a comfortable, welcoming sanctuary where guests can experience every mood of Sohra without rushing.
            </p>
            <p>
              Set in the quiet neighbourhood of Saitsohpen, our grounds open onto calm green vistas just a minute’s walk from the Sohra Golf Range and a short drive from State Highway 5. Whether guests arrive for a quiet couple’s getaway, a multi-generational family holiday, or an active trail itinerary across Meghalaya’s living root bridges and waterfalls, each day begins and ends with peace.
            </p>

            <h3 className="font-display text-xl font-bold text-slate-900 pt-2">
              Comfort Designed for Every Season
            </h3>
            <p>
              Hill weather asks for thoughtful care. Across our six room categories — from naturally airy Non-AC rooms and cosy AC Deluxe stays to valley-facing Double rooms, Mountain-view Family rooms, and private cottage Suites — our focus remains simple: clean, restful interiors, hot meals waiting when you return from the trails, and attentive support in English and Hindi whenever you need guidance.
            </p>
            <p>
              After a day exploring Seven Sisters Falls, Nohkalikai, or Mawsmai Cave, families gather in our dining room for warm buffet dinners, challenge each other in the games room, or unwind beside the pool and spa facilities while evening clouds settle across the hills.
            </p>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
              <Link
                to="/rooms"
                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
              >
                <span>View Rooms &amp; Cottages</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/attractions"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-semibold transition-colors"
              >
                Explore Nearby Sohra Sights
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
