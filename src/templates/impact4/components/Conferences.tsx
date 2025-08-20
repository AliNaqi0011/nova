import SidebarSection from './SidebarSection';
import { MessageSquare } from 'lucide-react';

interface Conference {
  name: string;
  details: string;
}

export default function Conferences({ conferences }: { conferences: Conference[] }) {
  return (
    <SidebarSection icon={<MessageSquare size={16} />} title="CONFERENCES">
      <div className="space-y-2">
        {conferences.slice(0, 2).map((conf, index) => (
          <div key={index} className="text-xs">
            <h4 className="font-bold">{conf.name}</h4>
            <p className="text-gray-200">{conf.details}</p>
          </div>
        ))}
      </div>
    </SidebarSection>
  );
}
