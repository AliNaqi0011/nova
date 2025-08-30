import { IBasicDetailsItem } from '@/stores/basic.interface';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => (
  <a href={href} className="flex items-center gap-2 text-gray-600 hover:text-[#2dd4bf]">
    {icon}
    <span className="text-[9pt]">{text}</span>
  </a>
);

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');
  return (
    <header className="pb-4 border-b-2 border-gray-100">
      <h1 className="text-4xl font-bold tracking-tight text-gray-800">
        {basics.name.toUpperCase()}
      </h1>
      <p className="text-md font-semibold text-gray-500 mt-1">{basics.label}</p>
      <div className="flex items-center gap-x-4 mt-2">
        <ContactItem
          icon={<Phone size={14} className="text-[#2dd4bf]" />}
          text={basics.phone}
          href={`tel:${basics.phone}`}
        />
        <ContactItem
          icon={<Mail size={14} className="text-[#2dd4bf]" />}
          text={basics.email}
          href={`mailto:${basics.email}`}
        />
        {linkedin && (
          <ContactItem
            icon={<Linkedin size={14} className="text-[#2dd4bf]" />}
            text={linkedin.url.replace('https://www.linkedin.com/in/', '')}
            href={linkedin.url}
          />
        )}
        <div className="flex items-center gap-2 text-xs">
          <MapPin size={14} className="text-[#2dd4bf]" />
          <span className="text-gray-600">{basics.location.city}</span>
        </div>
      </div>
    </header>
  );
}
