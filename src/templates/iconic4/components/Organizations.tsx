import { IVolunteeringItem } from '@/stores/volunteering.interface';
import { dateParser } from '@/helpers/utils';
import SectionTitle from './SectionTitle';

export default function Organizations({ volunteer }: { volunteer: IVolunteeringItem[] }) {
  return (
    <section className="my-5">
      <SectionTitle>ORGANIZATIONS</SectionTitle>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
        {volunteer.map((item) => (
          <div key={item.id}>
            <h3 className="font-semibold text-gray-800">{item.organization}</h3>
            <p className="text-xs text-gray-600">
              ({dateParser(item.startDate, 'YYYY')} -{' '}
              {item.isVolunteeringNow ? 'Present' : dateParser(item.endDate, 'YYYY')})
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
