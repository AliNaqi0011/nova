export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center text-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <h2 className="px-4 text-sm font-bold text-gray-600 tracking-wider">{children}</h2>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
