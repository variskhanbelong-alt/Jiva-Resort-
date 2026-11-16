import { useState } from 'react';
import { X } from 'lucide-react';
import { PageSEO } from '../components/PageSEO';
import { PageHeader } from '../components/PageHeader';
import { ResilientImage } from '../components/ResilientImage';
import { RESORT_INFO } from '../data/resort';
import { ROOM_CATEGORIES } from '../data/rooms';
import { SOHRA_ATTRACTIONS } from '../data/attractions';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'Resort & Dining' | 'Rooms & Suites' | 'Sohra Nature';
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'resort-ext',
    src: RESORT_INFO.heroImage,
    alt: 'Jiva Resort Cherrapunjee exterior surrounded by green hills',
    caption: 'Hillside setting & resort grounds (illustrative view)',
    category: 'Resort & Dining',
  },
  {
    id: 'resort-dining',
    src: RESORT_INFO.diningImage,
    alt: 'Resort restaurant dining room overlooking Sohra valley',
    caption: 'Restaurant & Dining ambience (illustrative view)',
    category: 'Resort & Dining',
  },
  {
    id: 'resort-pool',
    src: RESORT_INFO.poolImage,
    alt: 'Outdoor swimming pool with green hills backdrop',
    caption: 'Swimming pool & outdoor terrace (illustrative view)',
    category: 'Resort & Dining',
  },
  {
    id: 'resort-spa',
    src: RESORT_INFO.spaImage,
    alt: 'Hot tub and spa relaxation suite',
    caption: 'Spa & hot tub wellness space (illustrative view)',
    category: 'Resort & Dining',
  },
  ...ROOM_CATEGORIES.map((room) => ({
    id: `room-${room.id}`,
    src: room.images[0].src,
    alt: room.images[0].alt,
    caption: `${room.name} — ${room.tariffDisplay} ${room.taxLabel}`,
    category: 'Rooms & Suites' as const,
  })),
  {
    id: 'sohra-hills',
    src: RESORT_INFO.panoramaImage,
    alt: 'Sohra green hills and golf range plateau',
    caption: 'Sohra highland plateau near Sohra Golf Range (illustrative view)',
    category: 'Sohra Nature',
  },
  ...SOHRA_ATTRACTIONS.slice(0, 5).map((a) => ({
    id: `attr-${a.id}`,
    src: a.image,
    alt: a.imageAlt,
    caption: `${a.name} — Sohra landmark visual guide`,
    category: 'Sohra Nature' as const,
  })),
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const visibleItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageSEO
        title="Photo Gallery | Jiva Resort Cherrapunjee, Sohra"
        description="View rooms & suites photos alongside scenic illustrations of Jiva Resort Cherrapunjee’s dining, swimming pool, and surrounding Sohra waterfalls."
        keywords="Jiva Resort Cherrapunjee photos, Sohra resort gallery, Cherrapunjee rooms photos"
      />

      <PageHeader
        kicker="Visual Showcase"
        title="Gallery of Rooms, Resort Spaces &amp; Sohra Landscapes"
        subtitle="Browse room category photographs alongside visual guides of our dining, pool, wellness spaces, and surrounding Meghalaya landmarks."
        breadcrumbLabel="Gallery"
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl" role="group" aria-label="Filter gallery">
            {['All', 'Rooms & Suites', 'Resort & Dining', 'Sohra Nature'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[40px] px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxItem(item)}
                className="group text-left bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <ResilientImage
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-slate-500">{item.category}</p>
                  <p className="text-sm font-semibold text-slate-900 mt-1">{item.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.caption}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Close image preview"
              className="absolute top-3 right-3 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-900"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
            <div className="aspect-[16/10] bg-slate-900">
              <ResilientImage
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200">
              <p className="text-xs text-slate-500">{lightboxItem.category}</p>
              <p className="text-base font-semibold text-slate-900 mt-0.5">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
