import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';

export default function Simple6Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills } = resumeData;

  const hardSkills = [...skills.technologies, ...skills.tools];
  const softSkills = skills.practices;
  const languages = skills.languages;

  return (
    <div className="bg-white font-sans text-gray-800 text-[9pt] leading-normal h-full p-8">
      <Header basics={basics} />

      <main className="mt-4">
        <SectionValidator value={education}>
          <Education education={education} />
        </SectionValidator>

        <SectionValidator value={work}>
          <Experience work={work} />
        </SectionValidator>

        <SectionValidator value={hardSkills}>
          <HardSkills skills={hardSkills} />
        </SectionValidator>

        <SectionValidator value={softSkills}>
          <SoftSkills skills={softSkills} />
        </SectionValidator>

        <SectionValidator value={languages}>
          <Languages languages={languages} />
        </SectionValidator>
      </main>
    </div>
  );
}
