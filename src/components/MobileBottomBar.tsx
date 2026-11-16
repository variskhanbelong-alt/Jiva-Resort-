import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Home,
  BedDouble,
  Compass,
  CalendarCheck,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
} from 'lucide-react';
import { RESORT_INFO } from '../data/resort';

const MENU_GROUPS = [
  {
    title: 'Stay & Resort',
    links: [
      { to: '/', label: 'Home' },
      { to: '/rooms', label: 'Rooms & Suites' },
      { to: '/dining', label: 'Restaurant & Dining' },
      { to: '/amenities', label: 'Amenities & Facilities' },
      { to: '/gallery', label: 'Photo Gallery' },
    ],
  },
  {
    title: 'Discover Sohra',
    links: [
      { to: '/attractions', label: 'Nearby Tourist Attractions' },
      { to: '/experiences', label: 'Resort Experiences' },
      { to: '/travel-guide', label: 'Travel Guide to Sohra' },
      { to: '/about', label: 'About Jiva Resort' },
      { to: '/story', label: 'Our Resort Story' },
    ],
  },
  {
    title: 'Reservations & Policies',
    links: [
      { to: '/booking', label: 'Booking Enquiry' },
      { to: '/guest-info', label: 'Guest Information' },
      { to: '/contact', label: 'Contact Us' },
      { to: '/privacy-policy', label: 'Privacy Policy' },
      { to: '/terms-and-conditions', label: 'Terms & Conditions' },
    ],
  },
];

export function MobileBottomBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Mobile App Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 pb-safe"
      >
        <div className="grid grid-cols-5 h-16 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-h-[44px] text-[11px] font-medium transition-colors ${
                isActive ? 'text-blue-700' : 'text-slate-600'
              }`
            }
          >
            <Home className="w-5 h-5 mb-0.5" aria-hidden="true" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-h-[44px] text-[11px] font-medium transition-colors ${
                isActive ? 'text-blue-700' : 'text-slate-600'
              }`
            }
          >
            <BedDouble className="w-5 h-5 mb-0.5" aria-hidden="true" />
            <span>Rooms</span>
          </NavLink>

          <NavLink
            to="/attractions"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-h-[44px] text-[11px] font-medium transition-colors ${
                isActive ? 'text-blue-700' : 'text-slate-600'
              }`
            }
          >
            <Compass className="w-5 h-5 mb-0.5" aria-hidden="true" />
            <span>Sohra</span>
          </NavLink>

          <NavLink
            to="/booking"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-h-[44px] text-[11px] font-medium transition-colors ${
                isActive ? 'text-blue-700' : 'text-slate-600'
              }`
            }
          >
            <CalendarCheck className="w-5 h-5 mb-0.5" aria-hidden="true" />
            <span>Enquire</span>
          </NavLink>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-expanded={drawerOpen}
            aria-label="Open full navigation menu"
            className="flex flex-col items-center justify-center min-h-[44px] text-[11px] font-medium text-slate-600 hover:text-slate-900"
          >
            <Menu className="w-5 h-5 mb-0.5" aria-hidden="true" />
            <span>Menu</span>
          </button>
        </div>
      </nav>

      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-end md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="All Resort Pages"
        >
          <div className="w-full max-h-[85vh] bg-white rounded-t-3xl overflow-hidden flex flex-col">
            <div className="px-5 pt-3 pb-4 border-b border-slate-200">
              <div className="w-10 h-1.5 bg-slate-300 rounded-full mx-auto mb-3" />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-lg font-bold text-slate-900">
                    {RESORT_INFO.name}
                  </h2>
                  <p className="text-xs text-slate-500">{RESORT_INFO.shortLocation}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close navigation menu"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto px-5 py-4 space-y-6">
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={RESORT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center min-h-[56px] p-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mb-1" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={RESORT_INFO.phoneHref}
                  className="flex flex-col items-center justify-center min-h-[56px] p-2 rounded-xl bg-blue-50 text-blue-800 text-xs font-semibold"
                >
                  <Phone className="w-4 h-4 mb-1" aria-hidden="true" />
                  Call Desk
                </a>
                <a
                  href={RESORT_INFO.emailHref}
                  className="flex flex-col items-center justify-center min-h-[56px] p-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold"
                >
                  <Mail className="w-4 h-4 mb-1" aria-hidden="true" />
                  Email
                </a>
              </div>

              {MENU_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-semibold text-slate-500 mb-2 px-1">
                    {group.title}
                  </h3>
                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white">
                    {group.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setDrawerOpen(false)}
                        className="flex items-center justify-between px-4 min-h-[48px] text-sm font-medium text-slate-800 hover:bg-slate-50"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
