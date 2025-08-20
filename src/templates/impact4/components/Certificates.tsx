import { IAwardItem } from '@/stores/awards.interface';
import SectionTitle from './SectionTitle';
import { Award, ExternalLink } from 'lucide-react';

export default function Certificates({ certificates }: { certificates: IAwardItem[] }) {
  return (
    <section>
      <SectionTitle icon={<Award size={16} />} title="CERTIFICATES" />
      <div className="relative pl-8">
        <div className="absolute top-1.5 -left-1 w-3 h-3 bg-white border-2 border-[#00a99d] rounded-full"></div>
        <div className="absolute top-1.5 left-0 h-full border-l-2 border-gray-200"></div>
        {certificates.map((cert) => (
          <div key={cert.id} className="text-xs mb-2">
            <a href="#" className="font-bold text-gray-800 hover:underline flex items-center gap-1">
              {cert.title} <ExternalLink size={12} />
            </a>
            <p className="text-gray-600">{cert.awarder}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
