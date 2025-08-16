import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const LanguageItem = ({ name, level }: { name: string; level: number }) => (
  <div>
    <p className="font-bold text-xs">{name}</p>
    <p className="text-xs text-gray-500">
      {level > 70 ? 'Full Professional Proficiency' : 'Limited Working Proficiency'}
    </p>
  </div>
);

export default function Languages({ languages }: { languages: ISkillItem[] }) {
  return (
    <section className="mb-4 avoid-page-break">
      <SectionTitle>LANGUAGES</SectionTitle>
      <div className="grid grid-cols-3 gap-x-4 mt-1">
        {languages.map((lang) => (
          <LanguageItem key={lang.name} name={lang.name} level={lang.level} />
        ))}
      </div>
    </section>
  );
}
