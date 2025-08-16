import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import SoftSkills from './components/SoftSkills';
import TechnicalSkills from './components/TechnicalSkills';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import Interests from './components/Interests';

export default function Simple5Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, awards, volunteer } = resumeData;

  const softSkills = skills.practices;
  const technicalSkills = [
    ...skills.technologies,
    ...skills.frameworks,
    ...skills.libraries,
    ...skills.databases,
    ...skills.tools,
  ];
  const languages = skills.languages;
  const interests = volunteer.map((v) => v.organization);
  const certificates = awards;

  return (
    <div className="bg-white font-sans text-gray-800 h-full">
      <Header basics={basics} />
      <div className="flex p-8">
        {/* Left Column */}
        <div className="w-[65%] pr-6">
          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>
        </div>

        {/* Right Column */}
        <div className="w-[35%] pl-6 border-l border-gray-200">
          <SectionValidator value={softSkills}>
            <SoftSkills skills={softSkills} />
          </SectionValidator>
          <SectionValidator value={technicalSkills}>
            <TechnicalSkills skills={technicalSkills} />
          </SectionValidator>
          <SectionValidator value={certificates}>
            <Certificates certificates={certificates} />
          </SectionValidator>
          <SectionValidator value={languages}>
            <Languages languages={languages} />
          </SectionValidator>
          <SectionValidator value={interests}>
            <Interests interests={interests} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}
