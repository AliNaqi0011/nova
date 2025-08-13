import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { useContext } from 'react';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';

import MainContent from './components/MainContent';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Professional4Template: React.FC = () => {
  const { basics, work, education, skills } = useContext(StateContext);

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
    ...skills.practices,
    ...skills.tools,
  ];

  // Mock data as not available in store
  const personalData = {
    birthday: 'October 8, 1994',
    birthPlace: 'Agoo La Union',
    age: 28,
    civilStatus: 'Single',
    religion: 'Catholic',
    nationality: 'Filipino',
    gender: 'Male',
    height: "5'6",
    weight: 70,
  };

  const reference = {
    name: 'Gleen Estoesta',
    position: 'Executive Chef',
    company: 'Fiiery Style',
    number: '09386250871',
  };

  return (
    <div className="bg-white font-sans text-sm text-gray-700 h-full flex flex-col">
      <Header />
      <div className="flex flex-grow -mt-[70px] z-10">
        {/* Left Main Content */}
        <div className="w-[60%] p-6 pt-0">
          <MainContent objective={basics.objective} work={work} education={education} />
        </div>

        {/* Right Sidebar */}
        <div className="w-[40%] p-6 pt-0">
          <div className="relative">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <ProfileImage
                src={basics.image}
                width="144px"
                height="144px"
                imageWrapperClassname="w-full h-full"
              />
            </div>
          </div>
          <Sidebar
            basics={basics}
            personalData={personalData}
            skills={allSkills}
            reference={reference}
          />
        </div>
      </div>
      <Footer name={basics.name} />
    </div>
  );
};

export default Professional4Template;
