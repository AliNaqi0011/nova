import { ReactNode } from 'react';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-sm font-bold text-gray-500 tracking-wider border-b-2 border-gray-200 pb-1.5">
      {children}
    </h2>
  );
}
