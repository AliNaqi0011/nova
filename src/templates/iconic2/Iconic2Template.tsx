import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { IBasics, IWorkIntrf, IEducation, ISkillsIntrf } from '@/stores/index.interface';
import { IVolunteeringItem } from '@/stores/volunteering.interface';
import { IAwardItem } from '@/stores/awards.interface';
import { dateParser } from '@/helpers/utils';

import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Organizations from './components/Organizations';
import HonoursAndAwards from './components/HonoursAndAwards';
import Conferences from './components/Conferences';

interface Iconic2TemplateProps {
  basics: IBasics;
  work: IWorkIntrf[];
  education: IEducation[];
  skills: ISkillsIntrf;
  volunteer: IVolunteeringItem[];
  awards: IAwardItem[];
}

export default function Iconic2Template() {
  const resumeData = useContext(StateContext) as Iconic2TemplateProps;
  if (!resumeData) return null;

  const { basics, work, education, skills, volunteer, awards } = resumeData;

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
    ...skills.practices,
    ...skills.tools,
  ];

  // Using volunteer section for organizations
  const organizations = volunteer.map((item) => ({
    name: item.organization,
    date: `${dateParser(item.startDate, 'YYYY')} - ${
      item.isVolunteeringNow ? 'Present' : dateParser(item.endDate, 'YYYY')
    }`,
  }));

  // Using education courses for conferences
  const conferences = education
    .flatMap((edu) => edu.courses.map((course) => ({ title: course, details: edu.institution })))
    .slice(0, 3); // Limit to 3 for design reasons

  return (
    <div className="bg-white font-sans text-gray-700 text-xs leading-normal h-full p-8">
      <Header basics={basics} />
      <main className="grid grid-cols-12 gap-x-10 mt-6">
        <div className="col-span-7 space-y-6">
          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>
          <SectionValidator value={skills.languages}>
            <Languages languages={skills.languages} />
          </SectionValidator>
        </div>
        <div className="col-span-5 space-y-6">
          <SectionValidator value={allSkills}>
            <Skills skills={allSkills} />
          </SectionValidator>
          <SectionValidator value={organizations}>
            <Organizations organizations={organizations} />
          </SectionValidator>
          <SectionValidator value={awards}>
            <HonoursAndAwards awards={awards} />
          </SectionValidator>
          <SectionValidator value={conferences}>
            <Conferences conferences={conferences} />
          </SectionValidator>
        </div>
      </main>
      <footer className="text-center text-gray-500 mt-6 text-xs">
        <p>novoresume.com</p>
      </footer>
    </div>
  );
}
