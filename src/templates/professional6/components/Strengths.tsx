import { CheckCircle, Zap, TrendingUp, Award } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  Patience: <CheckCircle size={12} />,
  Perseverance: <Zap size={12} />,
  Planning: <TrendingUp size={12} />,
  Positivity: <Award size={12} />,
};

const getStrengthIcon = (strength: string) => {
  return iconMap[strength] || <CheckCircle size={12} />;
};

export default function Strengths({ strengths }: { strengths: string[] }) {
  return (
    <div>
      <h3 className="text-base font-bold uppercase mb-2">STRENGTHS</h3>
      <div className="grid grid-cols-2 gap-1 text-xs">
        {strengths.slice(0, 4).map((strength) => (
          <div
            key={strength}
            className="flex items-center gap-1.5 border border-white rounded-sm p-1"
          >
            {getStrengthIcon(strength)}
            <span>{strength}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
