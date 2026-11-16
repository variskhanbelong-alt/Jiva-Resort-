import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Clock, ShieldCheck, PawPrint, Accessibility } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { RESORT_INFO } from '../data/resort';

const FAQS = [
  {
    q: 'What are the standard check-in and check-out times?',
    a: `Check-in begins at ${RESORT_INFO.checkInTime} and check-out is by ${RESORT_INFO.checkOutTime}. Early check-in or late check-out requests are subject to availability and prior confirmation with the 24-hour front desk.`,
  },
  {
    q: 'How is a room booking confirmed at Jiva Resort Cherrapunjee?',
    a: 'All online submissions and WhatsApp messages are booking enquiries, not instant live inventory confirmations. As outlined in our reservation guidelines, bookings are confirmed only after advance payment as guided by our reservation desk, and same-day availability cannot be guaranteed.',
  },
  {
    q: 'Are taxes included in the displayed room tariffs?',
    a: 'Displayed room tariffs are indicative base per-night rates. Applicable taxes (clearly noted on categories such as AC Deluxe, AC Double, AC Suites Loft, and as applicable across stays) are confirmed in your final reservation quote.',
  },
  {
    q: 'Are pets or guests requiring wheelchair accessibility accommodated?',
    a: 'Yes, Jiva Resort Cherrapunjee offers pet-friendly and wheelchair-accessible facilities. Please mention your specific needs in the Special Requests box when sending your enquiry so our team can assign the most suitable room.',
  },
  {
    q: 'Does every room have air conditioning?',
    a: 'No — we offer both Non-AC Rooms (equipped with a ceiling fan, well suited to Sohra’s cool climate) and five air-conditioned categories (AC Deluxe, AC Double, AC Family, AC Suites, and AC Suites Loft). Please choose your preferred category carefully.',
  },
];

export function GuestInfoPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <PageSEO
        title="Guest Information & FAQs | Jiva Resort Cherrapunjee"
        description="Check-in 2:00 PM, check-out 12:00 PM, reservation confirmation rules, pet-friendly & accessibility notes, and guest FAQs for Jiva Resort Cherrapunjee."
        keywords="Jiva Resort Cherrapunjee check in time, Sohra hotel policies, guest information"
      />

      <PageHeader
        kicker="Before You Arrive"
        title="Guest Information &amp; Reservation Guidelines"
        subtitle="Everything you need to know regarding timings, advance payment confirmation, room inclusions, accessibility, and direct front desk support."
        breadcrumbLabel="Guest Information"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <Clock className="w-5 h-5 text-blue-700 mb-3" aria-hidden="true" />
              <h2 className="font-display text-lg font-bold text-slate-900">Check-in &amp; Check-out</h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Standard Check-in: <strong>{RESORT_INFO.checkInTime}</strong>
                <br />
                Standard Check-out: <strong>{RESORT_INFO.checkOutTime}</strong>
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <ShieldCheck className="w-5 h-5 text-blue-700 mb-3" aria-hidden="true" />
              <h2 className="font-display text-lg font-bold text-slate-900">Reservation Confirmation</h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Bookings are not confirmed without advance payment. Same-day availability cannot be guaranteed; prior enquiry is recommended.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <PawPrint className="w-5 h-5 text-blue-700 mb-3" aria-hidden="true" />
              <h2 className="font-display text-lg font-bold text-slate-900">Pet-Friendly &amp; Child-Friendly</h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Family stays and pets are welcome under resort guidelines. Please share pet details in advance when submitting your enquiry.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <Accessibility className="w-5 h-5 text-blue-700 mb-3" aria-hidden="true" />
              <h2 className="font-display text-lg font-bold text-slate-900">Accessibility &amp; Languages</h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Wheelchair-accessible facilities are available, and our team assists guests fluently in English and Hindi 24 hours a day.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-slate-200">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              {FAQS.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-slate-900 text-sm sm:text-base">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-6 text-sm text-slate-600 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold"
            >
              Proceed to Booking Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
