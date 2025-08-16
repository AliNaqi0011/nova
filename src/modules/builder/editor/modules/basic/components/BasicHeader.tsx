import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const BasicHeader = ({
  activeTab,
  changeActiveTab,
  tabTitles,
}: {
  activeTab: number;
  changeActiveTab: (event: React.SyntheticEvent, activeTab: number) => void;
  tabTitles: string[];
}) => {
  return (
    <Tabs
      value={activeTab}
      onChange={changeActiveTab}
      variant="fullWidth"
      sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: '#8B5CF6', // A nice purple for the indicator
        },
      }}
    >
      {tabTitles.map((title: string) => (
        <Tab
          key={title}
          label={title}
          sx={{
            color: 'white',
            textTransform: 'none',
            fontSize: '1rem',
            '&.Mui-selected': {
              color: '#C4B5FD', // Lighter purple when selected
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default BasicHeader;
