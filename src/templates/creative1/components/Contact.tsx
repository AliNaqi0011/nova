import { IBasicDetailsItem } from '@/stores/basic.interface';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-base font-bold pb-1 mb-2 border-b-2 border-white">{children}</h2>
);

const ContactItem = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-3">
    <h3 className="text-sm font-semibold">{label}</h3>
    <p className="text-xs">{value}</p>
  </div>
);
export default function Contact({ basics }: { basics: IBasicDetailsItem }) {
  return (
    <section>
      <SectionTitle>Contact</SectionTitle>
      <ContactItem label="Address" value={`${basics.location.address}, ${basics.location.city}`} />
      <ContactItem label="Phone" value={basics.phone} />
      <ContactItem label="Email" value={basics.email} />
      <ContactItem label="Website" value={basics.url} />
    </section>
  );
}
