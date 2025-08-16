import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';

import SectionTitle from './SectionTitle';

export default function Certification({ certifications }: { certifications: IAwardItem[] }) {
  if (certifications.length === 0) return null;
  return (
    <section className="mt-5 avoid-page-break">
      <SectionTitle>CERTIFICATION</SectionTitle>
      <div className="grid grid-cols-2 gap-6 mt-2">
        {certifications.map((cert) => (
          <div key={cert.id}>
            <h3 className="font-bold text-gray-800 text-sm">{cert.title}</h3>
            <p className="text-xs text-gray-500">
              {cert.awarder} | Issued: {dateParser(cert.date, 'YYYY')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
