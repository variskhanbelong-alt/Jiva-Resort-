import { Link } from 'react-router-dom';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { RESORT_INFO } from '../data/resort';

export function TermsPage() {
  return (
    <>
      <PageSEO
        title="Terms & Conditions | Jiva Resort Cherrapunjee"
        description="Reservation terms, indicative tariff notes, check-in/check-out timings, and stay guidelines for Jiva Resort Cherrapunjee."
      />

      <PageHeader
        kicker="Legal & Reservations"
        title="Terms &amp; Conditions"
        subtitle="Standard reservation guidelines, tariff confirmation terms, and guest stay policies at Jiva Resort Cherrapunjee."
        breadcrumbLabel="Terms & Conditions"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <h2 className="font-display text-xl font-bold text-slate-900">1. Enquiries &amp; Booking Confirmation</h2>
            <p>
              This website operates as a direct booking enquiry platform for {RESORT_INFO.name}. Submitting a form or initiating a WhatsApp enquiry does not constitute a confirmed reservation. A booking is confirmed only after verification of availability by our reservation desk and receipt of the required advance payment.
            </p>

            <h2 className="font-display text-xl font-bold text-slate-900">2. Tariffs &amp; Applicable Taxes</h2>
            <p>
              All room rates published on this website (ranging across Non-AC Room, AC Deluxe Room, AC Double Room, AC Family Room, AC Suites Room, and AC Suites Loft Room) are indicative per-night tariffs and are subject to confirmation and applicable taxes by the resort at the time of booking.
            </p>

            <h2 className="font-display text-xl font-bold text-slate-900">3. Check-in, Check-out &amp; Availability</h2>
            <p>
              Standard check-in time is {RESORT_INFO.checkInTime} and check-out time is {RESORT_INFO.checkOutTime}. Same-day room availability cannot be guaranteed. Valid government-issued photo identification is required for all guests at check-in in accordance with local hospitality regulations.
            </p>

            <h2 className="font-display text-xl font-bold text-slate-900">4. Facilities &amp; Conduct</h2>
            <p>
              Room-specific features vary by selected category (for instance, Non-AC Rooms use ceiling fans rather than air conditioning, and bathtubs are subject to room category). Guests travelling with pets or requiring wheelchair accessibility should notify the desk prior to arrival.
            </p>

            <div className="pt-4 border-t border-slate-100 flex gap-6">
              <Link to="/guest-info" className="text-sm font-semibold text-blue-700 hover:underline">
                View Guest Information
              </Link>
              <Link to="/booking" className="text-sm font-semibold text-blue-700 hover:underline">
                Send Booking Enquiry
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
