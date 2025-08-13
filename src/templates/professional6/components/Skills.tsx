import { ISkillItem } from '@/stores/skill.interface';

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-2 text-xs">
    <div className="flex justify-between items-center mb-0.5">
      <p>{name}</p>
      <p>{level}/10</p>
    </div>
    <div className="w-full bg-gray-500 h-1.5 rounded-full">
      <div className="bg-white h-1.5 rounded-full" style={{ width: `${level * 10}%` }}></div>
    </div>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <div>
      <h3 className="text-base font-bold uppercase mb-2">SKILLS</h3>
      {skills.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={Math.round(skill.level / 10)} />
      ))}
    </div>
  );
}
