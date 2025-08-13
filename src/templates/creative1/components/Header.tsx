interface HeaderProps {
  name: string;
  label: string;
}
export default function Header({ name, label }: HeaderProps) {
  return (
    <header className="p-6">
      <div className="border-b-4 border-[#5DB9A8] pb-2">
        <h1 className="text-4xl font-bold text-gray-800">{name.toUpperCase()}</h1>
        <p className="text-lg font-light tracking-wider mt-1">{label}</p>
      </div>
    </header>
  );
}
