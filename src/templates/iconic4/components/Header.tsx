import { IBasics, IProfile } from '@/stores/basic.interface';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => (
  <a href={href} className="flex items-center gap-2.5 text-gray-700 hover:text-blue-600">
    <span className="text-[10pt]">{text}</span>
    <div className="text-gray-500">{icon}</div>
  </a>
);

const getSocialIcon = (network: string) => {
  switch (network) {
    case 'linkedin':
      return <Linkedin size={15} />;
    default:
      return <Globe size={15} />;
  }
};

export default function Header({ basics }: { basics: IBasics }) {
  const { name, label, summary, email, phone, location, profiles, url } = basics;
  const linkedin = profiles.find((p: IProfile) => p.network === 'linkedin');
  const otherProfile = profiles.find((p: IProfile) => p.network !== 'linkedin' && p.url);

  return (
    <header className="flex justify-between items-start pb-4 border-b-2 border-gray-200">
      <div className="w-2/3">
        <h1 className="text-5xl font-bold text-gray-800">{name}</h1>
        <p className="text-xl text-gray-600 mt-1">{label}</p>
        <div className="text-sm text-gray-600 mt-3 max-w-lg leading-snug">
          <HTMLRenderer htmlString={summary} />
        </div>
      </div>
      <div className="w-1/3 flex flex-col items-end gap-1.5">
        <ContactItem icon={<Mail size={15} />} text={email} href={`mailto:${email}`} />
        <ContactItem icon={<Phone size={15} />} text={phone} href={`tel:${phone}`} />
        <ContactItem icon={<MapPin size={15} />} text={location.city} />
        {linkedin && (
          <ContactItem
            icon={getSocialIcon('linkedin')}
            text={linkedin.url.replace('https://www.linkedin.com/in/', '')}
            href={linkedin.url}
          />
        )}
        {otherProfile && (
          <ContactItem
            icon={getSocialIcon(otherProfile.network)}
            text={otherProfile.url.replace(/^(https?:\/\/)?(www\.)?/, '')}
            href={otherProfile.url}
          />
        )}
      </div>
    </header>
  );
}
