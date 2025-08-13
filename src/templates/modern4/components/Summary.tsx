import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Summary({ summary }: { summary: string }) {
  return (
    <section className="text-xs text-gray-600 border-b-2 border-gray-100 pb-4">
      <HTMLRenderer htmlString={summary} />
    </section>
  );
}
