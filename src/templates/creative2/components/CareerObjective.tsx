import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function CareerObjective({ objective }: { objective: string }) {
  return (
    <section>
      <SectionTitle>CAREER OBJECTIVE</SectionTitle>
      <div className="text-xs mt-2">
        <HTMLRenderer htmlString={objective} />
      </div>
    </section>
  );
}
