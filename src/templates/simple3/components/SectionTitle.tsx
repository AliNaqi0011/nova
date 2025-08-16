export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-gray-800 tracking-wide border-b-2 border-gray-200 pb-1">
      {children}
    </h2>
  );
}
