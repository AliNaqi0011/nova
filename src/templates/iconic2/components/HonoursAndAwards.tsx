import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';

export default function HonoursAndAwards({ awards }: { awards: IAwardItem[] }) {
  return (
    <section>
      <SectionTitle>HONOURS AND AWARDS</SectionTitle>
      <div className="space-y-3 mt-2">
        {awards.map((award) => (
          <div key={award.id}>
            <h3 className="font-bold text-gray-800 text-[10pt] leading-tight">
              {award.title} ({dateParser(award.date, 'YYYY')})
            </h3>
            <p className="text-[9.5pt] text-gray-600 leading-snug">{award.awarder}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
