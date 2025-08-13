import { Heart } from 'lucide-react';

interface InterestItem {
  title: string;
  details: string;
}

interface InterestsProps {
  interests: {
    title: string;
    items: InterestItem[];
  };
}

export default function Interests({ interests }: InterestsProps) {
  return (
    <section>
      <h2 className="flex items-center gap-3 text-lg font-bold border-b-2 pb-2 mb-4">
        <Heart />
        {interests.title.toUpperCase()}
      </h2>
      <div className="bg-gray-100 p-4 space-y-3">
        {interests.items.map((item, index) => (
          <div key={index}>
            <h3 className="font-bold text-sm">{item.title}</h3>
            <p className="text-xs text-gray-600">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
