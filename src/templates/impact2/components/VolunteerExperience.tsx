import { IVolunteeringItem } from '@/stores/volunteering.interface';
import SectionTitle from './SectionTitle';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function VolunteerExperience({ volunteer }: { volunteer: IVolunteeringItem[] }) {
  return (
    <section className="avoid-page-break">
      <SectionTitle>VOLUNTEER EXPERIENCE</SectionTitle>
      <div className="space-y-3 mt-2">
        {volunteer.map((item) => (
          <div key={item.id}>
            <h3 className="font-bold text-base text-[#3b82f6]">{item.position}</h3>
            <p className="font-semibold text-sm text-gray-700">{item.organization}</p>
            <p className="text-xs text-gray-500">
              {dateParser(item.startDate, 'MM/YYYY')} -{' '}
              {item.isVolunteeringNow ? 'Present' : dateParser(item.endDate, 'MM/YYYY')}
            </p>
            <div className="prose prose-sm max-w-none text-gray-600 mt-1">
              <p className="text-xs font-semibold">Achievements:</p>
              <HTMLRenderer htmlString={item.summary} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
