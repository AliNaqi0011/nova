import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

const SectionTitle = ({ title }: { title: string }) => (
  <div className="bg-gray-100 p-2 mb-2">
    <h2 className="text-sm font-bold uppercase text-[#2c3e50]">{title}</h2>
  </div>
);

export default function Objective({ objective }: { objective: string }) {
  return (
    <section>
      <SectionTitle title="Objective" />
      <div className="text-xs">
        <HTMLRenderer htmlString={objective} />
      </div>
    </section>
  );
}
