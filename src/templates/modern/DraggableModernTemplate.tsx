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
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { AnimatedSection } from '@/helpers/common/components/AnimatedSection';
import { useDragAndDrop } from '@/helpers/hooks/useDragAndDrop';
import { useSectionOrder, SectionConfig } from '@/stores/sectionOrder';

export default function DraggableModernTemplate() {
  const resumeData = useContext(StateContext);
  const { sections, updateSectionOrder } = useSectionOrder();

  if (!resumeData) return null;

  const { draggedItem, handleDragStart, handleDragOver, handleDrop, handleDragEnd } =
    useDragAndDrop<SectionConfig>(sections, updateSectionOrder);

  const renderSection = (section: SectionConfig, index: number) => {
    const isDragging = draggedItem?.index === index;

    const sectionProps = {
      draggable: true,
      onDragStart: (e: React.DragEvent) => handleDragStart(e, section, index),
      onDragOver: handleDragOver,
      onDrop: (e: React.DragEvent) => handleDrop(e, index),
      onDragEnd: handleDragEnd,
      isDragging,
    };

    switch (section.id) {
      case 'summary':
        return (
          <SectionValidator key={section.id} value={resumeData.basics.summary}>
            <AnimatedSection {...sectionProps}>
              <SummarySection summary={resumeData.basics.summary} />
            </AnimatedSection>
          </SectionValidator>
        );
      case 'work':
        return (
          <SectionValidator key={section.id} value={resumeData.work}>
            <AnimatedSection {...sectionProps}>
              <WorkSection experience={resumeData.work} />
            </AnimatedSection>
          </SectionValidator>
        );
      case 'awards':
        return (
          <SectionValidator key={section.id} value={resumeData.awards}>
            <AnimatedSection {...sectionProps}>
              <AwardSection awardsReceived={resumeData.awards} />
            </AnimatedSection>
          </SectionValidator>
        );
      case 'education':
        return (
          <SectionValidator key={section.id} value={resumeData.education}>
            <AnimatedSection {...sectionProps}>
              <EducationSection education={resumeData.education} />
            </AnimatedSection>
          </SectionValidator>
        );
      case 'skills':
        return (
          <div key={section.id}>
            <SectionValidator value={resumeData.skills.languages}>
              <AnimatedSection {...sectionProps}>
                <SkillsSection title="Languages" list={resumeData.skills.languages} />
              </AnimatedSection>
            </SectionValidator>
            <SectionValidator value={resumeData.skills.technologies}>
              <AnimatedSection {...sectionProps}>
                <SkillsSection title="Technologies" list={resumeData.skills.technologies} />
              </AnimatedSection>
            </SectionValidator>
          </div>
        );
      case 'volunteer':
        return (
          <SectionValidator key={section.id} value={resumeData.volunteer}>
            <AnimatedSection {...sectionProps}>
              <VolunteerSection volunteer={resumeData.volunteer} />
            </AnimatedSection>
          </SectionValidator>
        );
      default:
        return null;
    }
  };

  const enabledSections = sections
    .filter((section) => section.enabled)
    .sort((a, b) => a.order - b.order);

  const leftSections = enabledSections.filter((s) => ['summary', 'work', 'awards'].includes(s.id));
  const rightSections = enabledSections.filter((s) =>
    ['education', 'skills', 'volunteer'].includes(s.id)
  );

  return (
    <div className="h-full flex flex-col bg-white p-4">
      {/* Header */}
      <AnimatedSection className="flex-shrink-0 mb-4">
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
      </AnimatedSection>

      {/* Main Content */}
      <div className="flex flex-1 gap-4">
        <div className="basis-[65%]">
          {leftSections.map((section, index) => renderSection(section, index))}
        </div>

        <div className="basis-[35%] bg-gray-50 p-3 rounded">
          <SectionValidator value={resumeData.basics.objective}>
            <AnimatedSection>
              <Objective objective={resumeData.basics.objective} />
            </AnimatedSection>
          </SectionValidator>

          {rightSections.map((section, index) =>
            renderSection(section, leftSections.length + index)
          )}
        </div>
      </div>
    </div>
  );
}
