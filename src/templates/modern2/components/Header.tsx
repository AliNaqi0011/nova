import Image from 'next/image';

interface HeaderProps {
  name: string;
  label: string;
  image: string;
}

export default function Header({ name, label, image }: HeaderProps) {
  return (
    <header className="relative h-48">
      <Image
        src={image || 'https://placehold.co/828x192.png'}
        alt="Header background"
        data-ai-hint="professional business person"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-end p-6">
        <div className="bg-black/50 p-4">
          <h1 className="text-5xl font-bold text-white" style={{ fontFamily: 'serif' }}>
            {name}
          </h1>
          <p className="text-xl text-red-400 font-semibold">{label}</p>
        </div>
      </div>
    </header>
  );
}
