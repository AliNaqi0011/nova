import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Organizations from './components/Organizations';

export default function Iconic4Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, skills, education, volunteer } = resumeData;

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
    <div className="bg-white font-['Calibri'] text-gray-800 text-[11pt] leading-normal h-full p-10">
      <Header basics={basics} />
      <main className="mt-4">
        <SectionValidator value={allSkills}>
          <Skills skills={allSkills} />
        </SectionValidator>
        <SectionValidator value={work}>
          <WorkExperience work={work} />
        </SectionValidator>
        <SectionValidator value={education}>
          <Education education={education} />
        </SectionValidator>
        <SectionValidator value={volunteer}>
          <Organizations volunteer={volunteer} />
        </SectionValidator>
      </main>
    </div>
  );
}
