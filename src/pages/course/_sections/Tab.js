import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export default function SectionTabs({ tabData = [{ tabName: "tab1", TabContent: (<></>) }] }) {
  // State to track the selected tab
  const [activeTab, setActiveTab] = useState('1');

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Styling for active tabs
  const tabClasses = (tabValue) => 
    `mx-2 text-white ${activeTab === tabValue ? 'rounded-xl bg-white text-[#6524D3] border-white opacity-100' : 'opacity-100'} transition-opacity duration-300 ease-in-out`;

  return (
    <Box sx={{ width: '100%' }}>
      {/* Tab List */}
      <Box className="flex items-center justify-center">
        <Box className='flex items-center justify-center bg-[#6524D3] px-5 py-2 rounded-3xl mt-5 mb-10 w-fit' sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {/* Using MUI Tabs component for handling tab switching */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable" // Make tabs scrollable on small screens
            scrollButtons="auto" // Show scroll buttons when needed
            TabIndicatorProps={{ style: { display: 'none' } }} // Hide default indicator
            sx={{ width: '100%' }} // Make Tabs full width
          >
            {/* Dynamically render Tab buttons from tabData */}
            {tabData.map((tab, index) => (
              <Tab
                key={index}
                className={tabClasses((index + 1).toString())} // Tab value is based on index
                label={tab.tabName}
                value={(index + 1).toString()}
                sx={{
                  '&.Mui-selected': {
                    color: '#6524D3', // Set active tab text color
                  },
                  // Responsive padding, margin, and width
                  padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px', lg: '12px 24px' },
                  margin: { xs: '0px 0', sm: '0px 0px', md: '2px 6px', lg: '2px 8px' },
                  minWidth: { xs: '60px', sm: '80px', md: '100px', lg: '120px' },
                  fontSize: { xs: '0.6rem', sm: '0.875rem', md: '1rem', lg: '1rem' },
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Box>

      {/* Tab Panels */}
      <Box sx={{ padding: { xs: 1, sm: 2 } }}>
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
