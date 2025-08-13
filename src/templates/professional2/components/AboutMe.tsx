import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function AboutMe({ summary }: { summary: string }) {
  return (
    <section>
      <h2 className="text-lg font-bold border-b-2 border-white pb-1 mb-2">ABOUT ME</h2>
      <div className="text-xs">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
