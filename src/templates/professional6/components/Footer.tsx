export default function Footer({ url }: { url: string }) {
  return (
    <footer className="text-right text-xs text-gray-500 pr-6 pb-2">
      <p>{url}</p>
    </footer>
  );
}
