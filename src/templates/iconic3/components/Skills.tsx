import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';
import { ThumbsUp } from 'lucide-react';

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

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section>
      <SectionTitle icon={<ThumbsUp size={16} />} title="SKILLS" />
      <div className="mt-2 space-y-1">
        {skills.map((skill) => (
          <div key={skill.name} className="flex justify-between items-center text-xs">
            <p>{skill.name}</p>
            <SkillRating level={skill.level} />
          </div>
        ))}
      </div>
    </section>
  );
}
