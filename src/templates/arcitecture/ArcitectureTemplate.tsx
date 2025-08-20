import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import PersonalProjects from './components/PersonalProjects';
import Skills from './components/Skills';
import TechnicalSkills from './components/TechnicalSkills';
import Languages from './components/Languages';
import Interests from './components/Interests';

export default function ArcitectureTemplate() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, volunteer, awards } = resumeData;

  const primarySkills = skills.practices;
  const technicalSkills = [
    ...skills.technologies,
    ...skills.frameworks,
    ...skills.libraries,
    ...skills.databases,
    ...skills.tools,
  ];
  const languageSkills = skills.languages;
  const interests = volunteer.map((v) => v.organization);
  const personalProjects = volunteer.map((v) => ({
    ...v,
    name: v.organization,
    summary: v.summary,
    highlights: [v.summary],
  }));

  return (
    <div className="bg-white font-['Calibri'] text-gray-700 text-sm leading-normal h-full">
      <Header basics={basics} />
      <main className="p-8 grid grid-cols-12 gap-x-8 -mt-10">
        <div className="col-span-7 space-y-4">
          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
          <SectionValidator value={education}>
            <Education education={education} awards={awards} />
          </SectionValidator>
          <SectionValidator value={personalProjects}>
            <PersonalProjects projects={personalProjects} />
          </SectionValidator>
        </div>
        <div className="col-span-5 space-y-4">
          <SectionValidator value={primarySkills}>
            <Skills skills={primarySkills} />
          </SectionValidator>
          <SectionValidator value={technicalSkills}>
            <TechnicalSkills skills={technicalSkills} />
          </SectionValidator>
          <SectionValidator value={languageSkills}>
            <Languages languages={languageSkills} />
          </SectionValidator>
          <SectionValidator value={interests}>
            <Interests interests={interests} />
          </SectionValidator>
        </div>
      </main>
    </div>
  );
}
