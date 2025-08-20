import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const SkillTag = ({ name }: { name: string }) => (
  <div className="bg-gray-200 text-gray-700 px-3 py-1 text-center">
    <p className="text-xs font-medium">{name}</p>
  </div>
);

export default function AreasOfExpertise({ skills }: { skills: ISkillItem[] }) {
  return (
    <section className="mt-6 avoid-page-break">
      <SectionTitle title="AREAS OF EXPERTISE" />
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <SkillTag key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
