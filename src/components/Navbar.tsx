import { Link, NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { RESORT_INFO } from '../data/resort';

const PRIMARY_NAV = [
  { to: '/rooms', label: 'Rooms' },
  { to: '/amenities', label: 'Amenities' },
  { to: '/dining', label: 'Dining' },
  { to: '/attractions', label: 'Attractions' },
  { to: '/story', label: 'Story' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-8">
        <Link
          to="/"
          className="font-display text-lg md:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-md px-1"
        >
          Jiva Resort Cherrapunjee
        </Link>

        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {PRIMARY_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-sm ${
                  isActive
                    ? 'text-blue-700 border-blue-700'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href={RESORT_INFO.phoneHref}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-3 text-sm font-semibold text-blue-700 hover:text-blue-800 whitespace-nowrap shrink-0"
            aria-label={`Call ${RESORT_INFO.name}`}
          >
            <Phone className="w-4 h-4 mr-1.5" aria-hidden="true" />
            Call
          </a>
          <Link
            to="/booking"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
          >
            Book Enquiry
          </Link>
        </div>
      </div>
    </header>
  );
}
