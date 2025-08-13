interface HeaderProps {
  name: string;
  label: string;
}

export default function Header({ name, label }: HeaderProps) {
  return (
    <header>
      <h1 className="text-4xl font-bold text-gray-800">{name.toUpperCase()}</h1>
      <p className="text-sm font-semibold text-gray-500 tracking-widest mt-1">
        {label.toUpperCase()}
      </p>
    </header>
  );
}
