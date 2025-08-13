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

export default function Skills({ skills, title }: { skills: ISkillItem[]; title: string }) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div className="text-xs space-y-2 mt-2">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center">
            <p className="w-28 font-semibold">{skill.name}</p>
            <SkillRating level={skill.level} />
          </div>
        ))}
      </div>
    </section>
  );
}
