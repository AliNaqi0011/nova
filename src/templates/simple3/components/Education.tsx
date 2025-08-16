import { IEducationItem } from '@/stores/education.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const universityLogos: { [key: string]: string } = {
  'University of San Francisco': 'https://placehold.co/40x40.png',
  'University of California, Berkeley': 'https://placehold.co/40x40.png',
};

export default function Education({ education }: { education: IEducationItem[] }) {
  return (
    <section className="mt-6 avoid-page-break">
      <SectionTitle>Education</SectionTitle>
      {education.map((edu) => (
        <div key={edu.id} className="mt-4 flex gap-4 items-center">
          <div className="flex-shrink-0">
            <Image
              src={universityLogos[edu.institution] || 'https://placehold.co/40x40.png'}
              alt={`${edu.institution} logo`}
              width={40}
              height={40}
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-base font-bold text-gray-800">{edu.institution}</h3>
                <p className="text-sm font-semibold text-gray-600">{edu.studyType}</p>
              </div>
              <div className="text-right text-xs text-gray-500">
                <p>{edu.area}</p>
                <p>
                  {dateParser(edu.startDate, 'MM/YYYY')} -{' '}
                  {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'MM/YYYY')}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
