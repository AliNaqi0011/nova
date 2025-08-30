import { IBasicDetailsItem } from '@/stores/basic.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  return (
    <header className="bg-[#3b82f6] text-white p-8">
      <h1 className="text-4xl font-bold">{basics.name}</h1>
      <p className="text-lg font-light mt-1">{basics.label}</p>
      <div className="text-sm mt-3 text-gray-200 max-w-2xl">
        <HTMLRenderer htmlString={basics.summary} />
      </div>
    </header>
  );
}
