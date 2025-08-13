import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Profile({ summary }: { summary: string }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 tracking-wider mb-3">PROFESSIONAL PROFILE</h2>
      <div className="text-xs text-gray-600 leading-relaxed">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
