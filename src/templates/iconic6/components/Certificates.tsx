import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export default function Certificates({ awards }: { awards: IAwardItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="CERTIFICATES" />
      <div className="space-y-2">
        {awards.map((award) => (
          <div key={award.id} className="text-xs">
            <h3 className="font-bold text-gray-800">{award.title}</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <span>
                {award.awarder} - {dateParser(award.date, 'YYYY')}
              </span>
              <a href="#" className="text-[#469587]">
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
