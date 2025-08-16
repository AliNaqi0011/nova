import { IAwardItem } from '@/stores/awards.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function KeyAchievements({ awards }: { awards: IAwardItem[] }) {
  const achievements = awards.slice(0, 2);
  if (achievements.length === 0) return null;
  return (
    <section className="mt-5">
      <SectionTitle>KEY ACHIEVEMENTS</SectionTitle>
      <div className="grid grid-cols-2 gap-6 mt-2">
        {achievements.map((award) => (
          <div key={award.id}>
            <h3 className="font-bold text-[#dd8045] text-sm">{award.title}</h3>
            <div className="text-xs text-gray-600 mt-1">
              <HTMLRenderer htmlString={award.summary} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
