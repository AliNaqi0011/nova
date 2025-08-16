import { Gamepad2, Music, Plane, Cpu } from 'lucide-react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-bold text-[#0f2c4b] tracking-wider border-b-2 border-gray-200 pb-1 mb-4">
    {children}
  </h2>
);

const iconMap: { [key: string]: React.ReactNode } = {
  'video games': <Gamepad2 size={20} />,
  music: <Music size={20} />,
  'renewable energy': <Plane size={20} />,
  'artificial intelligence': <Cpu size={20} />,
};

const getInterestIcon = (interest: string): React.ReactNode => {
  const lowerInterest = interest.toLowerCase();
  for (const key in iconMap) {
    if (lowerInterest.includes(key)) {
      return iconMap[key];
    }
  }
  return <Gamepad2 size={20} />; // Default icon
};

export default function Interests({ interests }: { interests: string[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle>INTERESTS</SectionTitle>
      <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs mt-3">
        {interests.slice(0, 4).map((interest) => (
          <div key={interest} className="flex items-center gap-2 text-gray-700">
            {getInterestIcon(interest)}
            <span>{interest}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
