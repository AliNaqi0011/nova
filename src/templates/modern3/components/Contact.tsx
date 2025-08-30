import { IBasicDetailsItem } from '@/stores/basic.interface';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 mb-2 text-sm">
    {icon}
    <span>{text}</span>
  </div>
);

export default function Contact({ basics }: { basics: IBasicDetailsItem }) {
  const linkedinProfile = basics.profiles.find((p) => p.network === 'linkedin');
  return (
    <section>
      <h2 className="text-lg font-bold text-[#008080] border-b-2 border-[#008080] pb-1 mb-3">
        CONTACTO
      </h2>
      <ContactItem icon={<Mail size={16} />} text={basics.email} />
      <ContactItem icon={<Phone size={16} />} text={basics.phone} />
      <ContactItem icon={<MapPin size={16} />} text={basics.location.city} />
      {linkedinProfile && (
        <ContactItem icon={<Linkedin size={16} />} text={linkedinProfile.username} />
      )}
    </section>
  );
}
