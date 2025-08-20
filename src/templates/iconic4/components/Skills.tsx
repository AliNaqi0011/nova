import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-[#0f2c4b] text-white px-4 py-1.5 text-center rounded-sm">
    <p className="text-[10pt] font-medium">{name}</p>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="my-5">
      <SectionTitle>SKILLS</SectionTitle>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
