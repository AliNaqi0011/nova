export default function Footer({ url }: { url: string }) {
  return (
    <footer className="flex justify-between items-center text-xs text-gray-400 mt-6 pt-2 border-t">
      <span>{url ? url.replace('https://', '') : 'www.yourwebsite.com'}</span>
      <span>Powered by Nova Resume</span>
    </footer>
  );
}
