import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { useContext } from 'react';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ProficientSkills from './components/ProficientSkills';
import TechnicalProficiencies from './components/TechnicalProficiencies';
import LanguageSkills from './components/LanguageSkills';
import CareerObjective from './components/CareerObjective';
import AcademicBackground from './components/AcademicBackground';
import Internship from './components/Internship';
import Interests from './components/Interests';

export default function Creative2Template() {
  const resumeData = useContext(StateContext);
  const { basics, work, education, skills, volunteer, awards } = resumeData;

  const proficientSkills = [
    'Inventor 3D CAD Modeling Software Proficiency',
    'AutoCAD 2D Design Software Proficiency',
    'SolidWorks and Microsoft Office Proficiency',
    'Excellent Verbal and Technical Report Writing Skills',
    'Motor, Drive Train, and Bearing Analysis and Application',
  ];

  const technicalProficiencies =
    'Autodesk, AutoCAD, Mathcad, LabVIEW, Rhino, MATLAB, Mathematica, SolidWorks, MS Project, MS Office Suite (Word, Excel, Outlook, PowerPoint)';

  const interests = ['Headphones', 'Basketball', 'Game Controller', 'Camera'];

  return (
    <div className="bg-white font-[calibri] text-gray-700 h-full p-8">
      <Header name={basics.name} label={basics.label} profiles={basics.profiles} />
      <div className="absolute top-8 right-8">
        <ProfileImage src={basics.image} width="120px" height="120px" />
      </div>
      <div className="grid grid-cols-2 gap-x-8 mt-6">
        {/* Left Column */}
        <div className="space-y-4">
          <AboutMe basics={basics} />
          <SectionValidator value={skills.languages}>
            <Skills skills={skills.languages} title="SKILLS" />
          </SectionValidator>
          <ProficientSkills skills={proficientSkills} />
          <TechnicalProficiencies text={technicalProficiencies} />
          <SectionValidator value={skills.languages}>
            <LanguageSkills languages={skills.languages} />
          </SectionValidator>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <SectionValidator value={basics.objective}>
            <CareerObjective objective={basics.objective} />
          </SectionValidator>
          <SectionValidator value={education}>
            <AcademicBackground education={education} />
          </SectionValidator>
          <SectionValidator value={work}>
            <Internship work={work} />
          </SectionValidator>
          <Interests interests={interests} />
        </div>
      </div>
    </div>
  );
}
