import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import ContactBar from './components/ContactBar';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import VerticalSection from './components/VerticalSection';

export default function Modern5Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, education, skills, work, awards } = resumeData;

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
  ];

  // Mock data for interests as it's not in the store
  const interests = {
    title: 'Interests',
    items: [
      {
        title: 'Lorem Ipsum Interest 1',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        title: 'Following Sports: Football, Cricket',
        details:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
      },
      {
        title: 'Travel Enthusiast',
        details:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  };

  return (
    <div className="bg-white font-sans text-gray-700 h-full">
      <ContactBar basics={basics} />
      <Header basics={basics} />

      <main className="p-8">
        <SectionValidator value={education}>
          <Education education={education} />
        </SectionValidator>

        <div className="grid grid-cols-2 gap-8 mt-6">
          <SectionValidator value={allSkills}>
            <Skills skills={allSkills} />
          </SectionValidator>
          <Interests interests={interests} />
        </div>

        <div className="grid grid-cols-2 gap-8 mt-6">
          <SectionValidator value={work}>
            <VerticalSection title="EXPERTISE" items={work.map((w) => w.summary)} />
          </SectionValidator>
          <SectionValidator value={awards}>
            <VerticalSection title="AWARDS" items={awards.map((a) => a.summary)} />
          </SectionValidator>
        </div>
      </main>
    </div>
  );
}
