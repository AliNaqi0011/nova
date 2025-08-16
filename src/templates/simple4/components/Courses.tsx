import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-xs font-bold text-gray-500 tracking-wider border-b border-gray-200 pb-1 mb-3">
    {title}
  </h2>
);

interface Course {
  name: string;
  provider: string;
  description: string;
}

export default function Courses({ courses }: { courses: Course[] }) {
  return (
    <section className="mb-4 avoid-page-break">
      <SectionTitle title="COURSES" />
      <div className="space-y-2 mt-2">
        {courses.slice(0, 2).map((course, index) => (
          <div key={index}>
            <h3 className="text-[10pt] font-bold text-[#2dd4bf]">{course.name}</h3>
            <div className="text-[9.5pt] text-gray-600 leading-snug">
              <HTMLRenderer htmlString={course.description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
