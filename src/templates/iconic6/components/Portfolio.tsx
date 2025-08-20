import { IVolunteeringItem } from '@/stores/volunteering.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export default function Portfolio({ volunteer }: { volunteer: IVolunteeringItem[] }) {
  const portfolio = volunteer[0]; // Assuming first volunteer item is the portfolio
  if (!portfolio) return null;

  return (
    <section className="avoid-page-break">
      <SectionTitle title="PORTFOLIO" />
      <h3 className="font-bold text-sm text-gray-800">{portfolio.position}</h3>
      <a
        href={portfolio.url || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs text-[#469587] font-semibold hover:underline"
      >
        <span>{portfolio.url.replace('https://', '')}</span>
        <ExternalLink size={12} />
      </a>
      <div className="prose prose-sm max-w-none text-gray-600 mt-1">
        <p className="text-[9pt] font-semibold text-green-600">Achievements</p>
        <ul className="list-disc pl-5 space-y-1 text-[9pt] leading-snug">
          <HTMLRenderer htmlString={portfolio.summary} />
        </ul>
      </div>
    </section>
  );
}
