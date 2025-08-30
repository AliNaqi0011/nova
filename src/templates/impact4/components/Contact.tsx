import { IBasicDetailsItem } from '@/stores/basic.interface';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => (
  <div className="flex items-start gap-3 text-xs">
    <div className="mt-0.5">{icon}</div>
    <a href={href} className="hover:underline">
      {text}
    </a>
  </div>
);

export default function Contact({ basics }: { basics: IBasicDetailsItem }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');
  return (
    <section className="space-y-2">
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
