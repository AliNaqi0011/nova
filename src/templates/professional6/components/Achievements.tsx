import { IAwardItem } from '@/stores/awards.interface';
import { Star } from 'lucide-react';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Achievements({ achievements }: { achievements: IAwardItem[] }) {
  return (
    <div>
      <h3 className="text-base font-bold uppercase mb-2">ACHIEVEMENTS</h3>
      <div className="space-y-2">
        {achievements.map((item, index) => (
          <div key={index} className="flex items-start gap-2 text-xs">
            <Star size={14} className="text-white mt-0.5 flex-shrink-0" />
            <div className="prose prose-sm max-w-none text-white">
              <HTMLRenderer htmlString={item.summary} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
