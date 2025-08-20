import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Summary({ summary }: { summary: string }) {
  return (
    <section className="bg-[#003d46] text-white p-6">
      <div className="text-sm">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
