import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

export default function SectionTabs({ tabData = [{ tabName: "tab1", TabContent: (<></>) }] }) {
  // State to track the selected tab
  const [activeTab, setActiveTab] = useState('1');

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Styling for active tabs
  const tabClasses = (tabValue) => 
    `mx-2 text-white focus:bg-white focus:text-[#6524D3] ${activeTab === tabValue ? 'rounded-xl bg-white text-[#6524D3] border-white opacity-100' : 'opacity-50'} transition-opacity duration-300 ease-in-out`;

  return (
    <Box sx={{ width: '100%' }}>
      {/* Tab List */}
      <Box className="flex items-center justify-center">
        <Box className='flex items-center justify-center bg-[#6524D3] px-5 py-2 rounded-3xl mt-5 w-fit'>
          {/* Dynamically render Tab buttons from tabData */}
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              className={tabClasses((index + 1).toString())} // Tab value is based on index
              label={tab.tabName}
              value={(index + 1).toString()}
              onClick={(e) => handleTabChange(e, (index + 1).toString())}
            />
          ))}
        </Box>
      </Box>

      {/* Tab Panels */}
      <Box sx={{ padding: 2 }}>
        {/* Dynamically render content based on active tab */}
        {tabData.map((tab, index) => (
          activeTab === (index + 1).toString() && (
            <Box key={index}>
              {tab.TabContent}
            </Box>
          )
        ))}
      </Box>
    </Box>
  );
}
