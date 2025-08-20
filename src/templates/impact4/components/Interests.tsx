import SidebarSection from './SidebarSection';
import { Plane, Camera, GitCommit } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  energy: <Plane size={16} />,
  photography: <Camera size={16} />,
  meditation: <GitCommit size={16} />,
};

const getInterestIcon = (interest: string): React.ReactNode => {
  const lowerInterest = interest.toLowerCase();
  for (const key in iconMap) {
    if (lowerInterest.includes(key)) {
      return iconMap[key];
    }
  }
  return <Plane size={16} />; // Default icon
};

export default function Interests({ interests }: { interests: string[] }) {
  return (
    <SidebarSection icon={getInterestIcon(interests[0] || '')} title="INTERESTS">
      <div className="space-y-2">
        {interests.slice(0, 3).map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            {getInterestIcon(item)}
            <span>{item}</span>
          </div>
        ))}
      </div>
    </SidebarSection>
  );
}
