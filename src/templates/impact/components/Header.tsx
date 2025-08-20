import { IBasics } from '@/stores/basic.interface';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function Header({ basics }: { basics: IBasics }) {
  return (
    <header className="flex items-start gap-6 mb-4">
      <div className="flex-shrink-0">
        <ProfileImage
          src={basics.image}
          width="90px"
          height="90px"
          imageWrapperClassname="w-[90px] h-[90px] rounded-md overflow-hidden"
        />
      </div>
      <div className="flex-grow">
        <h1 className="text-4xl font-bold text-gray-800">{basics.name}</h1>
        <p className="text-lg text-gray-600 mt-1">{basics.label}</p>
        <div className="text-xs text-gray-600 mt-2 max-w-lg leading-snug">
          <HTMLRenderer htmlString={basics.summary} />
        </div>
      </div>
    </header>
  );
}
