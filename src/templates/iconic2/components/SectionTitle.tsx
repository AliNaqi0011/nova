export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold text-[#d74955] tracking-wider border-b border-gray-200 pb-1">
      {children}
    </h2>
  );
}
