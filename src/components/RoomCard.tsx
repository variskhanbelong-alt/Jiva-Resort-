import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { RoomCategory } from '../data/rooms';
import { buildQuickRoomWhatsAppUrl } from '../utils/booking';
import { ResilientImage } from './ResilientImage';

interface RoomCardProps {
  room: RoomCategory;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
}

export function RoomCard({ room, checkIn, checkOut, adults, children }: RoomCardProps) {
  const whatsappUrl = buildQuickRoomWhatsAppUrl(room.name, checkIn, checkOut, adults, children);

  return (
    <article className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-shadow duration-200 hover:shadow-md">
      <Link to={`/rooms/${room.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-slate-100">
        <ResilientImage
          src={room.images[0].src}
          alt={room.images[0].alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <p className="text-xs font-medium text-slate-500 mb-1.5">
          {room.occupancyNote} <span aria-hidden="true">·</span> {room.mealInclusion}
        </p>

        <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
          <Link to={`/rooms/${room.slug}`} className="hover:text-blue-700 transition-colors">
            {room.name}
          </Link>
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
          {room.shortSummary}
        </p>

        <p className="text-xs text-slate-500 mb-4">
          {room.verifiedFeatures.slice(0, 5).join(' · ')}
        </p>

        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-bold text-slate-900 tabular-nums">
                {room.tariffDisplay}
              </span>
              <span className="text-xs text-slate-600">{room.taxLabel}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Indicative tariff; subject to confirmation by the resort
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Book This Room</span>
            </a>

            <Link
              to={`/rooms/${room.slug}`}
              className="inline-flex items-center justify-center gap-1 min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-medium transition-colors whitespace-nowrap"
              aria-label={`View details for ${room.name}`}
            >
              <span>Details</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
