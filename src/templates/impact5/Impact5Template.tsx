import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

export default function Impact5Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, skills, education } = resumeData;

  const hardSkills = [...skills.technologies, ...skills.tools, ...skills.frameworks];
  const softSkills = skills.practices;

  return (
    <div className="bg-white font-['Calibri'] text-gray-700 h-full p-8 text-[10.5pt]">
      <Header basics={basics} />
      <main className="mt-6 space-y-5">
        <SectionValidator value={hardSkills}>
          <HardSkills skills={hardSkills} />
        </SectionValidator>
        <SectionValidator value={work}>
          <WorkExperience work={work} />
        </SectionValidator>
        <SectionValidator value={softSkills}>
          <SoftSkills skills={softSkills} />
        </SectionValidator>
        <SectionValidator value={education}>
          <Education education={education} />
        </SectionValidator>
      </main>
    </div>
  );
}
