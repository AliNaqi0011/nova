import { StateContext } from '@/modules/builder/resume/StateContext';
import { useContext } from 'react';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Header from './components/Header';

export default function Professional3Template() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const { basics, work, education, skills, awards } = resumeData;

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
  ];

  return (
    <div className="flex h-full font-sans text-sm text-gray-700">
      {/* Left Sidebar */}
      <div className="w-[35%] bg-gray-100 flex flex-col">
        <div className="bg-[#5f9ea0] p-6 flex justify-center items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-white border-4 border-white">
            <ProfileImage src={basics.image} width="128px" height="128px" />
          </div>
        </div>
        <div className="p-6">
          <Sidebar basics={basics} skills={allSkills} languages={skills.languages} />
        </div>
      </div>

      {/* Right Main Content */}
      <div className="w-[65%] flex flex-col">
        <Header name={basics.name} label={basics.label} />
        <div className="p-6 overflow-y-auto">
          <MainContent summary={basics.summary} education={education} work={work} awards={awards} />
        </div>
      </div>
    </div>
  );
}
