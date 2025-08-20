import SectionTitle from './SectionTitle';

const ItemTag = ({ name }: { name: string }) => (
  <div className="border border-gray-300 px-3 py-1 text-center rounded-sm">
    <p className="text-xs font-medium">{name}</p>
  </div>
);

export default function Licensure({ items }: { items: string[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="LICENSURE / TRAINING" />
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <ItemTag key={index} name={item} />
        ))}
      </div>
    </section>
  );
}
