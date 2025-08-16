import SectionTitle from './SectionTitle';
import { Users, Star } from 'lucide-react';

interface Passion {
  name: string;
  summary: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
  leadership: <Users size={12} className="text-[#0f2c4b]" />,
  community: <Star size={12} className="text-[#0f2c4b]" />,
};

const getIcon = (title: string) => {
  const lowerCaseTitle = title.toLowerCase();
  if (lowerCaseTitle.includes('leadership')) return iconMap['leadership'];
  if (lowerCaseTitle.includes('community')) return iconMap['community'];
  return iconMap['star'];
};

export default function Passions({ passions }: { passions: Passion[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle>PASSIONS</SectionTitle>
      <div className="space-y-2 mt-2">
        {passions.map((passion, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="mt-0.5">{getIcon(passion.name)}</div>
            <div>
              <h3 className="font-bold text-gray-800 text-[10pt] leading-tight">{passion.name}</h3>
              <p className="text-[9.5pt] text-gray-600 leading-snug">{passion.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
