import { Link } from 'react-router-dom';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { RESORT_INFO } from '../data/resort';

export function PrivacyPolicyPage() {
  return (
    <>
      <PageSEO
        title="Privacy Policy | Jiva Resort Cherrapunjee"
        description="Privacy Policy for the official website of Jiva Resort Cherrapunjee, Saitsohpen, Sohra, Meghalaya."
      />

      <PageHeader
        kicker="Legal & Privacy"
        title="Privacy Policy"
        subtitle="How Jiva Resort Cherrapunjee handles guest enquiry details submitted through our website, WhatsApp, telephone, or email."
        breadcrumbLabel="Privacy Policy"
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <h2 className="font-display text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you use the booking enquiry or contact forms on the {RESORT_INFO.name} website, you voluntarily provide details such as your full name, mobile number, preferred travel dates, guest counts, room category preference, and special requests. This website formats your enquiry directly into a WhatsApp message or email addressed to our reservation desk and does not sell or broker your personal data to third-party hotel aggregators.
            </p>

            <h2 className="font-display text-xl font-bold text-slate-900">2. How Information Is Used</h2>
            <p>
              Your enquiry details are used solely by our front desk and reservation team to check room availability, share tariff quotes including applicable taxes, coordinate airport/local shuttle or special stay requests, and assist with confirmed reservations.
            </p>

            <h2 className="font-display text-xl font-bold text-slate-900">3. Third-Party Services</h2>
            <p>
              Our website integrates WhatsApp (for direct guest enquiry messaging), Google Maps links (for directions), and Tawk.to live chat support (when available). Interactions conducted inside WhatsApp, Google Maps, or live chat are governed by the respective privacy policies of those platforms.
            </p>

            <h2 className="font-display text-xl font-bold text-slate-900">4. Contact Regarding Privacy</h2>
            <p>
              For questions or corrections regarding your enquiry details, contact {RESORT_INFO.name} at{' '}
              <a href={RESORT_INFO.emailHref} className="text-blue-700 underline">
                {RESORT_INFO.email}
              </a>{' '}
              or call{' '}
              <a href={RESORT_INFO.phoneHref} className="text-blue-700 underline">
                {RESORT_INFO.phoneDisplay}
              </a>
              .
            </p>

            <div className="pt-4 border-t border-slate-100">
              <Link to="/contact" className="text-sm font-semibold text-blue-700 hover:underline">
                Return to Contact Us
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
