import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-bold text-[#0f2c4b] tracking-wider border-b-2 border-gray-200 pb-1 mb-4">
    {children}
  </h2>
);

export default function Certificates({ certificates }: { certificates: IAwardItem[] }) {
  return (
    <section className="mb-6 avoid-page-break">
      <SectionTitle>CERTIFICATES</SectionTitle>
      <div className="space-y-2 text-xs">
        {certificates.map((cert) => (
          <p key={cert.id} className="text-gray-700">
            {cert.title} ({dateParser(cert.date, 'YYYY')})
          </p>
        ))}
      </div>
    </section>
  );
}
