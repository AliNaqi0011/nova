import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import ContactBar from './components/ContactBar';
import SoftSkills from './components/SoftSkills';
import Education from './components/Education';
import VolunteerExperience from './components/VolunteerExperience';
import Certificates from './components/Certificates';
import Languages from './components/Languages';

export default function Impact2Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, volunteer, education, awards, skills } = resumeData;

  // Using practices for soft skills as a placeholder
  const softSkills = skills.practices;

  return (
    <div className="bg-white font-['Calibri'] text-gray-700 h-full">
      <Header basics={basics} />
      <div className="p-8">
        <ContactBar basics={basics} />
        <main className="mt-6 space-y-5">
          <SectionValidator value={softSkills}>
            <SoftSkills skills={softSkills} />
          </SectionValidator>

          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>

          <SectionValidator value={volunteer}>
            <VolunteerExperience volunteer={volunteer} />
          </SectionValidator>

          <SectionValidator value={awards}>
            <Certificates certificates={awards} />
          </SectionValidator>

          <SectionValidator value={skills.languages}>
            <Languages languages={skills.languages} />
          </SectionValidator>
        </main>
      </div>
    </div>
  );
}
