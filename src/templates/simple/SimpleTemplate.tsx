import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { StandardSection } from '@/helpers/common/components/StandardSection';

import Header from './components/Header';
import Summary from './components/Summary';
import KeyAchievements from './components/KeyAchievements';
import Experience from './components/Experience';
import Certification from './components/Certification';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function SimpleTemplate() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, awards, skills } = resumeData;

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
    ...skills.practices,
    ...skills.tools,
  ];

  // Assuming certifications are a type of award
  const certifications = awards.filter(
    (award) =>
      award.title.toLowerCase().includes('certificate') ||
      award.title.toLowerCase().includes('certified')
  );
  const otherAwards = awards.filter(
    (award) =>
      !award.title.toLowerCase().includes('certificate') &&
      !award.title.toLowerCase().includes('certified')
  );

  return (
    <div className="bg-white font-sans text-gray-800 h-full p-8 flex flex-col">
      <main className="flex-grow">
        <Header basics={basics} />

        <StandardSection value={basics.summary}>
          <Summary summary={basics.summary} />
        </StandardSection>

        <StandardSection value={awards}>
          <KeyAchievements awards={awards} />
        </StandardSection>

        <StandardSection value={work}>
          <Experience work={work} />
        </StandardSection>

        <StandardSection value={certifications}>
          <Certification certifications={certifications} />
        </StandardSection>

        <StandardSection value={otherAwards}>
          <Awards awards={otherAwards} />
        </StandardSection>

        <StandardSection value={allSkills}>
          <Skills skills={allSkills} />
        </StandardSection>
      </main>

      <Footer />
    </div>
  );
}
