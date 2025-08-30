import { IBasicDetailsItem } from '@/stores/basic.interface';
import { Mail, MapPin, Linkedin, Phone, Globe, Twitter } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => (
  <a
    href={href}
    className="flex items-center gap-2 text-white text-xs hover:text-gray-300 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default function ContactBar({ basics }: { basics: IBasicDetailsItem }) {
  const linkedin = basics.profiles.find((p) => p.network.toLowerCase() === 'linkedin');
  const twitter = basics.profiles.find((p) => p.network.toLowerCase() === 'twitter');

  return (
    <div className="bg-[#0f2c4b] grid grid-cols-3 gap-x-4 gap-y-2 p-3 rounded-md">
      <ContactItem icon={<Mail size={14} />} text={basics.email} href={`mailto:${basics.email}`} />
      <ContactItem icon={<Phone size={14} />} text={basics.phone} href={`tel:${basics.phone}`} />
      <ContactItem
        icon={<Globe size={14} />}
        text={basics.url.replace(/https?:\/\//, '')}
        href={basics.url}
      />
      <ContactItem icon={<MapPin size={14} />} text={basics.location.city} href="#" />
      {linkedin && (
        <ContactItem
          icon={<Linkedin size={14} />}
          text={linkedin.url.replace(/https?:\/\/www.linkedin.com\/in\//, '')}
          href={linkedin.url}
        />
      )}
      {twitter && (
        <ContactItem icon={<Twitter size={14} />} text={twitter.username} href={twitter.url} />
      )}
    </div>
  );
}
