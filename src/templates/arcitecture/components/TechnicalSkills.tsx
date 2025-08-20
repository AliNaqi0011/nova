import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';
import { Wrench } from 'lucide-react';

const SkillGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="font-bold text-gray-800">{title}</h4>
    <p className="text-xs text-gray-600">{items.join(', ')}</p>
  </div>
);

export default function TechnicalSkills({ skills }: { skills: ISkillItem[] }) {
  // Simple grouping logic, can be enhanced
  const groups: { [key: string]: string[] } = {
    Graphics: [],
    'Bim & 3D Modeling': [],
    Platforms: [],
    Other: [],
  };

  skills.forEach((skill) => {
    const name = skill.name.toLowerCase();
    if (
      name.includes('draft') ||
      name.includes('sketch') ||
      name.includes('adobe') ||
      name.includes('arcgis')
    ) {
      groups['Graphics'].push(skill.name);
    } else if (name.includes('sketchup') || name.includes('revit') || name.includes('podium')) {
      groups['Bim & 3D Modeling'].push(skill.name);
    } else if (
      name.includes('windows') ||
      name.includes('osx') ||
      name.includes('office') ||
      name.includes('drive')
    ) {
      groups['Platforms'].push(skill.name);
    } else {
      groups['Other'].push(skill.name);
    }
  });

  return (
    <section>
      <SectionTitle icon={<Wrench size={16} />} title="TECHNICAL SKILLS" />
      <div className="mt-2 space-y-2 text-xs">
        {Object.entries(groups)
          .filter(([, items]) => items.length > 0)
          .map(([title, items]) => (
            <SkillGroup key={title} title={title} items={items} />
          ))}
      </div>
    </section>
  );
}
