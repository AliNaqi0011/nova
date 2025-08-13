import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillRating = ({ level }: { level: number }) => {
  const totalDots = 10;
  const filledDots = Math.round(level / 10);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: totalDots }).map((_, i) => (
        <div key={i} className={`w-3 h-2 ${i < filledDots ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
      ))}
    </div>
  );
};

export default function LanguageSkills({ languages }: { languages: ISkillItem[] }) {
  return (
    <section>
      <SectionTitle>LANGUAGE SKILLS</SectionTitle>
      <div className="text-xs space-y-2 mt-2">
        {languages.map((lang) => (
          <div key={lang.name} className="flex items-center">
            <p className="w-20 font-semibold">{lang.name}</p>
            <SkillRating level={lang.level} />
          </div>
        ))}
      </div>
    </section>
  );
}
