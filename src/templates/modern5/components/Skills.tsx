import { ISkillItem } from '@/stores/skill.interface';
import { Wrench } from 'lucide-react';

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div>
    <p className="text-xs font-bold mb-1">
      {name} ({level}/100)
    </p>
    <div className="w-full bg-gray-300 h-2">
      <div className="bg-black h-2" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  // We can only show a certain number of skills, e.g., 6, due to the layout
  const skillsToShow = skills.slice(0, 6);

  return (
    <section>
      <h2 className="flex items-center gap-3 text-lg font-bold border-b-2 pb-2 mb-4">
        <Wrench />
        SKILLS
      </h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {skillsToShow.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
}
