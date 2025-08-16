import React, { Fragment } from 'react';
import { RichtextEditor } from '@/helpers/common/components/richtext';
import { IBasicDetailsItem } from '@/stores/basic.interface';

const About = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: IBasicDetailsItem;
  onChangeHandler: (value: string, key: string) => void;
}) => {
  return (
    <Fragment>
      <RichtextEditor
        label="About me"
        value={basicTabs.summary}
        onChange={(htmlOutput) => {
          onChangeHandler(htmlOutput, 'summary');
        }}
        name="summary"
      />
      <RichtextEditor
        label="Career objective"
        value={basicTabs.objective}
        onChange={(htmlOutput) => {
          onChangeHandler(htmlOutput, 'objective');
        }}
        name="objective"
      />
    </Fragment>
  );
};

export default About;
