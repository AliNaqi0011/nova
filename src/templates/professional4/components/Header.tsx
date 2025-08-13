export default function Header() {
  return (
    <header className="bg-[#2c3e50] text-white p-6 relative h-36">
      <h1 className="text-3xl font-bold tracking-wider relative z-10">{''}</h1>
      <div
        className="absolute top-0 right-0 h-full bg-white w-[45%]"
        style={{
          clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      ></div>
    </header>
  );
}
