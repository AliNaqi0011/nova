import { IBasicDetailsItem } from '@/stores/basic.interface';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const ContactItem = ({
  icon,
  text,
  className = '',
}: {
  icon: React.ReactNode;
  text: string;
  className?: string;
}) => (
  <div className={`flex items-center justify-end gap-2 text-gray-600 ${className}`}>
    <p className="text-[10pt]">{text}</p>
    <div className="text-[#d74955]">{icon}</div>
  </div>
);

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');
  const otherProfile = basics.profiles.find((p) => p.network !== 'linkedin');

  return (
    <header className="pb-4 border-b-2 border-gray-100">
      <div className="grid grid-cols-12 gap-x-8">
        <div className="col-span-7">
          <h1 className="text-4xl font-bold text-gray-800">{basics.name}</h1>
          <p className="text-lg font-semibold text-gray-600 mt-1">{basics.label}</p>
          <div className="text-xs text-gray-600 mt-2 max-w-md">{basics.summary}</div>
        </div>
        <div className="col-span-5 flex flex-col items-end justify-start gap-y-1">
          <ContactItem icon={<Mail size={15} />} text={basics.email} />
          <ContactItem icon={<Phone size={15} />} text={basics.phone} />
          <ContactItem icon={<MapPin size={15} />} text={basics.location.city} />
          {linkedin && (
            <ContactItem
              icon={<Linkedin size={15} />}
              text={linkedin.url.replace('https://www.linkedin.com/in/', 'linkedin.com/in/')}
            />
          )}
          {otherProfile && (
            <ContactItem
              icon={<Globe size={15} />}
              text={otherProfile.url.replace(/^(https?:\/\/)?(www\.)?/, '')}
            />
          )}
        </div>
      </div>
    </header>
  );
}
