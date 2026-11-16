import { MessageCircle } from 'lucide-react';
import { RESORT_INFO } from '../data/resort';

export function FloatingWhatsApp() {
  const defaultHref = `${RESORT_INFO.whatsappHref}?text=${encodeURIComponent(
    'Hello Jiva Resort Cherrapunjee, I would like to enquire about a room booking.'
  )}`;

  return (
    <a
      href={defaultHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Jiva Resort Cherrapunjee"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-30 inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[48px] px-3 sm:px-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-lg shadow-slate-900/20 ring-2 ring-white/90 transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-700"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp Desk</span>
    </a>
  );
}
