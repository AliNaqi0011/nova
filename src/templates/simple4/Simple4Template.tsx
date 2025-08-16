import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Summary from './components/Summary';
import KeyAchievements from './components/KeyAchievements';
import Education from './components/Education';
import Courses from './components/Courses';

export default function Simple4Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, awards } = resumeData;

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
    ...skills.practices,
    ...skills.tools,
  ];

  // Using education courses as courses
  const courses = education.flatMap((edu) =>
    edu.courses.map((course) => ({
      name: course,
      provider: edu.institution,
      description: 'Course covering various aspects of the field.',
    }))
  );

  return (
    <div className="bg-white font-sans text-[9pt] leading-normal h-full p-8">
      <Header basics={basics} />
      <main className="grid grid-cols-12 gap-x-8 mt-6">
        {/* Left Column */}
        <div className="col-span-7">
          <SectionValidator value={work}>
            <Experience work={work} />
          </SectionValidator>
          <SectionValidator value={allSkills}>
            <Skills skills={allSkills} />
          </SectionValidator>
        </div>

        {/* Right Column */}
        <div className="col-span-5">
          <SectionValidator value={basics.summary}>
            <Summary summary={basics.summary} />
          </SectionValidator>
          <SectionValidator value={awards}>
            <KeyAchievements awards={awards} />
          </SectionValidator>
          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>
          <SectionValidator value={courses}>
            <Courses courses={courses} />
          </SectionValidator>
        </div>
      </main>
    </div>
  );
}
