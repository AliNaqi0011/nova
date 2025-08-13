import { IBasics } from '@/stores/basic.interface';
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
  <a href={href} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 text-xs">
    {icon}
    <span>{text}</span>
  </a>
);

export default function Header({ basics }: { basics: IBasics }) {
  return (
    <header className="pb-4 border-b-2 border-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">{basics.name.toUpperCase()}</h1>
      <p className="text-lg font-semibold text-blue-600 -mt-1">{basics.label}</p>
      <div className="flex items-center gap-x-4 mt-2">
        <ContactItem
          icon={<Mail size={12} />}
          text={basics.email}
          href={`mailto:${basics.email}`}
        />
        <ContactItem icon={<Phone size={12} />} text={basics.phone} href={`tel:${basics.phone}`} />
        <div className="flex items-center gap-2 text-xs">
          <MapPin size={12} className="text-gray-600" />
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
