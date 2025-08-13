import { ISkillItem } from '@/stores/skill.interface';

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-2">
    <p className="text-xs font-semibold mb-1">{name}</p>
    <div className="w-full bg-gray-300 rounded-full h-1.5">
      <div className="bg-[#5f9ea0] h-1.5 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

export default function Skills({ skills, title }: { skills: ISkillItem[]; title: string }) {
  return (
    <section>
      <h3 className="font-bold text-base uppercase text-gray-800 border-b-2 border-gray-300 pb-1 mb-3">
        {title}
      </h3>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </section>
  );
}
