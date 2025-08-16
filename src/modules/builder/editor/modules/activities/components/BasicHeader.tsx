import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { IAllActivityTabs, IActivityTab } from '../ActivitiesLayout';

const BasicHeader = ({
  activeTab,
  changeActiveTab,
  tabs,
}: {
  activeTab: IActivityTab;
  changeActiveTab: (event: React.SyntheticEvent, key: string) => void;
  tabs: IAllActivityTabs;
}) => {
  return (
    <Tabs
      value={activeTab.key}
      onChange={changeActiveTab}
      variant="fullWidth"
      sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: '#8B5CF6',
        },
      }}
    >
      {Object.keys(tabs).map((tab) => (
        <Tab
          key={tab}
          label={tabs[tab].label}
          value={tab}
          sx={{
            color: 'white',
            textTransform: 'none',
            fontSize: '1rem',
            '&.Mui-selected': {
              color: '#C4B5FD',
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default BasicHeader;
