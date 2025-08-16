import { IAwardItem } from '@/stores/awards.interface';
import SectionTitle from './SectionTitle';

export default function Certification({ certifications }: { certifications: IAwardItem[] }) {
  if (certifications.length === 0) return null;
  return (
    <section className="mt-6 avoid-page-break">
      <SectionTitle>Certification</SectionTitle>
      <div className="mt-2 space-y-2">
        {certifications.map((cert) => (
          <div key={cert.id} className="text-sm">
            <span className="font-bold text-blue-600">{cert.title}</span> &mdash;{' '}
            <span className="text-gray-600">{cert.summary.replace('*', '')}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
