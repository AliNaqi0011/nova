import { IEducationItem } from '@/stores/education.interface';
import SectionTitle from './SectionTitle';
import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export default function AcademicBackground({ education }: { education: IEducationItem[] }) {
  const courses =
    'Statics, Dynamics, Engineering, Analysis, Mechanics of Materials, Fluid Mechanics, Dynamics of Machinery, Measurement and Instrumentation, Mechanical Engineering';

  return (
    <section>
      <SectionTitle>ACADEMIC BACKGROUND</SectionTitle>
      {education.map((edu) => (
        <div key={edu.id} className="text-xs mt-2">
          <p className="font-bold">
            {edu.institution}, {dateParser(edu.startDate, 'YYYY')} -{' '}
            {edu.isStudyingHere ? 'Present' : dateParser(edu.endDate, 'YYYY')}
          </p>
          <div className="italic text-gray-600">
            <HTMLRenderer htmlString={edu.area} />
          </div>
          <p className="mt-2">
            <span className="font-semibold">Completed Courses in Major:</span> {courses}
          </p>
          <p className="font-semibold mt-2">Design Project:</p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>
              Completed senior project at DEF Company, a manufacturer of machine tools for the sheet
              metal industry.
            </li>
            <li>
              Assisted engineering department in designing straight hand seamer used in bending,
              seaming and flattening sheet metal.
            </li>
            <li>Created models using SolidWorks and participated in cross-functional</li>
          </ul>
        </div>
      ))}
    </section>
  );
}
