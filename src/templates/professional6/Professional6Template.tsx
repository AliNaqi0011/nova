import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { ISkillItem } from '@/stores/skill.interface';
import { IVolunteeringItem } from '@/stores/volunteering.interface';
// import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Professional6Template() {
  const resumeData = useContext(StateContext);
  const { basics, work, education, skills, volunteer, awards } = resumeData;

  const sidebarSkills = skills.languages.filter((_: ISkillItem, i: number) => i < 6); // Max 6 skills
  const interests = volunteer.map((item: IVolunteeringItem) => item.organization);
  const achievements = awards;

  // Mock data for strengths
  const strengths = ['Patience', 'Perseverance', 'Planning', 'Positivity'];

  return (
    <div className="bg-white font-sans text-sm text-gray-800 h-full flex flex-col">
      <div className="flex flex-grow">
        <Sidebar
          basics={basics} // Assuming basics is passed to Sidebar
          skills={sidebarSkills} // Assuming skills is passed to Sidebar
          interests={interests} // Assuming interests is passed to Sidebar
          strengths={strengths} // Assuming strengths is passed to Sidebar
          languages={skills.languages} // Assuming languages is passed to Sidebar
          achievements={achievements}
        />
        <MainContent basics={basics} work={work} education={education} summary={basics.summary} />
      </div>
      <Footer url={basics.url} />
    </div>
  );
}
