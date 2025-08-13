import { ISkillItem } from '@/stores/skill.interface';

const LanguageDot = ({ filled }: { filled: boolean }) => (
  <div
    className={`w-3 h-3 rounded-full border border-gray-400 ${filled ? 'bg-gray-400' : ''}`}
  ></div>
);

export default function Languages({ languages }: { languages: ISkillItem[] }) {
  return (
    <section>
      <h3 className="font-bold text-base uppercase text-gray-800 border-b-2 border-gray-300 pb-1 mb-3">
        Languages
      </h3>
      {languages.map((lang) => (
        <div key={lang.name} className="flex items-center justify-between mb-2">
          <p className="text-xs">{lang.name}</p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <LanguageDot key={i} filled={i < lang.level / 20} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
