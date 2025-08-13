import { ISkillItem } from '@/stores/skill.interface';
import SectionTitle from './SectionTitle';

const Hexagon = ({ percentage, label }: { percentage: number; label: string }) => {
  const strokeDasharray = 282.743; // 2 * PI * radius (45)
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-28">
        <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <clipPath id="hexagon_clip">
              <polygon points="50 0, 100 25, 100 75, 50 100, 0 75, 0 25" />
            </clipPath>
          </defs>
          <polygon
            className="text-gray-700"
            points="50 0, 100 25, 100 75, 50 100, 0 75, 0 25"
            fill="currentColor"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            clipPath="url(#hexagon_clip)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-lg font-bold">{percentage}%</span>
        </div>
      </div>
      <p className="text-sm text-gray-300 mt-1">{label}</p>
    </div>
  );
};

export default function WorkingSkills({ skills, title }: { skills: ISkillItem[]; title: string }) {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-2 gap-4">
        {skills.slice(0, 4).map((skill) => (
          <Hexagon key={skill.name} percentage={skill.level} label={skill.name} />
        ))}
      </div>
    </section>
  );
}
