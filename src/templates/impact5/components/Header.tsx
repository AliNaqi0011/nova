import { IBasicDetailsItem } from '@/stores/basic.interface';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
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
  <a
    href={href || '#'}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-pink-500"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');

  return (
    <header className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-28 h-28 rounded-lg overflow-hidden bg-pink-100 p-1.5">
          <ProfileImage
            src={basics.image}
            width="100px"
            height="100px"
            imageWrapperClassname="w-full h-full rounded-md overflow-hidden"
          />
        </div>
      </div>
      <div className="flex-grow">
        <h1 className="text-4xl font-bold text-gray-800">{basics.name}</h1>
        <p className="text-lg text-pink-500 font-semibold">{basics.label}</p>
        <div className="text-xs text-gray-600 mt-2 max-w-lg leading-snug">
          <HTMLRenderer htmlString={basics.summary} />
        </div>
        <div className="flex items-center gap-x-4 mt-3 border-t pt-2">
          <ContactItem
            icon={<Mail size={12} />}
            text={basics.email}
            href={`mailto:${basics.email}`}
          />
          <ContactItem
            icon={<Phone size={12} />}
            text={basics.phone}
            href={`tel:${basics.phone}`}
          />
          <ContactItem icon={<MapPin size={12} />} text={basics.location.city} />
          {linkedin && (
            <ContactItem
              icon={<Linkedin size={12} />}
              text={linkedin.url.replace('https://www.linkedin.com/in/', '')}
              href={linkedin.url}
            />
          )}
        </div>
      </div>
    </header>
  );
}
