import { IBasics } from '@/stores/basic.interface';

const ContactItem = ({ text, href }: { text: string; href?: string }) => {
  if (href) {
    return (
      <a href={href} className="text-xs text-gray-600 hover:text-black">
        {text}
      </a>
    );
  }
  return <p className="text-xs text-gray-600">{text}</p>;
};

export default function Header({ basics }: { basics: IBasics }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');
  return (
    <header className="text-left pb-3">
      <h1 className="text-3xl font-bold tracking-tight text-black">{basics.name.toUpperCase()}</h1>
      <p className="text-sm text-gray-700 mt-1">{basics.label}</p>
      <div className="flex items-center gap-x-4 mt-2">
        <ContactItem text={basics.phone} href={`tel:${basics.phone}`} />
        <ContactItem text={basics.email} href={`mailto:${basics.email}`} />
        {linkedin && <ContactItem text={linkedin.url} href={linkedin.url} />}
        <ContactItem text={basics.location.city} />
      </div>
    </header>
  );
}
