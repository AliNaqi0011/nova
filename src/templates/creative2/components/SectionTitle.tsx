import { ReactNode } from 'react';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-sm font-bold text-gray-800 pb-1 border-b-2 border-dashed border-gray-300">
      {children}
    </h2>
  );
}
