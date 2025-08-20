interface HeaderProps {
  name: string;
  label: string;
}

export default function Header({ name, label }: HeaderProps) {
  return (
    <header className="p-8 pb-4 text-center">
      <h1 className="text-4xl font-light text-gray-800">{name}</h1>
      <p className="text-lg text-gray-500 mt-1">{label}</p>
    </header>
  );
}
