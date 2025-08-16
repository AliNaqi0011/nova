import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import PersonalProjects from './components/PersonalProjects';
import Skills from './components/Skills';
import TechnicalSkills from './components/TechnicalSkills';
import Languages from './components/Languages';
import Interests from './components/Interests';

export default function Iconic3Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, awards, volunteer } = resumeData;

  // Combining skills for different sections
  const primarySkills = skills.languages.slice(0, 6);
  const technicalSkills = [
    ...skills.technologies,
    ...skills.frameworks,
    ...skills.libraries,
    ...skills.databases,
    ...skills.tools,
  ];
  const languageSkills = skills.languages;

  // Using volunteer section as personal projects
  const personalProjects = volunteer.map((v) => ({
    name: v.organization,
    date: v.startDate,
    summary: v.summary,
  }));

  // Using awards for education achievements
  const educationWithAwards = education.map((edu) => ({
    ...edu,
    award: awards.find((award) => award.awarder.includes(edu.institution))?.title,
  }));

  // Using some skills as interests
  const interests = skills.practices.map((p) => p.name);

  return (
    <div className="bg-white font-sans text-gray-700 text-[9pt] leading-normal h-full relative">
      <Header basics={basics} />
      <main className="grid grid-cols-12 gap-x-8 px-8 mt-4">
        {/* Left Column */}
        <div className="col-span-7 space-y-4">
          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
          <SectionValidator value={educationWithAwards}>
            <Education education={educationWithAwards} />
          </SectionValidator>
          <SectionValidator value={personalProjects}>
            <PersonalProjects projects={personalProjects} />
          </SectionValidator>
        </div>

        {/* Right Column */}
        <div className="col-span-5 space-y-4">
          <SectionValidator value={primarySkills}>
            <Skills skills={primarySkills} />
          </SectionValidator>
          <SectionValidator value={technicalSkills}>
            <TechnicalSkills skills={technicalSkills} />
          </SectionValidator>
          <SectionValidator value={languageSkills}>
            <Languages languages={languageSkills} />
          </SectionValidator>
          <SectionValidator value={interests}>
            <Interests interests={interests} />
          </SectionValidator>
        </div>
      </main>
      <footer className="text-center text-xs text-gray-400 p-4">novoresume.com</footer>
    </div>
  );
}
