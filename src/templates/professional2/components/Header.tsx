interface HeaderProps {
  name: string;
  label: string;
}

export default function Header({ name, label }: HeaderProps) {
  return (
    <header className="border-b-4 border-gray-300 pb-2">
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-wider">{name.toUpperCase()}</h1>
      <p className="text-lg font-semibold text-gray-600 tracking-widest mt-1">{label}</p>
    </header>
  );
}
