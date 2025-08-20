import { IBasics } from '@/stores/basic.interface';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

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

  return (
    <div className="bg-[#4fb2a6] flex justify-around items-center p-3">
      <ContactItem icon={<Mail size={14} />} text={basics.email} href={`mailto:${basics.email}`} />
      <ContactItem icon={<Phone size={14} />} text={basics.phone} href={`tel:${basics.phone}`} />
      <ContactItem icon={<MapPin size={14} />} text={basics.location.city} href="#" />
      {linkedin && (
        <ContactItem
          icon={<Linkedin size={14} />}
          text={linkedin.url.replace('https://www.linkedin.com/in/', 'linkedin.com/in/')}
          href={linkedin.url}
        />
      )}
    </div>
  );
}
