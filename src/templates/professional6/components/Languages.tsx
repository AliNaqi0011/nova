import { ISkillItem } from '@/stores/skill.interface';
import CircularProgress from './CircularProgress';

export default function Languages({ languages }: { languages: ISkillItem[] }) {
  return (
    <div>
      <h3 className="text-base font-bold uppercase mb-2">LANGUAGES</h3>
      <div className="flex justify-around">
        {languages.slice(0, 3).map((lang) => (
          <CircularProgress key={lang.name} percentage={lang.level} label={lang.name} />
        ))}
      </div>
    </div>
  );
}
