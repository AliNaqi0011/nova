import { IBasicDetailsItem } from '@/stores/basic.interface';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 mb-2">
    <div className="text-[#5f9ea0]">{icon}</div>
    <p className="text-xs">{text}</p>
  </div>
);

export default function Contact({ basics }: { basics: IBasicDetailsItem }) {
  return (
    <section>
      <h3 className="font-bold text-base uppercase text-gray-800 border-b-2 border-gray-300 pb-1 mb-3">
        Contacts
      </h3>
      <ContactItem icon={<Phone size={14} />} text={basics.phone} />
      <ContactItem icon={<Mail size={14} />} text={basics.email} />
      <ContactItem icon={<MapPin size={14} />} text={basics.location.city} />
      <ContactItem icon={<Globe size={14} />} text={basics.url} />
    </section>
  );
}
