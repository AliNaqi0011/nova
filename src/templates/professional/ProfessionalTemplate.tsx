import React, { useContext } from 'react';

import AboutMe from './components/AboutMe';
import Achievements from './components/Achievements';
import BasicIntro from './components/BasicIntro';
import { Education } from './components/Education';
import Involvement from './components/Involvement';
import { Objective } from './components/Objective';
import RatedSkills from './components/RatedSkills';
import { Section } from './components/Section';
import { StandardSection } from '@/helpers/common/components/StandardSection';
import { StateContext } from '@/modules/builder/resume/StateContext';
import UnratedSkills from './components/UnratedSkills';
import Work from './components/Work';
import styled from '@emotion/styled';

const ResumeContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 40px 25px;
  column-gap: 10px;

  @media print {
    border: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 66%;
  row-gap: 20px;
  height: 100%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 34%;
  row-gap: 20px;
  height: 100%;
  font-size: 12px;
`;

export default function ProfessionalTemplate() {
  const resumeData = useContext(StateContext);
  if (!resumeData) return null;

  const skills = resumeData.skills;
  const involvements = resumeData.activities.involvements;
  const achievements = resumeData.activities.achievements;
  const languagesAndFrameworks = [...skills.languages, ...skills.frameworks];
  const technologiesAndLibraries = [
    ...skills.technologies,
    ...skills.libraries,
    ...skills.databases,
  ];

  return (
    <ResumeContainer>
      <LeftSection>
        <Section
          title={resumeData.basics?.name}
          profiles={resumeData.basics.profiles}
          portfolioUrl={resumeData.basics.url}
          titleClassname="text-xl font-medium"
        >
          <BasicIntro basics={resumeData.basics} />
        </Section>

        <StandardSection title="Work Experience" value={resumeData.work}>
          <Section title="Work Experience">
            <Work work={resumeData.work} />
          </Section>
        </StandardSection>

        <StandardSection title="Key Projects / Involvements" value={involvements}>
          <Section title="Key Projects / Involvements">
            <Involvement data={involvements} />
          </Section>
        </StandardSection>

        <StandardSection title="Certificates and Awards" value={achievements}>
          <Section title="Certificates and Awards">
            <Achievements data={achievements} />
          </Section>
        </StandardSection>
      </LeftSection>

      <RightSection>
        <StandardSection title="Summary" value={resumeData.basics.summary}>
          <Section title="Summary">
            <AboutMe summary={resumeData.basics.summary} profileImage={resumeData.basics.image} />
          </Section>
        </StandardSection>

        <StandardSection title="Career Objective" value={resumeData.basics.objective}>
          <Section title="Career Objective">
            <Objective objective={resumeData.basics.objective} />
          </Section>
        </StandardSection>

        <StandardSection title="Technical expertise" value={languagesAndFrameworks}>
          <Section title="Technical expertise">
            <RatedSkills items={languagesAndFrameworks} />
          </Section>
        </StandardSection>

        <StandardSection title="Skills / Exposure" value={technologiesAndLibraries}>
          <Section title="Skills / Exposure">
            <UnratedSkills items={technologiesAndLibraries} />
          </Section>
        </StandardSection>

        <StandardSection title="Methodology/Approach" value={skills.practices}>
          <Section title="Methodology/Approach">
            <UnratedSkills items={skills.practices} />
          </Section>
        </StandardSection>

        <StandardSection title="Tools" value={skills.tools}>
          <Section title="Tools">
            <UnratedSkills items={skills.tools} />
          </Section>
        </StandardSection>

        <StandardSection title="Education" value={resumeData.education}>
          <Section title="Education">
            <Education education={resumeData.education} />
          </Section>
        </StandardSection>
      </RightSection>
    </ResumeContainer>
  );
}
