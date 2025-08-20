import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const LanguageRating = ({ level }: { level: number }) => {
  const totalDots = 5;
  const filledDots = Math.round(level / 20);

  return (
    <div className="flex gap-1">
      {Array.from({ length: totalDots }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full border border-[#4a8275] ${i < filledDots ? 'bg-[#4a8275]' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default function Languages({ languages }: { languages: ISkillItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="LANGUAGES" />
      <div className="space-y-2">
        {languages.map((lang) => (
          <div key={lang.name} className="flex justify-between items-center text-xs">
            <p className="font-medium text-gray-700">{lang.name}</p>
            <LanguageRating level={lang.level} />
          </div>
        ))}
      </div>
    </section>
  );
}
