import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import ContactBar from './components/ContactBar';
import WorkExperience from './components/WorkExperience';
import Licensure from './components/Licensure';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import Languages from './components/Languages';
import Interests from './components/Interests';

export default function ImpactTemplate() {
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

  // Using volunteer section for Licensure/Training and Interests
  const licensure = volunteer.map((v) => v.organization);
  const interests = volunteer.map((v) => v.organization);

  return (
    <div className="bg-white font-['Calibri'] text-gray-700 h-full p-6">
      <Header basics={basics} />
      <ContactBar basics={basics} />
      <main className="grid grid-cols-12 gap-x-8 mt-6">
        {/* Left Column */}
        <div className="col-span-7 space-y-6">
          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
          <SectionValidator value={licensure}>
            <Licensure items={licensure} />
          </SectionValidator>
        </div>

        {/* Right Column */}
        <div className="col-span-5 space-y-6">
          <SectionValidator value={allSkills}>
            <Skills skills={allSkills} />
          </SectionValidator>
          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>
          <SectionValidator value={awards}>
            <Awards awards={awards} />
          </SectionValidator>
          <SectionValidator value={skills.languages}>
            <Languages languages={skills.languages} />
          </SectionValidator>
          <SectionValidator value={interests}>
            <Interests interests={interests} />
          </SectionValidator>
        </div>
      </main>
    </div>
  );
}
