import { ISkillItem } from '@/stores/skill.interface';

const SkillRating = ({ level }: { level: number }) => {
  const totalDots = 5;
  const filledDots = Math.round(level / 20);

  return (
    <div className="flex gap-1">
      {Array.from({ length: totalDots }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${i < filledDots ? 'bg-white' : 'border-2 border-white'}`}
        ></div>
      ))}
    </div>
  );
};
export default function Language({ languages }: { languages: ISkillItem[] }) {
  return (
    <section>
      <h2 className="text-base font-bold pb-1 mb-2 border-b-2 border-white">Language</h2>
      {languages.map((lang) => (
        <div key={lang.name} className="flex justify-between items-center mb-2">
          <p className="text-xs">{lang.name}</p>
          <SkillRating level={lang.level} />
        </div>
      ))}
    </section>
  );
}
