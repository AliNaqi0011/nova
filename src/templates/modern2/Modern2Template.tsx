import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import WorkingSkills from './components/WorkingSkills';

export default function Modern2Template() {
  const resumeData = useContext(StateContext);
  const { basics, work, skills, education } = resumeData;

  return (
    <div className="bg-black text-white font-sans h-full">
      <Header name={basics.name} label={basics.label} image={basics.image} />
      <main className="grid grid-cols-12 gap-6 p-6">
        <div className="col-span-8 space-y-6">
          <SectionValidator value={basics.summary}>
            <AboutMe summary={basics.summary} />
          </SectionValidator>

          <SectionValidator value={education}>
            <Education education={education} />
          </SectionValidator>

          <SectionValidator value={work}>
            <WorkExperience work={work} />
          </SectionValidator>
        </div>
        <div className="col-span-4 space-y-6">
          <Contact
            email={basics.email}
            phone={basics.phone}
            url={basics.url}
            location={basics.location}
          />
          <SectionValidator value={skills.languages}>
            <Skills skills={skills.languages} title="Skills" />
          </SectionValidator>
          <SectionValidator value={skills.frameworks}>
            <WorkingSkills skills={skills.frameworks} title="Working Skills" />
          </SectionValidator>
        </div>
      </main>
    </div>
  );
}
