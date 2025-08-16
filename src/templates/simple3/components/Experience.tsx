import { IExperienceItem } from '@/stores/experience.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import Image from 'next/image';

const companyLogos: { [key: string]: string } = {
  'Eli Lilly': 'https://placehold.co/40x40.png',
  Amgen: 'https://placehold.co/40x40.png',
  'BioMarin Pharmaceutical': 'https://placehold.co/40x40.png',
};

export default function Experience({ work }: { work: IExperienceItem[] }) {
  return (
    <section className="mt-6 avoid-page-break">
      <SectionTitle>Experience</SectionTitle>
      {work.map((job) => (
        <div key={job.id} className="mt-4 flex gap-4">
          <div className="flex-shrink-0">
            <Image
              src={companyLogos[job.name] || 'https://placehold.co/40x40.png'}
              alt={`${job.name} logo`}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-base font-bold text-gray-800">{job.position}</h3>
                <p className="text-sm font-semibold text-gray-600">{job.name}</p>
              </div>
              <div className="text-right text-xs text-gray-500">
                <p>{job.url ? job.url.split('//')[1] : 'South San Francisco, CA'}</p>
                <p>
                  {dateParser(job.startDate, 'MM/YYYY')} -{' '}
                  {job.isWorkingHere ? 'Present' : dateParser(job.endDate, 'MM/YYYY')}
                </p>
              </div>
            </div>
            <div className="prose prose-sm text-gray-600 mt-1 text-sm">
              <HTMLRenderer htmlString={job.summary} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
