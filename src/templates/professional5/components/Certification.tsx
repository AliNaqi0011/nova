const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 pb-1.5 border-b-2 border-black">
    {title}
  </h2>
);

interface Certification {
  title: string;
  issuer: string;
  description: string;
}

export default function Certification({ certifications }: { certifications: Certification[] }) {
  return (
    <section className="mt-6">
      <SectionTitle title="Certification" />
      <div className="mt-3 space-y-3">
        {certifications.map((cert, index) => (
          <div key={index}>
            <h4 className="font-bold text-[#4a89a8] text-[10pt] hover:underline cursor-pointer">
              {cert.title}
            </h4>
            <p className="text-[9pt] text-gray-600 leading-snug">
              {cert.description.replace('* ', '')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
