import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function About({ summary }: { summary: string }) {
  return (
    <section>
      <SectionTitle>About</SectionTitle>
      <div className="text-xs">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
