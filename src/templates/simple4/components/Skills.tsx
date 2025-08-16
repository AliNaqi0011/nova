import { ISkillItem } from '@/stores/skill.interface';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold text-gray-500 tracking-wider border-b border-gray-200 pb-1 mb-3">
    {title}
  </h2>
);

const SkillTag = ({ name }: { name: string }) => (
  <div className="border border-gray-200 px-3 py-1 text-center">
    <p className="text-[9pt] font-medium">{name}</p>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="mt-4 avoid-page-break">
      <SectionTitle title="SKILLS" />
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
