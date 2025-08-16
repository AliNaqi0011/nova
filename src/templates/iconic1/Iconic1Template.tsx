import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import GeneralSkills from './components/GeneralSkills';
import WorkExperience from './components/WorkExperience';

export default function Iconic1Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, skills } = resumeData;

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
    <div className="bg-white font-sans text-gray-700 text-[10.5pt] leading-normal h-full">
      <div className="p-10">
        <Header basics={basics} />

        <main className="mt-6">
          <SectionValidator value={allSkills}>
            <GeneralSkills skills={allSkills} />
          </SectionValidator>
          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
        </main>
      </div>
      <footer className="text-right pr-10 pb-4 text-xs text-gray-400">Page 1 of 2</footer>
    </div>
  );
}
