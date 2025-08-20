import SectionTitle from './SectionTitle';
import { Code } from 'lucide-react';

interface Skills {
  [key: string]: string;
}

export default function TechnicalSkills({ skills }: { skills: Skills }) {
  return (
    <section>
      <SectionTitle icon={<Code size={20} />} title="TECHNICAL SKILLS" />
      <div className="space-y-3 mt-2">
        {Object.entries(skills).map(([category, list]) => {
          if (!list) return null;
          return (
            <div key={category} className="text-xs">
              <h3 className="font-bold">{category}:</h3>
              <p>{list}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
