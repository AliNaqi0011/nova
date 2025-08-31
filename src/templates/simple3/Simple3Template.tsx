import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';

import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import KeyAchievements from './components/KeyAchievements';
import Certification from './components/Certification';
import Footer from './components/Footer';

export default function Simple3Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, awards } = resumeData;

  // Assuming certifications are a type of award
  const certifications = awards.filter(
    (award) =>
      award.title.toLowerCase().includes('certificate') ||
      award.title.toLowerCase().includes('certified') ||
      award.title.toLowerCase().includes('modeling')
  );

  return (
    <div className="bg-white font-sans text-gray-800 h-full p-8 flex flex-col">
      <main className="flex-grow">
        <Header basics={basics} />

        <SectionValidator value={basics.summary}>
          <Summary summary={basics.summary} />
        </SectionValidator>

        <SectionValidator value={work}>
          <Experience work={work} />
        </SectionValidator>

        <SectionValidator value={education}>
          <Education education={education} />
        </SectionValidator>

        <SectionValidator value={awards}>
          <KeyAchievements awards={awards} />
        </SectionValidator>

        <SectionValidator value={certifications}>
          <Certification certifications={certifications} />
        </SectionValidator>
      </main>

      <Footer />
    </div>
  );
}
