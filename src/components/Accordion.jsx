import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({mainTopic, accordionData }) {
    const [expanded, setExpanded] = React.useState(0);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const handleColor = (field) => {
        console.log('Received field value:', field);  // Log the received field value
        const colorMap = {
          "Business Environment": "#6524D3",
          "People": "#F65D11",
          "Resource": '#10B8D9',
        };
        
        const normalizedField = field.trim(); // Trim leading/trailing spaces
      

        return colorMap[normalizedField] || "#000000"; // Default color if field is not found
      };
      
    
    const HandleIcon = ({ type, field }) => {
        const color = handleColor(field);
      console.log(color)
        let IconComponent;
      
        // Set the correct icon component based on the 'type' prop
        if (type === "video") {
          IconComponent = <VideoLibraryIcon color={color} sx={{fontSize:"20px"}}/>;
        } else if (type === "article") {
          IconComponent = <LibraryBooksIcon color={color} sx={{fontSize:"20px"}}/>;
        } else if (type === "material") {
          IconComponent = <DownloadForOfflineIcon color={color} sx={{fontSize:"20px"}}/>;
        } else {
          // Default icon if type doesn't match
          IconComponent = <Icon3 color={color} />;
        }
      
        return (
          <span className={`text-[${color}]`}>
            {IconComponent}
          </span>
        );
      };


    return (
        <Container>
              <Box className="bg-[#6524D3] p-4">
                           <Typography color='white' fontWeight={"bold"} variant='h6'>{mainTopic}</Typography> 
                        </Box>
            {accordionData && accordionData.length > 0 ? (
                accordionData.map((item) => (
                    
                    <Accordion
                        key={item.id}
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                        sx={{
                            border : '1px solid #6524D3',
                            backgroundColor:"white"
                        }}
                    >
 
                        <AccordionSummary  aria-controls={`${item.id}-content`} id={`${item.id}-header`}
                        sx={{
                            borderBottom : '1px solid #6524D3',
                            backgroundColor:"white" 
                        }}
                        >
                            <Typography>{item.Topic}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.content && item.content.length > 0 ? (
                                <ul>
                                    {item.content.map((contentItem) => (
                                        <li key={contentItem.id}>
                                            {/* Optionally render icons or styles based on 'type' */}
                                            <HandleIcon type={contentItem.type} field={contentItem.field}/> {contentItem.text} 
                                  
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                item.Paragraph ? (
                                    <Typography variant="body1">{item.Paragraph}</Typography>
                                ) : (
                                    <Typography variant="body2" color="textSecondary">No content available for this section.</Typography>
                                )
                            )}

                        </AccordionDetails>

                    </Accordion>
                ))
            ) : (
                <Typography>No accordion items available.</Typography>
            )}
        </Container>
    );
}
