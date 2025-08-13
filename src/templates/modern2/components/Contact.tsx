import { ILocation } from '@/stores/basic.interface';
import SectionTitle from './SectionTitle';

interface ContactProps {
  email: string;
  phone: string;
  url: string;
  location: ILocation;
}

export default function Contact({ email, phone, url, location }: ContactProps) {
  return (
    <section>
      <SectionTitle>Contact</SectionTitle>
      <div className="text-sm text-gray-300 space-y-1">
        <p>
          {location.address}, {location.city}
        </p>
        <p>{url}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </section>
  );
}
