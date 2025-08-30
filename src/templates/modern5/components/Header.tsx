import { IBasicDetailsItem } from '@/stores/basic.interface';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Header({ basics }: { basics: IBasicDetailsItem }) {
  return (
    <header className="bg-black text-white flex items-center p-8 gap-8">
      <div className="flex-grow space-y-3">
        <h1 className="text-4xl font-extrabold tracking-wider">{basics.name.toUpperCase()}</h1>
        <p className="text-lg font-semibold">{basics.label}</p>
        <div className="text-sm text-gray-300 border-t border-gray-600 pt-3">
          <HTMLRenderer htmlString={basics.summary} />
        </div>
      </div>
      <div className="flex-shrink-0">
        <ProfileImage src={basics.image} width="150px" height="150px" />
      </div>
    </header>
  );
}
