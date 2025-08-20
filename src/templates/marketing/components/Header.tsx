import { IBasics } from '@/stores/basic.interface';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Header({ basics }: { basics: IBasics }) {
  return (
    <header className="relative text-left pb-6">
      <div
        className="absolute top-0 right-0 h-24 w-1/3 bg-no-repeat bg-right"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgba(236, 239, 241, 0.1);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgba(236, 239, 241, 0.4);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23grad1)' d='M0,50 Q50,0 100,20 T200,30 L200,100 L0,100 Z'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
        }}
      ></div>
      <h1 className="text-4xl font-bold text-gray-800">{basics.name}</h1>
      <p className="text-lg text-gray-600 mt-1">{basics.label}</p>
      <div className="text-sm text-gray-600 mt-3 max-w-lg leading-snug">
        <HTMLRenderer htmlString={basics.summary} />
      </div>
    </header>
  );
}
