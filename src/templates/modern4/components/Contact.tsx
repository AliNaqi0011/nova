import { IBasics } from '@/stores/basic.interface';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string | undefined }) => {
  if (!text) return null;
  return (
    <div className="flex items-center gap-3 mb-2 text-xs text-gray-600">
      <div className="text-[#00A9E8]">{icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default function Contact({ basics }: { basics: IBasics }) {
  return (
    <section className="mt-6">
      <h2 className="text-sm font-bold uppercase text-[#0c4a6e] border-b-2 border-gray-300 pb-1 mb-2">
        Contact
      </h2>
      <ContactItem
        icon={<MapPin size={14} />}
        text={`${basics.location.address}, ${basics.location.city}`}
      />
      <ContactItem icon={<Phone size={14} />} text={basics.phone} />
      <ContactItem icon={<Mail size={14} />} text={basics.email} />
      <ContactItem icon={<Globe size={14} />} text={basics.url} />
    </section>
  );
}
