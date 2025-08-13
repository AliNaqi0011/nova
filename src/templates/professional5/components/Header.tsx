import { IBasics } from '@/stores/basic.interface';
import { Mail, Link as LinkIcon, MapPin } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) => (
  <a href={href} className="flex items-center gap-2 text-gray-600 hover:text-[#4a89a8]">
    {icon}
    <span className="text-[9pt]">{text}</span>
  </a>
);

export default function Header({ basics }: { basics: IBasics }) {
  return (
    <header className="flex flex-col">
      <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
        {basics.name.toUpperCase()}
      </h1>
      <p className="text-sm font-medium text-[#4a89a8] mt-1">{basics.label}</p>
      <div className="flex items-center gap-x-6 mt-3 text-xs">
        <ContactItem
          icon={<Mail size={14} />}
          text={basics.email}
          href={`mailto:${basics.email}`}
        />
        <ContactItem
          icon={<LinkIcon size={14} />}
          text={basics.url.replace('https://', '')}
          href={basics.url}
        />
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-gray-600" />
          <span className="text-gray-600 text-[9pt]">{basics.location.city}</span>
        </div>
      </div>
    </header>
  );
}
