import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';

export default function Iconic6Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, awards, volunteer } = resumeData;

  const hardSkills = skills.technologies
    .concat(skills.frameworks, skills.libraries, skills.tools)
    .slice(0, 9);
  const softSkills = skills.practices.slice(0, 3);
  const portfolioItems = volunteer;
  const certificates = awards;

  return (
    <div className="bg-white font-sans text-gray-800 text-[9.5pt] leading-normal h-full p-8">
      <Header basics={basics} />
      <main className="grid grid-cols-12 gap-x-10 mt-6">
        {/* Left Column */}
        <div className="col-span-7 space-y-6">
          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>
        </div>

        {/* Right Column */}
        <div className="col-span-5 space-y-6">
          <SectionValidator value={hardSkills}>
            <HardSkills skills={hardSkills} />
          </SectionValidator>
          <SectionValidator value={softSkills}>
            <SoftSkills skills={softSkills} />
          </SectionValidator>
          <SectionValidator value={portfolioItems}>
            <Portfolio volunteer={portfolioItems} />
          </SectionValidator>
          <SectionValidator value={certificates}>
            <Certificates awards={certificates} />
          </SectionValidator>
        </div>
      </main>
    </div>
  );
}
