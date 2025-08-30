import { IBasicDetailsItem } from '@/stores/basic.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  return (
    <header>
      <h1 className="text-4xl font-bold text-gray-800">{basics.name}</h1>
      <p className="text-lg text-[#00a99d] font-light mt-1">{basics.label}</p>
      <div className="text-sm text-gray-600 mt-3 max-w-lg">
        <HTMLRenderer htmlString={basics.summary} />
      </div>
    </header>
  );
}
