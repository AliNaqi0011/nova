import SectionTitle from './SectionTitle';

export default function ProficientSkills({ skills }: { skills: string[] }) {
  return (
    <section>
      <SectionTitle>PROFICIENT SKILLS</SectionTitle>
      <ul className="text-xs mt-2 list-disc pl-4 space-y-1">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
