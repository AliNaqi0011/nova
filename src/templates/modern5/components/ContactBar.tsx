import { IBasics } from '@/stores/basic.interface';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2">
    <div className="text-gray-600">{icon}</div>
    <span className="text-xs">{text}</span>
  </div>
);

export default function ContactBar({ basics }: { basics: IBasics }) {
  return (
    <div className="flex justify-around items-center p-2 border-b">
      <ContactItem icon={<Phone size={14} />} text={basics.phone} />
      <ContactItem icon={<Mail size={14} />} text={basics.email} />
      <ContactItem
        icon={<MapPin size={14} />}
        text={`${basics.location.address}, ${basics.location.city}`}
      />
    </div>
  );
}
