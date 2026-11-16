export interface Attraction {
  id: string;
  name: string;
  category: 'Waterfall' | 'Cave' | 'Living Root Bridge' | 'Park & Viewpoint';
  image: string;
  imageAlt: string;
  approximateDistanceNote: string;
  description: string;
  whyVisit: string;
  travelTips: string;
  mapsUrl: string;
}

export const SOHRA_ATTRACTIONS: Attraction[] = [
  {
    id: 'seven-sisters-falls',
    name: 'Seven Sisters Falls',
    category: 'Waterfall',
    image: '/src/assets/images/attraction_seven_sisters_1794842409068.jpg',
    imageAlt: 'Seven Sisters Falls (Nohsngithiang Falls) in Cherrapunjee, Meghalaya',
    approximateDistanceNote: 'Approximately 3 km from Jiva Resort Cherrapunjee (per supplied location info)',
    description:
      'Also known locally as Nohsngithiang Falls, this iconic seven-segmented waterfall plunges down steep limestone cliffs overlooking the plains below Sohra.',
    whyVisit:
      'One of the closest major landmarks to the resort, offering dramatic multi-stream cascades framed by mist and sunlit cliff faces.',
    travelTips:
      'Visit during morning hours for clearer visibility before afternoon valley fog rolls in; water flow peaks during and shortly after the monsoon.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Seven+Sisters+Falls+Sohra+Meghalaya',
  },
  {
    id: 'nohkalikai-falls',
    name: 'Nohkalikai Falls',
    category: 'Waterfall',
    image: '/src/assets/images/attraction_nohkalikai_1794842409732.jpg',
    imageAlt: 'Nohkalikai Falls plunging into turquoise waters in Sohra, Meghalaya',
    approximateDistanceNote: 'Approximate local drive from Saitsohpen, Sohra (confirm route & timing locally)',
    description:
      'A towering single-drop waterfall spilling from a forested highland plateau into a striking turquoise-green plunge pool far below.',
    whyVisit:
      'Renowned across India for its sheer vertical drop, amphitheatre cliffs, and shifting palette from deep emerald to jade mist.',
    travelTips:
      'Carry a light windproof jacket at the viewpoint rim and check local sky visibility before heading out, as clouds frequently pass across the gorge.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nohkalikai+Falls+Cherrapunjee+Meghalaya',
  },
  {
    id: 'mawsmai-cave',
    name: 'Mawsmai Cave',
    category: 'Cave',
    image: '/src/assets/images/attraction_mawsmai_cave_1794842410261.jpg',
    imageAlt: 'Illuminated limestone stalactites inside Mawsmai Cave, Cherrapunjee',
    approximateDistanceNote: 'Approximate short drive within Sohra area (near Mawsmai village)',
    description:
      'A well-lit natural limestone cave featuring carved corridors, stalactites, stalagmites, and mossy forest surroundings at the entrance.',
    whyVisit:
      'Accessible even for first-time cave visitors and families, showcasing Meghalaya’s ancient karst limestone formations without technical gear.',
    travelTips:
      'Wear closed-toe shoes with good grip, as cave stone paths remain damp throughout the year.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mawsmai+Cave+Cherrapunjee+Meghalaya',
  },
  {
    id: 'arwah-cave',
    name: 'Arwah Cave',
    category: 'Cave',
    image: '/src/assets/images/attraction_arwah_cave_1794842410236.jpg',
    imageAlt: 'Cliffside walkway leading to Arwah Cave overlooking a green valley in Sohra',
    approximateDistanceNote: 'Approximate short drive from Sohra market / Saitsohpen',
    description:
      'Set along a scenic hillside trail overlooking deep canyons and distant waterfalls, Arwah Cave reveals ancient rock textures and fossil impressions.',
    whyVisit:
      'The cliffside walk to the cave mouth is just as memorable as the spacious, softly illuminated limestone chambers inside.',
    travelTips:
      'Allocate time for a leisurely walk along the valley footpath and bring a small torch if you enjoy examining rock textures closely.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Arwah+Cave+Sohra+Meghalaya',
  },
  {
    id: 'double-decker-root-bridge',
    name: 'Double Decker Living Root Bridge',
    category: 'Living Root Bridge',
    image: '/src/assets/images/attraction_living_root_bridge_1794842410452.jpg',
    imageAlt: 'Double Decker Living Root Bridge in Nongriat, Meghalaya',
    approximateDistanceNote: 'Approximate drive to Tyrna village trailhead followed by a steep stepped trek',
    description:
      'A remarkable two-tiered living bridge in Nongriat guided over generations from the aerial roots of Ficus elastica trees across a clear mountain stream.',
    whyVisit:
      'An unforgettable showcase of indigenous Khasi bio-engineering surrounded by subtropical forest and crystal-clear river pools.',
    travelTips:
      'Start early in the morning (around 7:00 AM–8:00 AM), carry drinking water, wear sturdy trekking footwear, and plan for the uphill return climb.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Double+Decker+Living+Root+Bridge+Nongriat+Meghalaya',
  },
  {
    id: 'wei-sawdong-falls',
    name: 'Wei Sawdong Falls',
    category: 'Waterfall',
    image: '/src/assets/images/attraction_wei_sawdong_1794842411661.jpg',
    imageAlt: 'Wei Sawdong three-tiered waterfall with turquoise pools in Sohra',
    approximateDistanceNote: 'Approximate short drive within Sohra plus a brief steep descent trail',
    description:
      'A picturesque three-tiered waterfall tucked inside dense forest, famous for its stepped limestone ledges and vivid blue-green natural pools.',
    whyVisit:
      'Its tiered geometry and glowing pool hues make it one of Sohra’s most photogenic woodland waterfalls.',
    travelTips:
      'The final descent includes bamboo steps and forest slopes that can be slippery after rain—travel light with good traction shoes.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Wei+Sawdong+Falls+Sohra+Meghalaya',
  },
  {
    id: 'dainthlen-falls',
    name: 'Dainthlen Falls',
    category: 'Waterfall',
    image: '/src/assets/images/attraction_dainthlen_1794842412306.jpg',
    imageAlt: 'Dainthlen Falls rushing over sculpted basalt rock ledges in Cherrapunjee',
    approximateDistanceNote: 'Approximate local drive along the Sohra plateau road',
    description:
      'A wide highland river cascading over broad, dark basalt rock shelves into a deep forested gorge linked with local Khasi folklore.',
    whyVisit:
      'Unlike narrow vertical drops, Dainthlen lets visitors appreciate wide open plateau rock formations and sweeping canyon horizons.',
    travelTips:
      'Stay within marked viewing barriers along the wet rock shelves, especially when river levels rise during rainy months.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dainthlen+Falls+Cherrapunjee+Meghalaya',
  },
  {
    id: 'kynrem-falls',
    name: 'Kynrem Falls',
    category: 'Waterfall',
    image: '/src/assets/images/attraction_kynrem_1794842411572.jpg',
    imageAlt: 'Kynrem Falls three-stage cascade down verdant cliffs near Thangkharang Park',
    approximateDistanceNote: 'Approximate short drive near Thangkharang Park, Sohra',
    description:
      'A dramatic three-tier waterfall cascading down steep emerald cliffs visible both from Thangkharang Park and from the road bridge below.',
    whyVisit:
      'During active rains, the sheer scale of its three stepped tiers cutting through mist-draped cliffs is extraordinary.',
    travelTips:
      'Pair your visit with Thangkharang Park nearby for both upper canyon vistas and lower bridge views.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kynrem+Falls+Sohra+Meghalaya',
  },
  {
    id: 'wah-kaba-falls',
    name: 'Wah-Kaba Falls',
    category: 'Waterfall',
    image: '/src/assets/images/attraction_wah_kaba_1794842412156.jpg',
    imageAlt: 'Wah-Kaba Falls plunging over a cliff edge into a deep green canyon',
    approximateDistanceNote: 'Approximate drive along the Shillong–Sohra approach road',
    description:
      'A steep cliff-edge waterfall tumbling cleanly into a dramatic canyon valley along the approach corridor to Cherrapunjee.',
    whyVisit:
      'Offers an expansive valley backdrop and convenient roadside access when arriving in or departing from Sohra.',
    travelTips:
      'Ideal as a scenic stop on your drive between Shillong and Jiva Resort Cherrapunjee; morning light highlights the canyon ridges.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Wah+Kaba+Falls+Cherrapunjee+Meghalaya',
  },
  {
    id: 'garden-of-caves',
    name: 'Garden of Caves',
    category: 'Cave',
    image: '/src/assets/images/attraction_garden_of_caves_1794842413285.jpg',
    imageAlt: 'Moss-covered rock arches and forest cascades at Garden of Caves, Laitmawsiang',
    approximateDistanceNote: 'Approximate local drive to Laitmawsiang, Sohra area',
    description:
      'A tranquil nature park of mossy sandstone boulders, natural rock arches, small caverns, and gentle streams woven into a shaded forest trail.',
    whyVisit:
      'Combines easy family-friendly walking paths with scenic rock overhangs and quiet jungle waterfalls.',
    travelTips:
      'Allow 60 to 90 minutes to wander the looped stone paths comfortably without rushing.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Garden+of+Caves+Laitmawsiang+Sohra',
  },
  {
    id: 'thangkharang-park',
    name: 'Thangkharang Park',
    category: 'Park & Viewpoint',
    image: '/src/assets/images/attraction_thangkharang_park_1794842412119.jpg',
    imageAlt: 'Clifftop garden paths overlooking canyon cliffs at Thangkharang Park, Sohra',
    approximateDistanceNote: 'Approximate short drive south of Saitsohpen, Sohra',
    description:
      'A landscaped clifftop botanical park offering manicured gardens, shaded stone paths, and sweeping views across the southern canyon escarpment.',
    whyVisit:
      'Gentle walking paths make it great for all age groups, with clear vistas of Kynrem Falls and distant river plains on clear days.',
    travelTips:
      'Mid-morning or late afternoon offers pleasant temperatures and soft light for photography across the escarpment.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Thangkharang+Park+Cherrapunjee+Meghalaya',
  },
  {
    id: 'eco-park',
    name: 'Eco Park Cherrapunjee',
    category: 'Park & Viewpoint',
    image: '/src/assets/images/attraction_eco_park_1794842413484.jpg',
    imageAlt: 'Elevated stone walkways and plateau views at Eco Park Cherrapunjee',
    approximateDistanceNote: 'Approximate short drive in the Nohsngithiang / Sohra plateau area',
    description:
      'An open plateau park overlooking deep canyons and streams that feed nearby waterfalls, featuring floral beds and scenic rim walkways.',
    whyVisit:
      'Easy access for families and seniors, combining breezy plateau strolls with panoramic views of the green Sohra gorges.',
    travelTips:
      'Combine with a visit to Seven Sisters Falls nearby, and bring a sun cap on bright days or a light raincoat during misty weather.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Eco+Park+Cherrapunjee+Meghalaya',
  },
  {
    id: 'rainbow-falls',
    name: 'Rainbow Falls',
    category: 'Waterfall',
    image: '/src/assets/images/attraction_rainbow_falls_1794842414248.jpg',
    imageAlt: 'Rainbow Falls plunging into an emerald forest pool near Nongriat',
    approximateDistanceNote: 'Approximate trek beyond Nongriat Double Decker Living Root Bridge',
    description:
      'Reached via a rewarding forest hike beyond Nongriat, Rainbow Falls plunges into a crisp emerald pool where sunlight often paints a mist rainbow.',
    whyVisit:
      'A favourite for active hikers wanting a full-day Meghalaya rainforest experience beyond the living root bridges.',
    travelTips:
      'Plan this as a full-day excursion with a local guide if unfamiliar with the trail, starting early and packing snacks and hydration.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rainbow+Falls+Nongriat+Meghalaya',
  },
];
