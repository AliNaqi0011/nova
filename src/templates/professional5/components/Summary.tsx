import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 pb-1.5 border-b-2 border-black">
    {title}
  </h2>
);

export default function Summary({ summary }: { summary: string }) {
  return (
    <section className="mt-6">
      <SectionTitle title="Summary" />
      <div className="mt-3 text-[10pt] text-gray-700 leading-relaxed">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
