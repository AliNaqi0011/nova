import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const LanguageRating = ({ level }: { level: number }) => {
  const totalDots = 5;
  const filledDots = Math.round(level / 20);

  return (
    <div className="flex gap-1.5">
      {Array.from({ length: totalDots }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i < filledDots ? 'bg-[#d74955]' : 'border border-[#d74955]'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default function Languages({ languages }: { languages: ISkillItem[] }) {
  return (
    <section>
      <SectionTitle>LANGUAGES</SectionTitle>
      <div className="mt-2.5 space-y-2">
        {languages.map((lang) => (
          <div key={lang.name} className="flex justify-between items-center text-sm">
            <p>{lang.name}</p>
            <LanguageRating level={lang.level} />
          </div>
        ))}
      </div>
    </section>
  );
}
