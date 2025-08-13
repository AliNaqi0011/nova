import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';
import { Award } from 'lucide-react';

export default function Achievements({ awards }: { awards: IAwardItem[] }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 tracking-wider mb-4">ACHIEVEMENTS</h2>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <div key={index} className="flex gap-4">
            <div className="text-[#5f9ea0] mt-1">
              <Award size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">
                {dateParser(award.date, 'YYYY')} | {award.title}
              </p>
              <p className="text-xs text-gray-600">{award.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
