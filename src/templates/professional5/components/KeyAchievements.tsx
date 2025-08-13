import { IAwardItem } from '@/stores/awards.interface';
import { Check, Trophy, Zap } from 'lucide-react';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 pb-1.5 border-b-2 border-black">
    {title}
  </h2>
);

const iconMap: { [key: string]: React.ReactNode } = {
  'User Engagement': <Check size={18} className="text-white" />,
  'Conversion Rate': <Trophy size={18} className="text-white" />,
  Compliance: <Zap size={18} className="text-white" />,
};

const getIcon = (title: string) => {
  if (title.includes('User Engagement')) return iconMap['User Engagement'];
  if (title.includes('Conversion Rate')) return iconMap['Conversion Rate'];
  if (title.includes('Compliance')) return iconMap['Compliance'];
  return <Trophy size={18} className="text-white" />;
};

export default function KeyAchievements({ awards }: { awards: IAwardItem[] }) {
  return (
    <section>
      <SectionTitle title="Key Achievements" />
      <div className="mt-4 space-y-4">
        {awards.map((award) => (
          <div key={award.id} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4a89a8] flex items-center justify-center mt-0.5">
              {getIcon(award.title)}
            </div>
            <div>
              <h4 className="font-bold text-[10pt]">{award.title}</h4>
              <p className="text-[9pt] text-gray-600 leading-snug">
                {award.summary.replace('* ', '')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
