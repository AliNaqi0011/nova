import { IAwardItem } from '@/stores/awards.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { Check, Star, Zap, TrendingUp } from 'lucide-react';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold text-gray-500 tracking-wider border-b border-gray-200 pb-1 mb-3">
    {title}
  </h2>
);

const iconMap: { [key: string]: React.ReactNode } = {
  check: <Check size={14} className="text-white" />,
  star: <Star size={14} className="text-white" />,
  zap: <Zap size={14} className="text-white" />,
  'trending-up': <TrendingUp size={14} className="text-white" />,
};

const getIcon = (title: string, index: number) => {
  const icons = Object.values(iconMap);
  return icons[index % icons.length];
};

export default function KeyAchievements({ awards }: { awards: IAwardItem[] }) {
  return (
    <section className="mb-4 avoid-page-break">
      <SectionTitle title="KEY ACHIEVEMENTS" />
      <div className="space-y-3 mt-2">
        {awards.slice(0, 4).map((award, index) => (
          <div key={award.id} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-md bg-[#2dd4bf] flex items-center justify-center mt-0.5">
              {getIcon(award.title, index)}
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-[10pt] leading-tight">{award.title}</h3>
              <div className="text-[9.5pt] text-gray-600 leading-snug">
                <HTMLRenderer htmlString={award.summary} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
