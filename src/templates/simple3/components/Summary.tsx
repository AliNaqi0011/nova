import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function Summary({ summary }: { summary: string }) {
  return (
    <section className="mt-6 avoid-page-break">
      <SectionTitle>Summary</SectionTitle>
      <div className="text-sm text-gray-600 mt-2">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
