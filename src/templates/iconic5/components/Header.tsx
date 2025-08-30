import { IBasicDetailsItem } from '@/stores/basic.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

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
    <div className="text-red-500">{icon}</div>
    <a href={href} className="text-sm text-gray-600 hover:text-red-500">
      {text}
    </a>
  </div>
);

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  const { name, label, summary, email, phone, location, profiles } = basics;
  const linkedin = profiles.find((p) => p.network === 'linkedin');
  const website = profiles.find((p) => p.network === 'website' || p.network === 'url');

  return (
    <header className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-gray-800 tracking-tight">{name}</h1>
      <p className="text-lg font-medium text-gray-600 mt-1">{label}</p>
      <div className="text-sm text-gray-600 mt-3 max-w-xl leading-snug">
        <HTMLRenderer htmlString={summary} />
      </div>
      <div className="flex items-center gap-x-6 mt-4">
        <ContactItem icon={<Mail size={16} />} text={email} href={`mailto:${email}`} />
        <ContactItem icon={<Phone size={16} />} text={phone} href={`tel:${phone}`} />
        <ContactItem icon={<MapPin size={16} />} text={location.city} />
        {linkedin && (
          <ContactItem icon={<Linkedin size={16} />} text={linkedin.username} href={linkedin.url} />
        )}
        {website && (
          <ContactItem icon={<Globe size={16} />} text={website.username} href={website.url} />
        )}
      </div>
    </header>
  );
}
