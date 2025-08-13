import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function AboutMe({ summary }: { summary: string }) {
  return (
    <section>
      <h2 className="text-sm font-bold uppercase text-[#0c4a6e] border-b-2 border-gray-300 pb-1 mb-2">
        About Me
      </h2>
      <div className="text-xs text-gray-600">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
