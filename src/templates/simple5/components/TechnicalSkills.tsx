import { ISkillItem } from '@/stores/skill.interface';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-bold text-[#0f2c4b] tracking-wider border-b-2 border-gray-200 pb-1 mb-4">
    {children}
  </h2>
);

export default function TechnicalSkills({ skills }: { skills: ISkillItem[] }) {
  // Group skills for display, assuming the order in the store is somewhat random
  const groupSkills = (allSkills: ISkillItem[]) => {
    const grouped: { [key: string]: string[] } = {
      SEO: [],
      Google: [],
      'Email Marketing': [],
      CMS: [],
    };
    allSkills.forEach((skill) => {
      const lowerName = skill.name.toLowerCase();
      if (
        lowerName.includes('seo') ||
        lowerName.includes('ahrefs') ||
        lowerName.includes('semrush')
      ) {
        grouped['SEO'].push(skill.name);
      } else if (
        lowerName.includes('google') ||
        lowerName.includes('analytics') ||
        lowerName.includes('tag manager')
      ) {
        grouped['Google'].push(skill.name);
      } else if (
        lowerName.includes('email') ||
        lowerName.includes('activecampaign') ||
        lowerName.includes('litmus') ||
        lowerName.includes('sendgrid')
      ) {
        grouped['Email Marketing'].push(skill.name);
      } else if (
        lowerName.includes('cms') ||
        lowerName.includes('wordpress') ||
        lowerName.includes('joomla') ||
        lowerName.includes('ghost')
      ) {
        grouped['CMS'].push(skill.name);
      }
    });
    // Filter out empty groups
    for (const key in grouped) {
      if (grouped[key].length === 0) {
        delete grouped[key];
      }
    }
    return grouped;
  };

  const groupedSkills = groupSkills(skills);

  return (
    <section className="mb-6 avoid-page-break">
      <SectionTitle>TECHNICAL SKILLS</SectionTitle>
      <div className="space-y-3 text-xs">
        {Object.entries(groupedSkills).map(([groupName, skillItems]) => (
          <div key={groupName}>
            <h4 className="font-bold text-gray-800">{groupName}</h4>
            <p className="text-gray-600">{skillItems.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
