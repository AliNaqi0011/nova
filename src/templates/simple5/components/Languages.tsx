import { ISkillItem } from '@/stores/skill.interface';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-bold text-[#0f2c4b] tracking-wider border-b-2 border-gray-200 pb-1 mb-4">
    {children}
  </h2>
);

const LanguageRating = ({ level }: { level: number }) => {
  const totalDots = 5;
  const filledDots = Math.round(level / 20);

  return (
    <div className="flex gap-1.5">
      {Array.from({ length: totalDots }).map((_, i) => (
        <div key={i} className={`w-3 h-3 ${i < filledDots ? 'bg-[#0f2c4b]' : 'bg-gray-300'}`}></div>
      ))}
    </div>
  );
};

export default function Languages({ languages }: { languages: ISkillItem[] }) {
  return (
    <section className="mb-6 avoid-page-break">
      <SectionTitle>LANGUAGES</SectionTitle>
      <div className="space-y-2 text-xs">
        {languages.map((lang) => (
          <div key={lang.name} className="flex justify-between items-center">
            <p className="font-medium text-gray-700">{lang.name}</p>
            <LanguageRating level={lang.level} />
          </div>
        ))}
      </div>
    </section>
  );
}
