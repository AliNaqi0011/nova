import { IBasics } from '@/stores/basic.interface';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const ContactItem = ({
  icon,
  text,

}: {
  text: string;
  href?: string;
}) => (
  <div className="flex items-center gap-2 text-white">
    <div className="flex-grow text-right text-[8.5pt]">{text}</div>
    <div className="flex-shrink-0">{icon}</div>
  </div>
);

export default function Header({ basics }: { basics: IBasics }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');
  const instagram = basics.profiles.find((p) => p.network === 'instagram');

  return (
    <header className="relative text-white h-[180px] mb-12">
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#1e3a4c]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0 100%)',
        }}
      ></div>
      <div className="relative p-8 flex justify-between items-start">
        <div className="w-[60%]">
          <h1 className="text-4xl font-bold">{basics.name}</h1>
          <p className="text-lg font-light">{basics.label}</p>
          <div className="text-xs mt-2 text-gray-200 max-w-md">
            <HTMLRenderer htmlString={basics.summary} />
      </div>
        <div className="w-[35%] space-y-1.5">
          <ContactItem icon={<MapPin size={15} />} text={basics.location.city} />
          {linkedin && (
            <ContactItem icon={<Linkedin size={15} />} text={linkedin.url} href={linkedin.url} />
          )}
          {instagram && (
            <ContactItem icon={<Instagram size={15} />} text={instagram.url} href={instagram.url} />
          )}
        </div>
      </div>
      <div className="absolute top-[80px] right-[28%]">
        <ProfileImage
          src={basics.image}
          width="120px"
          height="120px"
          imageWrapperClassname="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white"
        />
      </div>
    </header>
  );
}
