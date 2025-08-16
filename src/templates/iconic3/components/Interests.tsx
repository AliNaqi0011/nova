import SectionTitle from './SectionTitle';
import { Globe } from 'lucide-react';

const InterestTag = ({ name }: { name: string }) => (
  <div className="border border-gray-300 rounded-md px-2 py-0.5 text-center text-xs">{name}</div>
);

export default function Interests({ interests }: { interests: string[] }) {
  return (
    <section>
      <SectionTitle icon={<Globe size={16} />} title="INTERESTS" />
      <div className="flex flex-wrap gap-2 mt-2">
        {interests.map((interest) => (
          <InterestTag key={interest} name={interest} />
        ))}
      </div>
    </section>
  );
}
