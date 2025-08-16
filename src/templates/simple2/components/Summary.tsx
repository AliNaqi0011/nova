import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function Summary({ summary }: { summary: string }) {
  return (
    <section>
      <SectionTitle>SUMMARY</SectionTitle>
      <div className="text-[9.5pt] text-gray-700 leading-relaxed">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
