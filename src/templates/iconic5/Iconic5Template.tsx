import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import AreasOfExpertise from './components/AreasOfExpertise';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

export default function Iconic5Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, skills, education } = resumeData;

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
    ...skills.practices,
    ...skills.tools,
  ];

  return (
    <div className="bg-white font-['Calibri'] text-gray-700 text-sm leading-normal h-full p-10">
      <Header basics={basics} />
      <main className="mt-6">
        <SectionValidator value={allSkills}>
          <AreasOfExpertise skills={allSkills} />
        </SectionValidator>
        <SectionValidator value={work}>
          <WorkExperience work={work} />
        </SectionValidator>
        <SectionValidator value={education}>
          <Education education={education} />
        </SectionValidator>
      </main>
    </div>
  );
}
