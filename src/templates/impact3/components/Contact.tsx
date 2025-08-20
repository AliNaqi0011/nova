import { IBasics } from '@/stores/basic.interface';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => {
  if (!text) return null;
  const linkContent = (
    <div className="flex items-center gap-3 text-xs text-white">
      <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {linkContent}
    </a>
  ) : (
    linkContent
  );
};

export default function Contact({ basics }: { basics: IBasics }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');
  return (
    <section className="space-y-3">
      <ContactItem icon={<Mail size={14} />} text={basics.email} href={`mailto:${basics.email}`} />
      <ContactItem icon={<Phone size={14} />} text={basics.phone} href={`tel:${basics.phone}`} />
      <ContactItem icon={<MapPin size={14} />} text={basics.location.city} />
      {linkedin && (
        <ContactItem
          icon={<Linkedin size={14} />}
          text={linkedin.url.replace('https://www.linkedin.com/in/', '')}
          href={linkedin.url}
        />
      )}
    </section>
  );
}
