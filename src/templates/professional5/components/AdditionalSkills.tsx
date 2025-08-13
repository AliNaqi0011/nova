import { ISkillItem } from '@/stores/skill.interface';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 pb-1.5 border-b-2 border-black">
    {title}
  </h2>
);

const SkillTag = ({ name }: { name: string }) => (
  <div className="border border-gray-300 px-3 py-1 rounded-sm text-center">
    <p className="text-[9pt] font-medium">{name}</p>
  </div>
);

export default function AdditionalSkills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section>
      <SectionTitle title="Additional Skills" />
      <div className="grid grid-cols-3 gap-x-4 gap-y-2 mt-4">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
