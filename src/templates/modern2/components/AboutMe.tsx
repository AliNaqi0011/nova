import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import SectionTitle from './SectionTitle';

export default function AboutMe({ summary }: { summary: string }) {
  return (
    <section>
      <SectionTitle>About Me</SectionTitle>
      <div className="text-sm text-gray-300">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
}
