import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { ExternalLink } from 'lucide-react';

export default function Certificates({ certificates }: { certificates: IAwardItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle title="Certificates" />
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4 ml-12">
        {certificates.map((cert) => (
          <div key={cert.id}>
            <a href="#" className="flex items-center gap-2 font-bold text-sm hover:text-[#8e2de2]">
              {cert.title} ({dateParser(cert.date, 'YYYY')})
              <ExternalLink size={12} />
            </a>
            <p className="text-xs text-gray-600">{cert.awarder}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
