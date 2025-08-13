import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import Contact from './components/Contact';
import ProfileSummary from './components/ProfileSummary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

export default function Modern3Template() {
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

  return (
    <div className="flex h-full font-sans text-gray-700">
      {/* Left Column */}
      <div className="w-1/3 bg-gray-50 p-6 flex flex-col">
        <div className="flex justify-center mb-6">
          <ProfileImage src={basics.image} width="120px" height="120px" />
        </div>
        <Contact basics={basics} />
        <SectionValidator value={basics.summary}>
          <ProfileSummary summary={basics.summary} />
        </SectionValidator>
        <SectionValidator value={allSkills}>
          <Skills skills={allSkills} title="Skills" />
        </SectionValidator>
        <SectionValidator value={skills.languages}>
          <Skills skills={skills.languages} title="Languages" />
        </SectionValidator>
      </div>

      {/* Right Column */}
      <div className="w-2/3 flex flex-col">
        <div className="bg-[#008080] text-white p-6 text-center">
          <h1 className="text-4xl font-bold">{basics.name}</h1>
          <p className="text-xl mt-1">{basics.label}</p>
        </div>
        <div className="p-6 space-y-6 overflow-y-auto">
          <SectionValidator value={work}>
            <Experience work={work} />
          </SectionValidator>
          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}
