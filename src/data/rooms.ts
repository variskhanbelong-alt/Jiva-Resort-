export interface RoomCategory {
  id: string;
  slug: string;
  name: string;
  tariffAmount: number;
  tariffDisplay: string;
  taxLabel: string;
  occupancyNote: string;
  mealInclusion: string;
  viewOrStyle: string;
  shortSummary: string;
  description: string;
  verifiedFeatures: string[];
  images: { src: string; alt: string }[];
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'non-ac',
    slug: 'non-ac-room',
    name: 'Non-AC Room',
    tariffAmount: 5000,
    tariffDisplay: '₹5,000',
    taxLabel: 'per night (indicative; check applicable taxes)',
    occupancyNote: '2 Adults',
    mealInclusion: 'Breakfast included',
    viewOrStyle: 'Natural Highland Ventilation · Ceiling Fan',
    shortSummary:
      'Comfortable highland accommodation suited for Sohra’s crisp mountain weather, designed for 2 adults with complimentary breakfast and attached bathroom.',
    description:
      'Ideal for travellers seeking a quiet, comfortable base in Sohra’s cool hillside climate. Equipped with a ceiling fan rather than air conditioning, an LED/Smart TV, free Wi-Fi, an attached private bathroom, and complimentary breakfast.',
    verifiedFeatures: [
      '2 Adults',
      'Breakfast',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom',
      'Ceiling Fan',
    ],
    images: [
      { src: '/images/rooms/nonac-1.jpg', alt: 'Jiva Resort Cherrapunjee Non-AC Room interior view' },
      { src: '/images/rooms/nonac-2.jpg', alt: 'Jiva Resort Cherrapunjee Non-AC Room seating and bedding' },
      { src: '/images/rooms/nonac-3.jpg', alt: 'Jiva Resort Cherrapunjee Non-AC Room attached bathroom and detail' },
    ],
  },
  {
    id: 'ac-deluxe',
    slug: 'ac-deluxe-room',
    name: 'AC Deluxe Room',
    tariffAmount: 7500,
    tariffDisplay: '₹7,500',
    taxLabel: '+ applicable taxes per night',
    occupancyNote: '2 Pax',
    mealInclusion: 'Breakfast included',
    viewOrStyle: 'Window View · Air Conditioning',
    shortSummary:
      'Air-conditioned deluxe room for 2 guests featuring bright window views, smart TV, attached bathroom, and complimentary breakfast.',
    description:
      'Designed for couples and solo guests who appreciate climate-controlled comfort alongside Sohra’s scenic morning light. Includes air conditioning, window views, complimentary breakfast, free Wi-Fi, an LED/Smart TV, and an attached private bathroom.',
    verifiedFeatures: [
      '2 Pax',
      'Breakfast',
      'Window View',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom',
      'Air Conditioning',
    ],
    images: [
      { src: '/images/rooms/deluxe-1.jpg', alt: 'Jiva Resort Cherrapunjee AC Deluxe Room bed and window view' },
      { src: '/images/rooms/deluxe-2.jpg', alt: 'Jiva Resort Cherrapunjee AC Deluxe Room interior' },
      { src: '/images/rooms/deluxe-3.jpg', alt: 'Jiva Resort Cherrapunjee AC Deluxe Room washroom and amenities' },
    ],
  },
  {
    id: 'ac-double',
    slug: 'ac-double-room',
    name: 'AC Double Room',
    tariffAmount: 8500,
    tariffDisplay: '₹8,500',
    taxLabel: '+ applicable taxes per night',
    occupancyNote: '2–3 Pax',
    mealInclusion: 'Breakfast & Lunch included',
    viewOrStyle: 'Valley View · Air Conditioning',
    shortSummary:
      'Spacious valley-facing accommodation for 2–3 guests with both breakfast and lunch included, air conditioning, and free Wi-Fi.',
    description:
      'Overlooking the surrounding valleys of Sohra, the AC Double Room offers relaxed accommodation for 2 to 3 guests. Your stay includes both breakfast and lunch along with air conditioning, LED/Smart TV, free Wi-Fi, and an attached bathroom.',
    verifiedFeatures: [
      '2–3 Pax',
      'Breakfast & Lunch',
      'Valley View',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom',
      'Air Conditioning',
    ],
    images: [
      { src: '/images/rooms/double-1.jpg', alt: 'Jiva Resort Cherrapunjee AC Double Room valley view bedroom' },
      { src: '/images/rooms/double-2.jpg', alt: 'Jiva Resort Cherrapunjee AC Double Room interior furnishings' },
      { src: '/images/rooms/double-3.jpg', alt: 'Jiva Resort Cherrapunjee AC Double Room bathroom and layout' },
    ],
  },
  {
    id: 'ac-family',
    slug: 'ac-family-room',
    name: 'AC Family Room',
    tariffAmount: 10000,
    tariffDisplay: '₹10,000',
    taxLabel: 'per night (indicative; + applicable taxes)',
    occupancyNote: '3 Pax',
    mealInclusion: 'Breakfast & Lunch included',
    viewOrStyle: 'Mountain View · Air Conditioning',
    shortSummary:
      'Thoughtfully planned family stay for 3 guests with mountain views, breakfast & lunch included, and climate-controlled interiors.',
    description:
      'Tailored for small families and travel companions exploring Cherrapunjee together. Features mountain views, air conditioning, complimentary breakfast and lunch, free Wi-Fi, LED/Smart TV, and a private attached bathroom.',
    verifiedFeatures: [
      '3 Pax',
      'Breakfast & Lunch',
      'Mountain View',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom',
      'Air Conditioning',
    ],
    images: [
      { src: '/images/rooms/family-1.jpg', alt: 'Jiva Resort Cherrapunjee AC Family Room main bedroom' },
      { src: '/images/rooms/family-2.jpg', alt: 'Jiva Resort Cherrapunjee AC Family Room mountain view seating' },
      { src: '/images/rooms/family-3.jpg', alt: 'Jiva Resort Cherrapunjee AC Family Room private bathroom' },
    ],
  },
  {
    id: 'ac-suites',
    slug: 'ac-suites-room',
    name: 'AC Suites Room',
    tariffAmount: 20000,
    tariffDisplay: '₹20,000',
    taxLabel: 'per night (indicative; check applicable taxes)',
    occupancyNote: '2–3 Pax',
    mealInclusion: 'Breakfast, Lunch & Dinner included',
    viewOrStyle: 'Private Cottage · Balcony View',
    shortSummary:
      'Private cottage-style suite for 2–3 guests featuring a private balcony view and all three daily meals (breakfast, lunch & dinner).',
    description:
      'Offering enhanced privacy in a cottage-style setting, the AC Suites Room welcomes 2 to 3 guests with a dedicated balcony view and full-board meals (breakfast, lunch, and dinner). Includes free Wi-Fi, LED/Smart TV, and an attached private bathroom.',
    verifiedFeatures: [
      '2–3 Pax',
      'Private Cottage',
      'Balcony View',
      'Breakfast, Lunch & Dinner',
      'Free Wi-Fi',
      'LED / Smart TV',
      'Attached Bathroom',
    ],
    images: [
      { src: '/images/rooms/suite-1.jpg', alt: 'Jiva Resort Cherrapunjee AC Suites Room private cottage bedroom' },
      { src: '/images/rooms/suite-2.jpg', alt: 'Jiva Resort Cherrapunjee AC Suites Room balcony and lounge' },
      { src: '/images/rooms/suite-3.jpg', alt: 'Jiva Resort Cherrapunjee AC Suites Room bath and interior' },
    ],
  },
  {
    id: 'ac-suites-loft',
    slug: 'ac-suites-loft-room',
    name: 'AC Suites Loft Room',
    tariffAmount: 25000,
    tariffDisplay: '₹25,000',
    taxLabel: '+ applicable taxes per night',
    occupancyNote: 'Premium Suite',
    mealInclusion: 'Breakfast, Lunch & Dinner included',
    viewOrStyle: 'Premium Private Cottage · Private Swimming Pool',
    shortSummary:
      'Our flagship Premium Private Cottage suite featuring 2 King Size Beds, private swimming pool, soaking bathtub, and all daily meals.',
    description:
      'The most expansive accommodation at Jiva Resort Cherrapunjee. Set within a Premium Private Cottage, the AC Suites Loft Room includes 2 King Size Beds, a private swimming pool, a relaxing bathtub, free Wi-Fi, and full-board dining (breakfast, lunch, and dinner).',
    verifiedFeatures: [
      'Premium Suite',
      'Breakfast, Lunch & Dinner',
      'Premium Private Cottage',
      'Private Swimming Pool',
      'Free Wi-Fi',
      'Bathtub',
      '2 King Size Beds',
    ],
    images: [
      { src: '/images/rooms/loft-1.jpg', alt: 'Jiva Resort Cherrapunjee AC Suites Loft Room interior' },
      { src: '/images/rooms/loft-2.jpg', alt: 'Jiva Resort Cherrapunjee AC Suites Loft Room king bedding' },
      { src: '/images/rooms/loft-3.jpg', alt: 'Jiva Resort Cherrapunjee AC Suites Loft Room private pool' },
      { src: '/images/rooms/loft-4.jpg', alt: 'Jiva Resort Cherrapunjee AC Suites Loft Room loft and seating' },
      { src: '/images/rooms/loft-5.jpg', alt: 'Jiva Resort Cherrapunjee AC Suites Loft Room bathtub and bath' },
    ],
  },
];

export function getRoomBySlug(slug: string | undefined): RoomCategory | undefined {
  return ROOM_CATEGORIES.find((room) => room.slug === slug);
}
