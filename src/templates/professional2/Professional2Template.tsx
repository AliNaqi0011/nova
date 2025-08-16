import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import Image from 'next/image';

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Header from './components/Header';
import CareerObjective from './components/CareerObjective';
import Education from './components/Education';
import Experience from './components/Experience';
import Interests from './components/Interests';

export default function Professional2Template() {
  const resumeData = useContext(StateContext);
  const { basics, work, education, skills } = resumeData;

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
    ...skills.practices,
    ...skills.tools,
  ];

  // Mock data as not available in store
  const interests = ['Photography', 'Gadgets', 'Online Gaming', 'Coffee', 'Cycling', 'Reading'];

  return (
    <div className="flex h-full font-sans text-sm">
      {/* Left Column */}
      <div className="w-1/3 bg-[#435263] text-white p-6 flex flex-col gap-6">
        <SectionValidator value={basics.image}>
          <div className="w-full">
            <Image
              src={basics.image}
              alt={basics.name}
              width={200}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
        </SectionValidator>

        <SectionValidator value={basics.summary}>
          <AboutMe summary={basics.summary} />
        </SectionValidator>

        <Contact basics={basics} />

        <SectionValidator value={allSkills}>
          <Skills skills={allSkills} />
        </SectionValidator>
      </div>

      {/* Right Column */}
      <div className="w-2/3 p-8 text-gray-700">
        <Header name={basics.name} label={basics.label} />
        <div className="space-y-6 mt-6">
          <SectionValidator value={basics.objective}>
            <CareerObjective objective={basics.objective} />
          </SectionValidator>

          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>

          <SectionValidator value={work}>
            <Experience work={work} />
          </SectionValidator>

          {/* Using mocked data for interests as it's not in the data structure */}
          <Interests interests={interests} />
        </div>
      </div>
    </div>
  );
}
