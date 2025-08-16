import { IBasics } from '@/stores/basic.interface';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) => (
  <a href={href} className="flex items-center gap-2 text-white hover:text-gray-200">
    {icon}
    <span className="text-xs">{text}</span>
  </a>
);

export default function Header({ basics }: { basics: IBasics }) {
  const linkedin = basics.profiles.find((profile) => profile.network === 'linkedin');

  return (
    <header className="pb-4">
      <h1 className="text-3xl font-bold">{basics.name}</h1>
      <div className="text-xs text-gray-600 mt-1 max-w-full">
        <HTMLRenderer htmlString={basics.summary} />
      </div>

      <div className="bg-[#469587] text-white flex justify-center items-center gap-x-6 p-2 mt-3 -mx-4">
        <ContactItem
          icon={<Mail size={14} />}
          text={basics.email}
          href={`mailto:${basics.email}`}
        />
        <ContactItem icon={<Phone size={14} />} text={basics.phone} href={`tel:${basics.phone}`} />
        <div className="flex items-center gap-2 text-xs">
          <MapPin size={14} />
          <span>{basics.location.city}</span>
        </div>
        {linkedin && (
          <ContactItem icon={<Linkedin size={14} />} text={linkedin.url} href={linkedin.url} />
        )}
      </div>
    </header>
  );
}
