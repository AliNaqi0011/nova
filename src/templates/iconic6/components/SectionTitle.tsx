export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-xs font-bold text-gray-500 tracking-widest border-b-2 border-gray-100 pb-1.5 mb-3">
      {title}
    </h2>
  );
}
