import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Sidebar from './components/Sidebar';

export default function Impact4Template() {
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

  // Using volunteer and awards for conferences and memberships as placeholders
  const conferences = awards.map((award) => ({
    name: award.title,
    details: `${award.awarder} (${award.date ? dateParser(award.date, 'YYYY') : ''})`,
  }));

  const memberships = volunteer.map((v) => v.organization);

  return (
    <div className="bg-white font-sans text-sm text-gray-700 h-full flex">
      {/* Left Sidebar */}
      <div className="w-[35%] bg-[#005f69] text-white p-6">
        <Sidebar
          basics={basics}
          skills={allSkills}
          conferences={conferences}
          memberships={memberships}
          interests={volunteer.map((v) => v.organization)} // placeholder
        />
      </div>

      {/* Right Main Content */}
      <div className="w-[65%] p-8">
        <Header basics={basics} />
        <main className="mt-6 space-y-4">
          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>
          <SectionValidator value={awards}>
            <Certificates certificates={awards} />
          </SectionValidator>
        </main>
      </div>
    </div>
  );
}

// Helper to parse dates, assuming it exists in utils
import { dateParser } from '@/helpers/utils';
