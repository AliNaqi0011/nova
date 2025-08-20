import { IAwardItem } from '@/stores/awards.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function Awards({ awards }: { awards: IAwardItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="AWARDS" />
      <div className="space-y-3">
        {awards.map((award) => (
          <div key={award.id} className="text-xs">
            <h3 className="font-bold text-gray-800 leading-snug">{award.title}</h3>
            <div className="flex items-start gap-2 text-gray-600 mt-1">
              <span className="text-[#4a8275] font-bold mt-px">•</span>
              <div className="prose prose-sm max-w-none">
                <HTMLRenderer htmlString={award.summary} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
