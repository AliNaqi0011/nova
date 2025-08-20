import SectionTitle from './SectionTitle';
import { BrainCircuit, Globe, Clapperboard, Brush, Mountain, Footprints } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  'artificial intelligence': <BrainCircuit size={16} />,
  'virtual reality': <Globe size={16} />,
  chess: <Clapperboard size={16} />,
  travelling: <Brush size={16} />,
  painting: <Mountain size={16} />,
  'trail running': <Footprints size={16} />,
};

const getInterestIcon = (interest: string): React.ReactNode => {
  const lowerInterest = interest.toLowerCase();
  for (const key in iconMap) {
    if (lowerInterest.includes(key)) {
      return iconMap[key];
    }
  }
  return <BrainCircuit size={16} />;
};

export default function Interests({ interests }: { interests: string[] }) {
  return (
    <section>
      <SectionTitle icon={getInterestIcon(interests[0] || '')} title="INTERESTS" />
      <div className="flex flex-wrap gap-2 mt-2">
        {interests.map((interest) => (
          <div
            key={interest}
            className="border border-gray-300 rounded-md px-2 py-1 text-center text-xs flex items-center gap-2"
          >
            {getInterestIcon(interest)}
            <span>{interest}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
