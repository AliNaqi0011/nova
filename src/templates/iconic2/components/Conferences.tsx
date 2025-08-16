import SectionTitle from './SectionTitle';

interface Conference {
  title: string;
  details: string;
}

export default function Conferences({ conferences }: { conferences: Conference[] }) {
  return (
    <section>
      <SectionTitle>CONFERENCES & COURSES</SectionTitle>
      <div className="space-y-3 mt-2">
        {conferences.map((conf, index) => (
          <div key={index}>
            <h3 className="font-bold text-gray-800 text-[10pt] leading-tight">{conf.title}</h3>
            <p className="text-[9.5pt] text-gray-600 leading-snug">{conf.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
