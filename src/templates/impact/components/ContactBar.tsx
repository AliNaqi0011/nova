import { IBasics } from '@/stores/basic.interface';
import { Mail, MapPin, Linkedin, Phone, Globe, Instagram } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-white text-xs hover:text-gray-200"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default function ContactBar({ basics }: { basics: IBasics }) {
  const linkedin = basics.profiles.find((p) => p.network.toLowerCase() === 'linkedin');
  const instagram = basics.profiles.find((p) => p.network.toLowerCase() === 'instagram');

  return (
    <div className="bg-[#4a8275] grid grid-cols-2 gap-x-4 gap-y-2 p-4 -mx-2 rounded-md">
      <ContactItem icon={<Mail size={14} />} text={basics.email} href={`mailto:${basics.email}`} />
      <ContactItem icon={<Phone size={14} />} text={basics.phone} href={`tel:${basics.phone}`} />
      <ContactItem icon={<MapPin size={14} />} text={basics.location.city} href="#" />
      <ContactItem
        icon={<Globe size={14} />}
        text={basics.url.replace(/https?:\/\//, '')}
        href={basics.url}
      />
      {linkedin && (
        <ContactItem
          icon={<Linkedin size={14} />}
          text={linkedin.url.replace(/https?:\/\/www.linkedin.com\/in\//, '')}
          href={linkedin.url}
        />
      )}
      {instagram && (
        <ContactItem
          icon={<Instagram size={14} />}
          text={instagram.username}
          href={instagram.url}
        />
      )}
    </div>
  );
}
