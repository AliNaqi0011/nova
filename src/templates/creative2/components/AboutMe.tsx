import { IBasics } from '@/stores/basic.interface';
import { Phone, MapPin, Mail } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutMeItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex">
    <p className="w-24 font-semibold">{label}</p>
    <p>{value}</p>
  </div>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <p>{text}</p>
  </div>
);

export default function AboutMe({ basics }: { basics: IBasics }) {
  return (
    <section>
      <SectionTitle>ABOUT ME</SectionTitle>
      <div className="text-xs space-y-1">
        <AboutMeItem label="Date of Birth:" value="January 1, 1999" />
        <AboutMeItem label="Age:" value="25" />
        <AboutMeItem label="Gender:" value="Male" />
        <AboutMeItem label="Birth of Place:" value="Alabama" />
        <div className="pt-2 space-y-1">
          <ContactItem icon={<Phone size={14} />} text={basics.phone} />
          <ContactItem icon={<MapPin size={14} />} text={basics.location.address} />
          <ContactItem icon={<Mail size={14} />} text={basics.email} />
        </div>
      </div>
    </section>
  );
}
