import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-[#d74955] text-white px-3 py-1 text-center">
    <p className="text-[9pt] font-medium">{name}</p>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section>
      <SectionTitle>SKILLS</SectionTitle>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
