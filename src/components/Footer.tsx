import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { RESORT_INFO } from '../data/resort';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-3">
              {RESORT_INFO.name}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {RESORT_INFO.category} nestled in the green hills of Sohra, Meghalaya — approx. 1-minute walk from Sohra Golf Range and ~3 km from Seven Sisters Falls.
            </p>
            <p className="text-xs text-slate-400">
              Supplied rating: {RESORT_INFO.ratingValue}/{RESORT_INFO.ratingScale} ({RESORT_INFO.reviewSummary})
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resort &amp; Stay</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="hover:text-white transition-colors">Rooms &amp; Suites</Link></li>
              <li><Link to="/dining" className="hover:text-white transition-colors">Restaurant &amp; Dining</Link></li>
              <li><Link to="/amenities" className="hover:text-white transition-colors">Amenities &amp; Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Jiva Resort</Link></li>
              <li><Link to="/story" className="hover:text-white transition-colors">Our Resort Story</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Sohra &amp; Guest Guide</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/attractions" className="hover:text-white transition-colors">Nearby Tourist Attractions</Link></li>
              <li><Link to="/experiences" className="hover:text-white transition-colors">Experiences</Link></li>
              <li><Link to="/travel-guide" className="hover:text-white transition-colors">Travel Guide to Sohra</Link></li>
              <li><Link to="/guest-info" className="hover:text-white transition-colors">Guest Information</Link></li>
              <li><Link to="/booking" className="hover:text-white transition-colors">Booking Enquiry</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Direct Reservation Desk</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{RESORT_INFO.addressLine}</span>
              </li>
              <li>
                <a
                  href={RESORT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>WhatsApp: {RESORT_INFO.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={RESORT_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                  <span>Call: {RESORT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={RESORT_INFO.emailHref}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                  <span>{RESORT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={RESORT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {RESORT_INFO.name}. Independent official resort website. Check-in {RESORT_INFO.checkInTime} · Check-out {RESORT_INFO.checkOutTime}.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
