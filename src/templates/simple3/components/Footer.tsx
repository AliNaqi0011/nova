export default function Footer({ url }: { url: string }) {
  return (
    <footer className="flex justify-between items-center text-xs text-gray-400 mt-6 pt-4 border-t">
      <a href={url} className="hover:text-blue-600">
        {url}
      </a>
      <span>
        Powered by <span className="font-bold text-gray-500">Enhancv</span>
      </span>
    </footer>
  );
}
