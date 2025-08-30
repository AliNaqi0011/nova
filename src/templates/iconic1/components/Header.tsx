import { IBasicDetailsItem } from '@/stores/basic.interface';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => (
  <a href={href || '#'} className="flex items-center gap-2 text-gray-600 hover:text-[#d4b369]">
    <div className="text-[#d4b369]">{icon}</div>
    <span className="text-[10pt]">{text}</span>
  </a>
);

const SocialItem = ({ network, url }: { network: string; url: string }) => {
  let icon: React.ReactNode;
  const text = url.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');
  switch (network) {
    case 'linkedin':
      icon = <Linkedin size={15} />;
      break;
    case 'twitter':
      icon = <Twitter size={15} />;
      break;
    default: // Using Quora icon as a placeholder for others
      icon = <span className="font-bold text-lg">Q</span>;
  }
  return <ContactItem icon={icon} text={text} href={url} />;
};

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  const otherContacts = [
    {
      icon: <Mail size={15} />,
      text: basics.email,
      href: `mailto:${basics.email}`,
    },
    {
      icon: <MapPin size={15} />,
      text: basics.location.city,
    },
    {
      icon: <Twitter size={15} />,
      text: basics.profiles.find((p) => p.network === 'twitter')?.username || basics.url,
      href: basics.profiles.find((p) => p.network === 'twitter')?.url || basics.url,
    },
  ];
  const phoneContact = {
    icon: <Phone size={15} />,
    text: basics.phone,
    href: `tel:${basics.phone}`,
  };

  return (
    <header className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <ProfileImage
          src={basics.image}
          width="90px"
          height="90px"
          imageWrapperClassname="w-[90px] h-[90px] rounded-md overflow-hidden"
        />
      </div>
      <div className="flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">{basics.name}</h1>
        <p className="text-lg font-semibold text-[#d4b369] mt-1">{basics.label}</p>
        <div className="text-xs text-gray-600 mt-2 max-w-md">
          <HTMLRenderer htmlString={basics.summary} />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-3">
          {otherContacts.map((item, index) => (
            <ContactItem key={index} icon={item.icon} text={item.text} href={item.href} />
          ))}
          <ContactItem icon={phoneContact.icon} text={phoneContact.text} href={phoneContact.href} />
          {basics.profiles
            .slice(0, 3)
            .map((profile: JSX.IntrinsicAttributes & { network: string; url: string }) => (
              <SocialItem key={profile.network} {...profile} />
            ))}
        </div>
      </div>
    </header>
  );
}
