import { ReactNode } from 'react';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-white mb-2 pb-1 border-b-2 border-gray-700">
      {children}
    </h2>
  );
}
