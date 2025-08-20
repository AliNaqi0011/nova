import SectionTitle from './SectionTitle';
import { Orbit, Leaf, Camera, Recycle } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Astronomy: <Orbit size={20} />,
  Gardening: <Leaf size={20} />,
  Photography: <Camera size={20} />,
  Sustainability: <Recycle size={20} />,
};

const getInterestIcon = (interest: string): React.ReactNode => {
  for (const key in iconMap) {
    if (interest.toLowerCase().includes(key.toLowerCase())) {
      return iconMap[key];
    }
  }
  return <Orbit size={20} />; // Default
};

export default function Interests({ interests }: { interests: string[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="INTERESTS" />
      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-gray-700">
        {interests.slice(0, 4).map((interest) => (
          <div key={interest} className="flex items-center gap-2">
            <div className="text-[#4a8275]">{getInterestIcon(interest)}</div>
            <span>{interest}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
