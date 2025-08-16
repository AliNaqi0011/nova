export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold text-gray-500 tracking-wider border-b border-gray-200 pb-1">
      {children}
    </h2>
  );
}
