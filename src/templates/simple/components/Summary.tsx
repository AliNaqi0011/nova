import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function Summary({ summary }: { summary: string }) {
  return (
    <section className="mt-4">
      <SectionTitle>SUMMARY</SectionTitle>
      <div className="text-xs text-gray-600 mt-2">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
