import { IAwardItem } from '@/stores/awards.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';
import { Check, Star, Trophy, Zap } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  check: <Check size={12} className="text-[#0f2c4b]" />,
  star: <Star size={12} className="text-[#0f2c4b]" />,
  trophy: <Trophy size={12} className="text-[#0f2c4b]" />,
  zap: <Zap size={12} className="text-[#0f2c4b]" />,
};

const getIcon = (title: string) => {
  const lowerCaseTitle = title.toLowerCase();
  if (lowerCaseTitle.includes('launch') || lowerCaseTitle.includes('performer'))
    return iconMap['trophy'];
  if (lowerCaseTitle.includes('growth')) return iconMap['zap'];
  if (lowerCaseTitle.includes('award')) return iconMap['star'];
  return iconMap['check'];
};

export default function KeyAchievements({ awards }: { awards: IAwardItem[] }) {
  if (awards.length === 0) return null;

  return (
    <section className="avoid-page-break">
      <SectionTitle>KEY ACHIEVEMENTS</SectionTitle>
      <div className="space-y-2 mt-2">
        {awards.map((award) => (
          <div key={award.id} className="flex items-start gap-2">
            <div className="mt-0.5">{getIcon(award.title)}</div>
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
