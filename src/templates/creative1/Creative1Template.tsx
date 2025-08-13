import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { useContext } from 'react';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { IBasics, IWorkIntrf, IEducation, ISkillsIntrf } from '@/stores/index.interface';
import { IVolunteeringItem } from '@/stores/volunteering.interface';
import Sidebar from './components/Sidebar';

interface Creative1TemplateProps {
  basics: IBasics;
  work: IWorkIntrf[];
  education: IEducation[];
  skills: ISkillsIntrf;
  volunteer: IVolunteeringItem[];
  awards: string[]; // Added awards property
}

export default function Creative1Template() {
  const resumeData: Creative1TemplateProps = useContext(StateContext);
  const { basics, work, education, skills, volunteer } = resumeData;

  const allSkills = [...skills.languages, ...skills.frameworks];

  // Using volunteer activities as hobbies as a placeholder
  const hobbies = volunteer.map((item) => item.organization);

  return (
    <div className="bg-white font-sans text-sm text-gray-700 h-full">
      <Header name={basics.name} label={basics.label} />
      <div className="absolute top-[20px] right-[40px]">
        <ProfileImage src={basics.image} width="120px" height="120px" />
      </div>
      <div className="flex">
        <div className="w-[35%] bg-[#5DB9A8] p-6 text-white min-h-[920px]">
          <Sidebar basics={basics} skills={allSkills} languages={skills.languages} />
        </div>
        <div className="w-[65%] p-8">
          <MainContent
            summary={basics.summary}
            work={work}
            education={education}
            hobbies={hobbies}
          />
        </div>
      </div>
    </div>
  );
}
