import { IBasicDetailsItem } from '@/stores/basic.interface';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) => (
  <a href={href} className="flex items-center gap-2 text-white hover:text-gray-200 text-xs">
    {icon}
    <span>{text}</span>
  </a>
);

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  return (
    <header className="pb-4">
      <h1 className="text-3xl font-bold text-white">{basics.name.toUpperCase()}</h1>
      <p className="text-lg font-semibold text-blue-200 -mt-1">{basics.label}</p>
      <div className="flex flex-col gap-1 mt-2">
        <ContactItem
          icon={<Mail size={12} />}
          text={basics.email}
          href={`mailto:${basics.email}`}
        />
        <ContactItem icon={<Phone size={12} />} text={basics.phone} href={`tel:${basics.phone}`} />
        <div className="flex items-center gap-2 text-xs text-white">
          <MapPin size={12} />
          <span>{basics.location.city}</span>
        </div>
        <ContactItem
          icon={<Globe size={12} />}
          text={basics.url.replace('https://', '')}
          href={basics.url}
        />
      </div>
    </header>
  );
}
