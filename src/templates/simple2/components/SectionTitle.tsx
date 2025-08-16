export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-bold text-[#374151] tracking-widest border-b border-gray-300 pb-1.5 mb-3">
      {children}
    </h2>
  );
}
