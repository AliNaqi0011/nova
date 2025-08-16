import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold text-gray-500 tracking-wider border-b border-gray-200 pb-1 mb-3">
    {title}
  </h2>
);

export default function Summary({ summary }: { summary: string }) {
  return (
    <section className="mb-4 avoid-page-break">
      <SectionTitle title="SUMMARY" />
      <div className="text-[9pt] text-gray-700 leading-relaxed mt-2">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
