import { ISkillItem } from '@/stores/skill.interface';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 pb-1.5 border-b-2 border-black">
    {title}
  </h2>
);

const SkillTag = ({ name }: { name: string }) => (
  <div className="border border-gray-300 px-3 py-1 rounded-sm text-center bg-gray-50">
    <p className="text-[9pt] font-medium">{name}</p>
  </div>
);

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="mt-6">
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-4">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
