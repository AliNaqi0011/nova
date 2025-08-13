import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function ProfessionalSummary({ summary }: { summary: string }) {
  return (
    <section className="mb-4">
      <SectionTitle title="PROFESSIONAL SUMMARY" />
      <div className="text-xs text-gray-600 leading-relaxed">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
