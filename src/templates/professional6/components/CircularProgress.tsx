interface CircularProgressProps {
  percentage: number;
  label: string;
}

export default function CircularProgress({ percentage, label }: CircularProgressProps) {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="text-white"
          stroke="currentColor"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="16"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="white"
          transform="rotate(90 50 50)"
          className="font-bold"
        >
          {percentage}%
        </text>
      </svg>
      <p className="text-xs text-white mt-1">{label}</p>
    </div>
  );
}
