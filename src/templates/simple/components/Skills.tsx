import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

export default function Skills({ skills }: { skills: ISkillItem[] }) {
  if (skills.length === 0) return null;
  return (
    <section className="mt-5">
      <SectionTitle>SKILLS</SectionTitle>
      <p className="text-sm text-gray-600 mt-2">{skills.map((skill) => skill.name).join(', ')}</p>
    </section>
  );
}
