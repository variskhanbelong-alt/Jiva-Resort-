import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
}

export function PageHeader({ kicker, title, subtitle, breadcrumbLabel }: PageHeaderProps) {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
          <Link to="/" className="hover:text-blue-700 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          <span className="text-slate-800 font-medium">{breadcrumbLabel}</span>
        </nav>

        <p className="text-xs font-semibold text-blue-700 tracking-wide mb-2">{kicker}</p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance max-w-3xl">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
