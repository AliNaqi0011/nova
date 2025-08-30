import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { StandardSection } from '@/helpers/common/components/StandardSection';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { IWorkIntrf, IEducation, ISkillsIntrf } from '@/stores/index.interface';
import { IBasicDetailsItem } from '@/stores/basic.interface';
import { IVolunteeringItem } from '@/stores/volunteering.interface';
import Sidebar from './components/Sidebar';

interface Creative1TemplateProps {
  basics: IBasicDetailsItem;
  work: IWorkIntrf[];
  education: IEducation[];
  skills: ISkillsIntrf;
  volunteer: IVolunteeringItem[];
  awards: string[]; // Added awards property
}

export default function Creative1Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, volunteer, awards } = resumeData;

  const allSkills = [...skills.languages, ...skills.frameworks];
  const hobbies = volunteer.map((item) => item.organization);

  return (
    <div className="bg-white font-sans text-sm text-gray-700 h-full">
      <Header name={basics.name} label={basics.label} />
      <div className="absolute top-[20px] right-[40px]">
        <ProfileImage src={basics.image} width="120px" height="120px" />
      </div>
      <div className="flex">
        <div className="w-[35%] bg-[#5DB9A8] p-6 text-white min-h-[920px]">
          <StandardSection value={basics}>
            <Sidebar basics={basics} skills={allSkills} languages={skills.languages} />
          </StandardSection>
        </div>
        <div className="w-[65%] p-8">
          <StandardSection value={basics.summary}>
            <MainContent
              summary={basics.summary}
              work={work}
              education={education}
              hobbies={hobbies}
            />
          </StandardSection>
        </div>
      </div>
    </div>
  );
}
