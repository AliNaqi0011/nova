import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { VolunteerSection } from './components/Volunteer';
import { Objective } from './components/Objective';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { AwardSection } from './components/Awards';
import { useContext } from 'react';
import { StateContext } from '@/modules/builder/resume/StateContext';
import { StandardSection } from '@/helpers/common/components/StandardSection';

export default function MordernTemplate() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  return (
    <div className="h-full flex flex-col bg-white p-4">
      {/* Header */}
      <div className="flex-shrink-0 mb-4">
        <BasicIntro
          name={resumeData.basics.name}
          label={resumeData.basics.label}
          url={resumeData.basics.url}
          email={resumeData.basics.email}
          city={resumeData.basics.location.city}
          phone={resumeData.basics.phone}
          image={resumeData.basics.image}
          profiles={resumeData.basics.profiles}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 gap-4">
        <div className="basis-[65%]">
          <StandardSection title="Summary" value={resumeData.basics.summary}>
            <SummarySection summary={resumeData.basics.summary} />
          </StandardSection>

          <StandardSection title="Work Experience" value={resumeData.work}>
            <WorkSection experience={resumeData.work} />
          </StandardSection>

          <StandardSection title="Awards" value={resumeData.awards}>
            <AwardSection awardsReceived={resumeData.awards} />
          </StandardSection>
        </div>

        <div className="basis-[35%] bg-gray-50 p-3 rounded">
          <StandardSection title="Objective" value={resumeData.basics.objective}>
            <Objective objective={resumeData.basics.objective} />
          </StandardSection>

          <StandardSection title="Languages" value={resumeData.skills.languages}>
            <SkillsSection title="Languages" list={resumeData.skills.languages} />
          </StandardSection>

          <StandardSection title="Technologies" value={resumeData.skills.technologies}>
            <SkillsSection title="Technologies" list={resumeData.skills.technologies} />
          </StandardSection>

          <StandardSection title="Education" value={resumeData.education}>
            <EducationSection education={resumeData.education} />
          </StandardSection>

          <StandardSection title="Volunteer" value={resumeData.volunteer}>
            <VolunteerSection volunteer={resumeData.volunteer} />
          </StandardSection>
        </div>
      </div>
    </div>
  );
}
