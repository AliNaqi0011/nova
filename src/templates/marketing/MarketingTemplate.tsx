import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import ContactBar from './components/ContactBar';
import GeneralSkills from './components/GeneralSkills';
import WorkExperience from './components/WorkExperience';
import PersonalProjects from './components/PersonalProjects';
import Certificates from './components/Certificates';

export default function MarketingTemplate() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, skills, volunteer, awards } = resumeData;

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
    ...skills.practices,
    ...skills.tools,
  ];

  // Using volunteer section for personal projects
  const personalProjects = volunteer;

  return (
    <div className="bg-white font-sans text-gray-700 h-full p-10">
      <Header basics={basics} />
      <ContactBar basics={basics} />

      <main className="mt-6 space-y-6">
        <SectionValidator value={allSkills}>
          <GeneralSkills skills={allSkills} />
        </SectionValidator>

        <SectionValidator value={work}>
          <WorkExperience work={work} />
        </SectionValidator>

        <SectionValidator value={personalProjects}>
          <PersonalProjects projects={personalProjects} />
        </SectionValidator>

        <SectionValidator value={awards}>
          <Certificates certificates={awards} />
        </SectionValidator>
      </main>
    </div>
  );
}
