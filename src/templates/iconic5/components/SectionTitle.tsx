import { Plus } from 'lucide-react';

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center text-sm font-bold text-[#374151] tracking-wider mb-3">
      <h2 className="flex-grow pr-4">{title}</h2>
      <div className="flex-grow border-t border-gray-300"></div>
      <div className="pl-4">
        <Plus size={16} />
      </div>
    </div>
  );
}
