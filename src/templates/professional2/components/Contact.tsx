import { IBasicDetailsItem } from '@/stores/basic.interface';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5">{icon}</div>
    <span className="text-xs">{text}</span>
  </div>
);

export default function Contact({ basics }: { basics: IBasicDetailsItem }) {
  return (
    <section>
      <h2 className="text-lg font-bold border-b-2 border-white pb-1 mb-3">CONTACT</h2>
      <div className="space-y-2">
        <ContactItem icon={<MapPin size={14} />} text={basics.location.address} />
        <ContactItem icon={<Phone size={14} />} text={basics.phone} />
        <ContactItem icon={<Mail size={14} />} text={basics.email} />
      </div>
    </section>
  );
}
