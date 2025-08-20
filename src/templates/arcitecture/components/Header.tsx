import { IBasics } from '@/stores/basic.interface';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
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
  <a href={href} className="flex items-center gap-2 text-white hover:text-gray-300">
    <span className="text-[8.5pt]">{text}</span>
    {icon}
  </a>
);

export default function Header({ basics }: { basics: IBasics }) {
  const { name, label, summary, email, phone, location, profiles } = basics;
  const linkedin = profiles.find((p) => p.network === 'linkedin');
  const instagram = profiles.find((p) => p.network === 'instagram');

  return (
    <header className="relative text-white h-[260px]">
      <div className="absolute top-0 left-0 w-full h-full bg-[#1e3a4c]">
        <div className="absolute top-0 right-0 p-4 space-y-1.5 flex flex-col items-end">
          <ContactItem icon={<Mail size={14} />} text={email} href={`mailto:${email}`} />
          <ContactItem icon={<Phone size={14} />} text={phone} href={`tel:${phone}`} />
          <ContactItem icon={<MapPin size={14} />} text={location.city} />
          {linkedin && (
            <ContactItem icon={<Linkedin size={14} />} text={linkedin.url} href={linkedin.url} />
          )}
          {instagram && (
            <ContactItem icon={<Instagram size={14} />} text={instagram.url} href={instagram.url} />
          )}
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-[80px]"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          }}
        ></div>
      </div>
      <div className="relative p-8 flex justify-between items-end h-full">
        <div className="w-[65%]">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-lg font-light">{label}</p>
          <div className="text-xs mt-2 text-gray-200 max-w-sm">
            <HTMLRenderer htmlString={summary} />
          </div>
        </div>
        <div className="w-[35%] flex justify-center -mb-20">
          <ProfileImage
            src={basics.image}
            width="140px"
            height="140px"
            imageWrapperClassname="w-[140px] h-[140px] rounded-full overflow-hidden border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}
