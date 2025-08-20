import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Contact from './components/Contact';
import TechnicalSkills from './components/TechnicalSkills';
import GeneralSkills from './components/GeneralSkills';
import Certificates from './components/Certificates';

export default function Impact3Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, awards } = resumeData;

  const technicalSkills = {
    'Database/Server': skills.databases.map((s) => s.name).join(', '),
    'Programming Language': skills.languages.map((s) => s.name).join(', '),
    'Other Software/Tools': skills.tools.map((s) => s.name).join(', '),
  };

  const generalSkills = [
    ...skills.technologies,
    ...skills.practices,
    ...skills.frameworks,
    ...skills.libraries,
  ];

  return (
    <div className="bg-white font-sans text-gray-800 h-full flex">
      {/* Left Column */}
      <div className="w-[65%] p-8">
        <Header basics={basics} />
        <main className="mt-6 space-y-6">
          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>
        </main>
      </div>

      {/* Right Column */}
      <div className="w-[35%] bg-[#002D62] text-white p-6">
        <Contact basics={basics} />
        <div className="mt-6 space-y-6">
          <SectionValidator value={Object.values(technicalSkills).join('')}>
            <TechnicalSkills skills={technicalSkills} />
          </SectionValidator>
          <SectionValidator value={generalSkills}>
            <GeneralSkills skills={generalSkills} />
          </SectionValidator>
          <SectionValidator value={awards}>
            <Certificates certificates={awards} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}
