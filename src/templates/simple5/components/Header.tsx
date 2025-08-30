import { IBasicDetailsItem } from '@/stores/basic.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string | undefined;
  href: string;
}) => {
  if (!text) return null;
  return (
    <a href={href} className="flex items-center gap-2 text-white hover:text-gray-300">
      {icon}
      <span className="text-xs">{text}</span>
    </a>
  );
};

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');
  const medium = basics.profiles.find((p) => p.network === 'medium'); // Assuming medium exists

  return (
    <header className="bg-[#0f2c4b] text-white p-8">
      <h1 className="text-4xl font-bold tracking-tight">{basics.name}</h1>
      <p className="text-lg font-light mt-1">{basics.label}</p>
      <div className="text-sm mt-4 text-gray-200 max-w-2xl">
        <HTMLRenderer htmlString={basics.summary} />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-6 text-sm">
        <ContactItem
          icon={<Mail size={16} />}
          text={basics.email}
          href={`mailto:${basics.email}`}
        />
        <ContactItem icon={<Phone size={16} />} text={basics.phone} href={`tel:${basics.phone}`} />
        <ContactItem icon={<MapPin size={16} />} text={basics.location.city} href="#" />
        <ContactItem
          icon={<Globe size={16} />}
          text={basics.url.replace('https://', '')}
          href={basics.url}
        />
        {linkedin && (
          <ContactItem icon={<Linkedin size={16} />} text={linkedin.url} href={linkedin.url} />
        )}
        {medium && <ContactItem icon={<Globe size={16} />} text={medium.url} href={medium.url} />}
      </div>
    </header>
  );
}
