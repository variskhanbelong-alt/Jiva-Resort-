import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ShieldAlert } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { BookingEnquiryForm } from '../components/BookingEnquiryForm';
import { RESORT_INFO } from '../data/resort';

export function BookingPage() {
  const [searchParams] = useSearchParams();

  const initialRoom = searchParams.get('room') || undefined;
  const initialCheckIn = searchParams.get('checkIn') || undefined;
  const initialCheckOut = searchParams.get('checkOut') || undefined;
  const initialAdults = searchParams.get('adults') ? Number(searchParams.get('adults')) : undefined;
  const initialChildren = searchParams.get('children') ? Number(searchParams.get('children')) : undefined;

  return (
    <>
      <PageSEO
        title="Booking Enquiry | Jiva Resort Cherrapunjee, Sohra"
        description="Send a direct room booking enquiry to Jiva Resort Cherrapunjee via WhatsApp (+91 6207799112). Select check-in/check-out dates, guests, and room category."
        keywords="Jiva Resort Cherrapunjee booking, book resort in Sohra, Cherrapunjee room enquiry"
      />

      <PageHeader
        kicker="Direct Reservation Desk"
        title="Room Booking Enquiry"
        subtitle="Fill in your stay details below to send a structured booking enquiry directly to Jiva Resort Cherrapunjee on WhatsApp."
        breadcrumbLabel="Booking Enquiry"
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <BookingEnquiryForm
                initialRoom={initialRoom}
                initialCheckIn={initialCheckIn}
                initialCheckOut={initialCheckOut}
                initialAdults={initialAdults}
                initialChildren={initialChildren}
              />
            </div>

            <aside className="lg:col-span-4 space-y-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h2 className="font-display text-base font-bold text-slate-900">
                      How Our Enquiry Desk Works
                    </h2>
                    <ul className="mt-2 space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-4">
                      {RESORT_INFO.reservationGuidelines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                <h2 className="font-display text-base font-bold text-slate-900">
                  Prefer Speaking Directly?
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our 24-hour reservation desk responds in English and Hindi.
                </p>

                <a
                  href={RESORT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp: {RESORT_INFO.whatsappDisplay}</span>
                </a>

                <a
                  href={RESORT_INFO.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-semibold"
                >
                  <Phone className="w-4 h-4 text-blue-700" aria-hidden="true" />
                  <span>Call: {RESORT_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={RESORT_INFO.emailHref}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-900 text-xs font-semibold break-all"
                >
                  <Mail className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
                  <span>{RESORT_INFO.email}</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
