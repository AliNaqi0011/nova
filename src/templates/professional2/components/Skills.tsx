import { ISkillItem } from '@/stores/skill.interface';

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-2">
    <p className="text-xs font-semibold text-white">{name}</p>
    <div className="w-full bg-gray-500 h-1.5 mt-1 rounded-full">
      <div className="bg-white h-1.5 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section>
      <h2 className="text-lg font-bold border-b-2 border-white pb-1 mb-3">SKILLS</h2>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level || 75} />
      ))}
    </section>
  );
}
