import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ResilientImage({ src, alt, className = '', priority = false }: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 text-slate-600 p-4 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Mountain className="w-7 h-7 text-blue-700 mb-2" aria-hidden="true" />
        <span className="text-xs font-medium text-slate-700 max-w-[22ch]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
