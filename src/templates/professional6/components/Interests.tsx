import { Star, Heart, Tv, Gamepad2 } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Surfing: <Star size={12} />,
  'Martial Arts': <Heart size={12} />,
  'Community Service': <Tv size={12} />,
  Blogging: <Gamepad2 size={12} />,
};

const getInterestIcon = (interest: string) => {
  return iconMap[interest] || <Star size={12} />;
};

export default function Interests({ interests }: { interests: string[] }) {
  return (
    <div>
      <h3 className="text-base font-bold uppercase mb-2">INTERESTS</h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        {interests.slice(0, 4).map((interest) => (
          <div key={interest} className="flex items-center gap-2">
            {getInterestIcon(interest)}
            <span>{interest}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
