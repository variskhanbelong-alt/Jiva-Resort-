import { useState, type FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { RESORT_INFO } from '../data/resort';
import {
  buildContactWhatsAppUrl,
  validateContactForm,
  type ContactEnquiryInput,
  type ContactValidationErrors,
} from '../utils/booking';

export function ContactPage() {
  const [form, setForm] = useState<ContactEnquiryInput>({
    name: '',
    phoneOrEmail: '',
    subject: 'General Stay Enquiry',
    message: '',
  });
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = validateContactForm(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      setSentUrl(null);
      return;
    }

    const url = buildContactWhatsAppUrl(form);
    setSentUrl(url);

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <PageSEO
        title="Contact Us | Jiva Resort Cherrapunjee, Sohra"
        description="Contact Jiva Resort Cherrapunjee via WhatsApp (+91 6207799112), Phone (+91 9762896575), or Email (support.reservation.desk@gmail.com). Address: Saitsohpen, Sohra, Meghalaya 793108."
        keywords="Jiva Resort Cherrapunjee contact number, Jiva Resort Sohra WhatsApp, Saitsohpen Sohra resort address"
      />

      <PageHeader
        kicker="Get in Touch"
        title="Contact Jiva Resort Cherrapunjee"
        subtitle="Reach our reservation and front desk team directly by WhatsApp, telephone, or email for stays, family bookings, and travel guidance."
        breadcrumbLabel="Contact Us"
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900">Resort Address</p>
                    <p className="text-slate-600 mt-0.5">{RESORT_INFO.addressLine}</p>
                    <a
                      href={RESORT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-semibold mt-1.5"
                    >
                      <span>Open Google Business Profile &amp; Map</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp Reservation Desk</p>
                    <p className="text-slate-600 mt-0.5">{RESORT_INFO.whatsappDisplay}</p>
                    <a
                      href={RESORT_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[40px] px-4 py-1.5 mt-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900">Telephone</p>
                    <p className="text-slate-600 mt-0.5">{RESORT_INFO.phoneDisplay}</p>
                    <a
                      href={RESORT_INFO.phoneHref}
                      className="inline-flex items-center justify-center min-h-[40px] px-4 py-1.5 mt-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold"
                    >
                      Call Reservation Desk
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600 mt-0.5 break-all">{RESORT_INFO.email}</p>
                    <a
                      href={RESORT_INFO.emailHref}
                      className="inline-flex items-center justify-center min-h-[40px] px-4 py-1.5 mt-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">
              Send a Direct Message
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Have questions about local shuttle services, group bookings, or special requests? Send your message directly to our WhatsApp desk or email us anytime.
            </p>

            {sentUrl && (
              <div
                role="status"
                className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-emerald-950">
                  <p className="font-semibold">Message Prepared for WhatsApp</p>
                  <p className="mt-1">
                    If WhatsApp did not open automatically, click below to send your message directly.
                  </p>
                  <a
                    href={sentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 font-semibold text-emerald-800 underline"
                  >
                    Open WhatsApp Message
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-700 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactPhoneEmail" className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Phone or Email *
                  </label>
                  <input
                    id="contactPhoneEmail"
                    type="text"
                    value={form.phoneOrEmail}
                    onChange={(e) => setForm({ ...form, phoneOrEmail: e.target.value })}
                    placeholder="+91... or email@example.com"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                  {errors.phoneOrEmail && (
                    <p className="mt-1 text-xs text-red-700 flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{errors.phoneOrEmail}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contactSubject" className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Topic *
                </label>
                <select
                  id="contactSubject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 bg-white"
                >
                  <option value="General Stay Enquiry">General Stay Enquiry</option>
                  <option value="Group or Family Booking">Group or Family Booking</option>
                  <option value="Local Shuttle & Directions">Local Shuttle &amp; Directions</option>
                  <option value="Pet-Friendly / Accessibility Request">Pet-Friendly / Accessibility Request</option>
                  <option value="Feedback">Guest Feedback</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-700 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contactMessage" className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contactMessage"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can our team assist with your Sohra trip?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-700 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 min-h-[46px] px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Send Message via WhatsApp</span>
                </button>
                <a
                  href={`mailto:${RESORT_INFO.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
                    `Name: ${form.name}\nContact: ${form.phoneOrEmail}\n\n${form.message}`
                  )}`}
                  className="inline-flex items-center gap-2 min-h-[46px] px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-semibold"
                >
                  <Mail className="w-4 h-4 text-blue-700" aria-hidden="true" />
                  <span>Send via Email Instead</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
