import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Summary from './components/Summary';
import KeyAchievements from './components/KeyAchievements';
import Courses from './components/Courses';
import Passions from './components/Passions';
import Footer from './components/Footer';

export default function Simple2Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, awards, volunteer } = resumeData;

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
    ...skills.practices,
    ...skills.tools,
  ];

  // Using volunteer as passions
  const passions = volunteer.map((v) => ({
    name: v.organization,
    summary: v.summary,
  }));

  // Using education courses as courses
  const courses = education.flatMap((edu) =>
    edu.courses.map((course) => ({
      name: course,
      summary: `Course from ${edu.institution}`,
    }))
  );

  return (
    <div className="bg-white font-sans text-gray-800 h-full text-[10pt] leading-normal flex flex-col">
      <main className="flex-grow p-8">
        <Header basics={basics} />

        <div className="grid grid-cols-12 gap-x-10 mt-6">
          <div className="col-span-7 space-y-5">
            <SectionValidator value={work}>
              <Experience work={work} />
            </SectionValidator>
            <SectionValidator value={education}>
              <Education education={education} />
            </SectionValidator>
            <SectionValidator value={allSkills}>
              <Skills skills={allSkills} />
            </SectionValidator>
          </div>

          <div className="col-span-5 space-y-5">
            <SectionValidator value={basics.summary}>
              <Summary summary={basics.summary} />
            </SectionValidator>
            <SectionValidator value={awards}>
              <KeyAchievements awards={awards} />
            </SectionValidator>
            <SectionValidator value={courses}>
              <Courses courses={courses} />
            </SectionValidator>
            <SectionValidator value={passions}>
              <Passions passions={passions} />
            </SectionValidator>
          </div>
        </div>
      </main>
      <Footer url={basics.url} />
    </div>
  );
}
