import { IBasicDetailsItem } from '@/stores/basic.interface';
import { Mail, MapPin, Linkedin, Phone, Github } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => (
  <div className="flex items-center gap-2">
    <div className="text-[#3b82f6]">{icon}</div>
    <a href={href} className="text-xs text-gray-700 hover:text-[#3b82f6]">
      {text}
    </a>
  </div>
);

export default function ContactBar({ basics }: { basics: IBasicDetailsItem }) {
  const linkedin = basics.profiles.find((p) => p.network.toLowerCase() === 'linkedin');
  const github = basics.profiles.find((p) => p.network.toLowerCase() === 'github');

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-4">
      <ContactItem icon={<Mail size={14} />} text={basics.email} href={`mailto:${basics.email}`} />
      <ContactItem icon={<Phone size={14} />} text={basics.phone} href={`tel:${basics.phone}`} />
      <ContactItem icon={<MapPin size={14} />} text={basics.location.city} />
      {linkedin && (
        <ContactItem
          icon={<Linkedin size={14} />}
          text={linkedin.url.replace('https://www.linkedin.com/in/', 'linkedin.com/in/')}
          href={linkedin.url}
        />
      )}
      {github && (
        <ContactItem
          icon={<Github size={14} />}
          text={github.url.replace('https://github.com/', 'github.com/')}
          href={github.url}
        />
      )}
    </div>
  );
}
