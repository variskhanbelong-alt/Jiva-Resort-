import {
  Coffee,
  Utensils,
  Bell,
  Waves,
  Flower2,
  Droplets,
  Dumbbell,
  Flag,
  Gamepad2,
  Wifi,
  Car,
  Clock,
  Sparkles,
  Shirt,
  Bus,
  Users,
  PawPrint,
  Accessibility,
  Globe,
  Wind,
  Bath,
  Flame,
  Soup,
  ConciergeBell,
} from 'lucide-react';

interface AmenityIconProps {
  iconKey: string;
  className?: string;
}

export function AmenityIcon({ iconKey, className = 'w-5 h-5' }: AmenityIconProps) {
  const props = { className, 'aria-hidden': true as const };

  switch (iconKey) {
    case 'coffee':
      return <Coffee {...props} />;
    case 'utensils':
      return <Utensils {...props} />;
    case 'concierge':
      return <ConciergeBell {...props} />;
    case 'soup':
      return <Soup {...props} />;
    case 'flame':
      return <Flame {...props} />;
    case 'bell':
      return <Bell {...props} />;
    case 'waves':
      return <Waves {...props} />;
    case 'flower':
      return <Flower2 {...props} />;
    case 'droplets':
      return <Droplets {...props} />;
    case 'dumbbell':
      return <Dumbbell {...props} />;
    case 'flag':
      return <Flag {...props} />;
    case 'gamepad':
      return <Gamepad2 {...props} />;
    case 'wifi':
      return <Wifi {...props} />;
    case 'car':
      return <Car {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'shirt':
      return <Shirt {...props} />;
    case 'bus':
      return <Bus {...props} />;
    case 'users':
      return <Users {...props} />;
    case 'paw':
      return <PawPrint {...props} />;
    case 'accessibility':
      return <Accessibility {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'wind':
      return <Wind {...props} />;
    case 'bath':
      return <Bath {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}
