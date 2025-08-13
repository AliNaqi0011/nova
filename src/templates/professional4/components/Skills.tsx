import { ISkillItem } from '@/stores/skill.interface';

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section>
      <h3 className="font-bold text-sm uppercase text-[#2c3e50] mb-3">SKILLS</h3>
      <ul className="list-disc list-inside text-xs space-y-1">
        {skills.slice(0, 3).map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
}
