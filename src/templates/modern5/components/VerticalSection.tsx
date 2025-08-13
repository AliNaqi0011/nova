import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { Star } from 'lucide-react';

export default function VerticalSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="flex gap-4 min-w-0">
      <h2 className="bg-black text-white text-sm font-bold writing-vertical-rl transform rotate-180 flex items-center justify-center p-2">
        {title}
      </h2>
      <div className="flex-grow space-y-2 min-w-0">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 text-xs text-gray-600">
            <Star size={12} className="mt-0.5 flex-shrink-0" />
            <div className="prose prose-sm max-w-none">
              <HTMLRenderer htmlString={item} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
