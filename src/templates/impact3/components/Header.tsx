import { IBasics } from '@/stores/basic.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Header({ basics }: { basics: IBasics }) {
  return (
    <header className="relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#002D62] opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at top left, transparent 20px, currentColor 20px)',
          }}
        ></div>
      </div>
      <div className="relative">
        <h1 className="text-4xl font-bold text-gray-800">{basics.name}</h1>
        <p className="text-lg text-gray-600 mt-1">{basics.label}</p>
        <div className="text-sm text-gray-600 mt-3 max-w-xl">
          <HTMLRenderer htmlString={basics.summary} />
        </div>
      </div>
    </header>
  );
}
