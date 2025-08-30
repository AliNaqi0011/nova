import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import AdditionalSkills from './components/AdditionalSkills';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import KeyAchievements from './components/KeyAchievements';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Education from './components/Education';

export default function Professional5Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, awards, volunteer } = resumeData;

  const additionalSkills = [...skills.technologies, ...skills.practices, ...skills.tools];
  const mainSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.libraries,
    ...skills.databases,
  ];

  // Using awards for certification and volunteer for projects as placeholders
  const certifications = awards.map((a) => ({
    title: a.title,
    issuer: a.awarder,
    description: a.summary,
  }));
  const projects = volunteer.map((p) => ({ ...p, name: p.organization, highlights: [p.summary] }));

  return (
    <div className="bg-white font-sans text-gray-800 text-[10pt] leading-normal h-full">
      <div className="p-10">
        <Header basics={basics} />
        <main className="grid grid-cols-12 gap-x-8 mt-6">
          {/* Left Column */}
          <div className="col-span-8">
            <SectionValidator value={additionalSkills}>
              <AdditionalSkills skills={additionalSkills} />
            </SectionValidator>
            <SectionValidator value={basics.summary}>
              <Summary summary={basics.summary} />
            </SectionValidator>
            <SectionValidator value={work}>
              <Experience work={work} />
            </SectionValidator>
            <SectionValidator value={projects}>
              <Projects projects={projects} />
            </SectionValidator>
          </div>

          {/* Right Column */}
          <div className="col-span-4">
            <SectionValidator value={awards}>
              <KeyAchievements awards={awards} />
            </SectionValidator>
            <SectionValidator value={mainSkills}>
              <Skills skills={mainSkills} />
            </SectionValidator>
            <SectionValidator value={certifications}>
              <Certification certifications={certifications} />
            </SectionValidator>
            <SectionValidator value={education}>
              <Education education={education} />
            </SectionValidator>
          </div>
        </main>
      </div>
    </div>
  );
}
