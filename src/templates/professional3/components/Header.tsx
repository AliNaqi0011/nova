interface HeaderProps {
  name: string;
  label: string;
}

export default function Header({ name, label }: HeaderProps) {
  return (
    <header className="bg-[#5f9ea0] text-white p-6">
      <h1 className="text-4xl font-bold tracking-wide">{name.toUpperCase()}</h1>
      <p className="text-lg font-light tracking-widest mt-1">{label.toUpperCase()}</p>
    </header>
  );
}
