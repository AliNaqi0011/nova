import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';

interface Reference {
  name: string;
  title: string;
  email: string;
  phone: string;
}

// A mock reference section as we don't have this in our data store
const mockReference = {
  name: 'Mihde Cuca',
  title: 'Director / Company here',
  email: 'youremail@gmail.com',
  phone: '+000 123 456 789',
};

const ReferenceSection = ({ reference }: { reference: Reference }) => (
  <section className="mt-6">
    <h2 className="text-sm font-bold uppercase text-[#0c4a6e] border-b-2 border-gray-300 pb-1 mb-2">
      Reference
    </h2>
    <div className="text-xs">
      <p className="font-bold">{reference.name}</p>
      <p>{reference.title}</p>
      <p>Email: {reference.email}</p>
      <p>Phone: {reference.phone}</p>
    </div>
  </section>
);
import Summary from './components/Summary';

export default function Modern4Template() {
  const resumeData = useContext(StateContext);
  const { basics, work, education, skills } = resumeData;
  const { languages, frameworks } = skills;
  const ratedSkills = [...languages, ...frameworks];

  return (
    <div className="bg-white flex h-full font-sans">
      {/* Left Column */}
      <div className="w-1/3 p-6 border-r-2 border-gray-100">
        <SectionValidator value={basics.summary}>
          <AboutMe summary={basics.summary} />
        </SectionValidator>

        <SectionValidator value={education}>
          <Education education={education} />
        </SectionValidator>

        <SectionValidator value={ratedSkills}>
          <Skills skills={ratedSkills} />
        </SectionValidator>

        <Contact basics={basics} />

        {/* Mock reference since it's in the design but not in our data model */}
        <ReferenceSection reference={mockReference} />
      </div>

      {/* Right Column */}
      <div className="w-2/3 p-6">
        <div className="grid grid-cols-3 gap-6 items-center mb-4">
          <div className="col-span-2">
            <Header name={basics.name} label={basics.label} />
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="border-4 border-[#00A9E8] p-1">
              <ProfileImage
                src={basics.image}
                width="120px"
                height="120px"
                imageWrapperClassname="w-[120px] h-[120px]"
              />
            </div>
          </div>
        </div>

        <SectionValidator value={basics.objective}>
          <Summary summary={basics.objective} />
        </SectionValidator>

        <SectionValidator value={work}>
          <Experience work={work} />
        </SectionValidator>
      </div>
    </div>
  );
}
