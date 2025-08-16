import SectionTitle from './SectionTitle';

interface Course {
  name: string;
  summary: string;
}

export default function Courses({ courses }: { courses: Course[] }) {
  return (
    <section>
      <SectionTitle>COURSES</SectionTitle>
      <div className="space-y-2 mt-2">
        {courses.map((course, index) => (
          <div key={index}>
            <h3 className="font-bold text-gray-800 text-[10pt] leading-tight">{course.name}</h3>
            <p className="text-[9.5pt] text-gray-600 leading-snug">{course.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
