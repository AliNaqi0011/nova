import { SectionHeading } from '../atoms/SectionHeading';
import { SectionText } from '../atoms/SectionText';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export const Objective = ({ objective }: { objective: string }) => {
  return (
    <div className="avoid-page-break">
      <SectionHeading title="Objective" />
      <SectionText>
        <HTMLRenderer htmlString={objective} />
      </SectionText>
    </div>
  );
};
