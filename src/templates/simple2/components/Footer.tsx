import Image from 'next/image';

export default function Footer({ url }: { url: string }) {
  const displayUrl = url.replace('https://', '').replace('http://', '');

  return (
    <footer className="flex justify-between items-center text-xs text-gray-500 px-8 pb-4 pt-2">
      <p>{displayUrl}</p>
      <div className="flex items-center gap-1">
        <span>Powered by</span>
        <Image
          src="https://user-images.githubusercontent.com/12962887/201484876-75290af9-ccd6-4f6d-be96-6a8fb4f20c4b.png"
          alt="Enhancv Logo"
          width={60}
          height={15}
          className="h-4 w-auto"
        />
      </div>
    </footer>
  );
}
