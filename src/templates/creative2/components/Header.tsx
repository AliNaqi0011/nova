import { IProfile } from '@/stores/index.interface';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialIconMap: { [key: string]: React.ReactNode } = {
  facebook: <Facebook size={16} />,
  twitter: <Twitter size={16} />,
  instagram: <Instagram size={16} />,
  linkedin: <Linkedin size={16} />,
};

interface HeaderProps {
  name: string;
  label: string;
  profiles: IProfile[];
}

export default function Header({ name, label, profiles }: HeaderProps) {
  return (
    <header>
      <h1 className="text-5xl font-bold text-gray-800">{name}</h1>
      <p className="text-lg text-gray-600 tracking-wider mt-1">{label}</p>
      <div className="flex items-center gap-4 mt-4 border-b-2 border-dashed pb-2">
        {profiles.slice(0, 4).map((profile) => (
          <a
            key={profile.network}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-gray-600"
          >
            {socialIconMap[profile.network] || <Linkedin size={16} />}
            <span>/{profile.username}</span>
          </a>
        ))}
      </div>
    </header>
  );
}
