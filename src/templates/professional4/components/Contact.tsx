import { IBasicDetailsItem } from '@/stores/basic.interface';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 mb-2">
    <div className="text-[#2c3e50]">{icon}</div>
    <p className="text-xs">{text}</p>
  </div>
);

export default function Contact({ basics }: { basics: IBasicDetailsItem }) {
  return (
    <section>
      <h3 className="font-bold text-sm uppercase text-[#2c3e50] mb-3">CONTACT ME AT</h3>
      <ContactItem icon={<Phone size={14} />} text={basics.phone} />
      <ContactItem icon={<Mail size={14} />} text={basics.email} />
      <ContactItem icon={<MapPin size={14} />} text={basics.location.city} />
    </section>
  );
}
