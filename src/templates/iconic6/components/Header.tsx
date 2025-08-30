import { IBasicDetailsItem } from '@/stores/basic.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

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
    href={href || '#'}
    className="flex items-center justify-end gap-2 text-gray-600 hover:text-[#469587]"
  >
    <span className="text-[9pt]">{text}</span>
    <div className="text-gray-500">{icon}</div>
  </a>
);

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  const { name, label, summary, email, phone, location, profiles, url } = basics;
  const linkedin = profiles.find((p) => p.network === 'linkedin');
  const instagram = profiles.find((p) => p.network === 'instagram');

  return (
    <header className="grid grid-cols-12 gap-x-8 pb-4 border-b">
      <div className="col-span-7">
        <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
        <p className="text-lg font-semibold text-[#469587] mt-1">{label}</p>
        <div className="text-xs text-gray-600 mt-2 max-w-md leading-snug">
          <HTMLRenderer htmlString={summary} />
        </div>
      </div>
      <div className="col-span-5 flex flex-col items-end gap-1">
        <ContactItem icon={<Mail size={14} />} text={email} href={`mailto:${email}`} />
        <ContactItem icon={<Phone size={14} />} text={phone} href={`tel:${phone}`} />
        <ContactItem icon={<MapPin size={14} />} text={location.city} />
        {linkedin && (
          <ContactItem
            icon={<Linkedin size={14} />}
            text={linkedin.url.replace('https://www.linkedin.com/in/', '')}
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
    </header>
  );
}
