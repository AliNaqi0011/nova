import SidebarSection from './SidebarSection';
import { Users } from 'lucide-react';

export default function Memberships({ memberships }: { memberships: string[] }) {
  return (
    <SidebarSection icon={<Users size={16} />} title="MEMBERSHIPS">
      <ul className="space-y-1 text-xs list-disc list-inside">
        {memberships.slice(0, 2).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </SidebarSection>
  );
}
