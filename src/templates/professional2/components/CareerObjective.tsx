import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function CareerObjective({ objective }: { objective: string }) {
  return (
    <section>
      <h2 className="text-base font-bold text-gray-800 tracking-wider border-b-2 border-gray-300 pb-1 mb-3">
        CAREER OBJECTIVE
      </h2>
      <div className="text-xs text-gray-600">
        <HTMLRenderer htmlString={objective} />
      </div>
    </section>
  );
}
