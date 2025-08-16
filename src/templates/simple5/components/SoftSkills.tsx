import { ISkillItem } from '@/stores/skill.interface';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-bold text-[#0f2c4b] tracking-wider border-b-2 border-gray-200 pb-1 mb-4">
    {children}
  </h2>
);

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-gray-200 px-3 py-1 text-center rounded-sm">
    <p className="text-xs font-medium text-gray-700">{name}</p>
  </div>
);

export default function SoftSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="mb-6 avoid-page-break">
      <SectionTitle>SOFT SKILLS</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
