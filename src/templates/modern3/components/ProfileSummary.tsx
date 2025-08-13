import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function ProfileSummary({ summary }: { summary: string }) {
  return (
    <section className="my-4">
      <h2 className="text-lg font-bold text-[#008080] border-b-2 border-[#008080] pb-1 mb-3">
        PROFILE SUMMARY
      </h2>
      <div className="text-sm">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
