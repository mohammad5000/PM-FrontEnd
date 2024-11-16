import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Creculem from './Tabs/Creculem';  // Ensure the path is correct

export default function SsectionTabs() {
  // State to track the selected tab
  const [activeTab, setActiveTab] = useState('1');

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Styling for active tabs
  const tabClasses = (tabValue) => 
    `mx-2 text-white focus:bg-white focus:text-[#6524D3] focus:border-white ${activeTab === tabValue ? 'rounded-xl bg-white text-[#6524D3] border-white' : ''}`;

  return (
    <Box sx={{ width: '100%' }}>
      {/* TabList */}
      <Box className="flex items-center justify-center">
        <Box className='flex items-center justify-center bg-[#6524D3] px-5 py-2 rounded-3xl mt-5 w-fit'>
          <Tab
            className={tabClasses('1')}
            label="Item One"
            value="1"
            onClick={(e) => handleTabChange(e, '1')}
          />
          <Tab
            className={tabClasses('2')}
            label="Item Two"
            value="2"
            onClick={(e) => handleTabChange(e, '2')}
          />
          <Tab
            className={tabClasses('3')}
            label="Item Three"
            value="3"
            onClick={(e) => handleTabChange(e, '3')}
          />
        </Box>
      </Box>

      {/* Tab Panels */}
      <Box sx={{ padding: 2 }}>
        {activeTab === '1' && <Box>TAB1</Box>}
        {activeTab === '2' && <Creculem />}
        {activeTab === '3' && <Box>TAB3</Box>}
      </Box>
    </Box>
  );
}
