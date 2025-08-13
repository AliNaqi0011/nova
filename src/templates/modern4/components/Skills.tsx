import { ISkillItem } from '@/stores/skill.interface';

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-2">
    <p className="text-xs font-semibold text-gray-700">{name}</p>
    <div className="w-full bg-gray-200 h-1.5 mt-1">
      <div className="bg-[#00A9E8] h-1.5" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="mt-6">
      <h2 className="text-sm font-bold uppercase text-[#0c4a6e] border-b-2 border-gray-300 pb-1 mb-2">
        Skills
      </h2>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </section>
  );
}
