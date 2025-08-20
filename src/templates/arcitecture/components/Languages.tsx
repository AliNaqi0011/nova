import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';
import { Languages as LanguageIcon } from 'lucide-react';

const SkillRating = ({ level }: { level: number }) => {
  const totalDots = 5;
  const filledDots = Math.round(level / 20);

  return (
    <div className="flex gap-1">
      {Array.from({ length: totalDots }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${i < filledDots ? 'bg-[#1e3a4c]' : 'bg-gray-300'}`}
        ></div>
      ))}
    </div>
  );
};

export default function Languages({ languages }: { languages: ISkillItem[] }) {
  return (
    <section>
      <SectionTitle icon={<LanguageIcon size={16} />} title="LANGUAGES" />
      <div className="mt-2 space-y-1">
        {languages.map((lang) => (
          <div key={lang.name} className="flex justify-between items-center text-xs">
            <p>{lang.name}</p>
            <SkillRating level={lang.level} />
          </div>
        ))}
      </div>
    </section>
  );
}
