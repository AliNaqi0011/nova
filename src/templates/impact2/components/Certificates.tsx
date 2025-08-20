import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';

export default function Certificates({ certificates }: { certificates: IAwardItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle>CERTIFICATES</SectionTitle>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-2 text-xs">
        {certificates.map((cert) => (
          <p key={cert.id} className="text-gray-700">
            {cert.title} ({dateParser(cert.date, 'YYYY')})
          </p>
        ))}
      </div>
    </section>
  );
}
