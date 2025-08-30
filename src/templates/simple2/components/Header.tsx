import { IBasicDetailsItem } from '@/stores/basic.interface';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => (
  <a href={href} className="flex items-center gap-2 text-xs text-white hover:text-gray-300">
    {icon}
    <span>{text}</span>
  </a>
);

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');
  return (
    <header className="bg-[#0f2c4b] text-white p-8 flex justify-between items-center -mx-8 -mt-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight">{basics.name.toUpperCase()}</h1>
        <p className="text-md font-light mt-1">{basics.label}</p>
        <div className="flex items-center gap-x-6 mt-4">
          <ContactItem
            icon={<Phone size={14} />}
            text={basics.phone}
            href={`tel:${basics.phone}`}
          />
          {linkedin && (
            <ContactItem
              icon={<Linkedin size={14} />}
              text={linkedin.username}
              href={linkedin.url}
            />
          )}
          <ContactItem
            icon={<Mail size={14} />}
            text={basics.email}
            href={`mailto:${basics.email}`}
          />
          <div className="flex items-center gap-2 text-xs">
            <MapPin size={14} />
            <span>{basics.location.city}</span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <ProfileImage
          src={basics.image}
          width="100px"
          height="100px"
          imageWrapperClassname="w-[100px] h-[100px]"
        />
      </div>
    </header>
  );
}
