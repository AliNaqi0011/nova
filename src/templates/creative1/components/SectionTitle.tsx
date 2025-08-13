import { ReactNode } from 'react';

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-base font-bold text-[#5DB9A8] pb-1 mb-2 border-b-2 border-gray-200">
      {children}
    </h2>
  );
}
