import { IBasicDetailsItem } from '@/stores/basic.interface';
import { sanitizeText } from '@/utils/sanitize';

const ContactItem = ({ text, href }: { text: string; href?: string }) => {
  if (href) {
    return (
      <a
        href={href}
        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }
  return <p className="text-sm text-gray-600">{text}</p>;
};

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  const linkedin = basics.profiles.find((p) => p.network === 'linkedin');
  return (
    <header className="text-center pb-3">
      <h1 className="text-4xl font-bold tracking-tight text-black">{sanitizeText(basics.name.toUpperCase())}</h1>
      <p className="text-lg font-semibold text-gray-700 mt-1">{sanitizeText(basics.label)}</p>
      <div className="flex items-center justify-center gap-x-4 mt-2">
        <ContactItem text={sanitizeText(basics.email)} href={`mailto:${sanitizeText(basics.email)}`} />
        {linkedin && (
          <>
            <span>•</span>
            <ContactItem text={linkedin.url.replace('https://www.', '')} href={linkedin.url} />
          </>
        )}
        <span>•</span>
        <ContactItem text={sanitizeText(basics.location.city)} />
      </div>
    </header>
  );
}
