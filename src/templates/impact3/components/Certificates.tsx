import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { Award } from 'lucide-react';

export default function Certificates({ certificates }: { certificates: IAwardItem[] }) {
  return (
    <section>
      <SectionTitle icon={<Award size={20} />} title="CERTIFICATES" />
      <div className="space-y-3 mt-2">
        {certificates.map((cert) => (
          <p key={cert.id} className="text-xs">
            {cert.title} ({dateParser(cert.date, 'YYYY')})
          </p>
        ))}
      </div>
    </section>
  );
}
