import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const proficiencyMap: { [key: number]: string } = {
  20: 'Elementary Proficiency',
  40: 'Limited Working Proficiency',
  60: 'Professional Working Proficiency',
  80: 'Full Professional Proficiency',
  100: 'Native or Bilingual Proficiency',
};

const getProficiency = (level: number) => {
  if (level <= 20) return proficiencyMap[20];
  if (level <= 40) return proficiencyMap[40];
  if (level <= 60) return proficiencyMap[60];
  if (level <= 80) return proficiencyMap[80];
  return proficiencyMap[100];
};

export default function Languages({ languages }: { languages: ISkillItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle>LANGUAGES</SectionTitle>
      <div className="grid grid-cols-3 gap-x-6 mt-2 text-xs text-center">
        {languages.map((lang) => (
          <div key={lang.name}>
            <p className="font-semibold text-gray-800">{lang.name}</p>
            <p className="text-gray-600">{getProficiency(lang.level)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
