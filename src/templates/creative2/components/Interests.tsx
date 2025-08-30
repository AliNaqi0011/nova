import SectionTitle from './SectionTitle';
import { Headphones, Circle, Gamepad2, Camera } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Headphones: <Headphones size={28} />,
  Basketball: <Circle size={28} />,
  'Game Controller': <Gamepad2 size={28} />,
  Camera: <Camera size={28} />,
};

export default function Interests({ interests }: { interests: string[] }) {
  return (
    <section>
      <SectionTitle>INTERESTS</SectionTitle>
      <div className="flex gap-6 mt-2 text-gray-600">
        {interests.map((interest) => (
          <div key={interest}>{iconMap[interest] || <Headphones size={28} />}</div>
        ))}
      </div>
    </section>
  );
}
