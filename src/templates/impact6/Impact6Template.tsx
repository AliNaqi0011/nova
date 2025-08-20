import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import Summary from './components/Summary';
import ContactBar from './components/ContactBar';
import GeneralSkills from './components/GeneralSkills';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';

export default function Impact6Template() {
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
    <div className="bg-white font-sans text-gray-700 h-full flex flex-col text-[10pt] leading-snug">
      <Header name={basics.name} label={basics.label} />

      <SectionValidator value={basics.summary}>
        <Summary summary={basics.summary} />
      </SectionValidator>

      <ContactBar basics={basics} />

      <main className="p-8 flex-grow">
        <SectionValidator value={allSkills}>
          <GeneralSkills skills={allSkills} />
        </SectionValidator>
        <SectionValidator value={work}>
          <WorkExperience work={work} />
        </SectionValidator>
      </main>

      <Footer />
    </div>
  );
}
