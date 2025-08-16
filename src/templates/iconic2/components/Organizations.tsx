import SectionTitle from './SectionTitle';

interface Organization {
  name: string;
  date: string;
}

export default function Organizations({ organizations }: { organizations: Organization[] }) {
  return (
    <section>
      <SectionTitle>ORGANIZATIONS</SectionTitle>
      <div className="space-y-3 mt-2">
        {organizations.map((org, index) => (
          <div key={index}>
            <h3 className="font-bold text-gray-800 text-[10pt] leading-tight">{org.name}</h3>
            <p className="text-[9.5pt] text-gray-600 leading-snug">({org.date})</p>
          </div>
        ))}
      </div>
    </section>
  );
}
