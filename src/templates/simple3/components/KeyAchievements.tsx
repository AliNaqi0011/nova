import { IAwardItem } from '@/stores/awards.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function KeyAchievements({ awards }: { awards: IAwardItem[] }) {
  if (awards.length === 0) return null;
  return (
    <section className="mt-6">
      <SectionTitle>Key Achievements</SectionTitle>
      <div className="grid grid-cols-3 gap-6 mt-2">
        {awards.slice(0, 3).map((award) => (
          <div key={award.id}>
            <h3 className="font-bold text-blue-600 text-sm">{award.title}</h3>
            <div className="text-sm text-gray-600 mt-1">
              <HTMLRenderer htmlString={award.summary} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
