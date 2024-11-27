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
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({ mainTopic, accordionData }) {
    const [expanded, setExpanded] = React.useState(0);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleColor = (field) => {
        const colorMap = {
            "Business Environment": "#6524D3",
            "resource": "#1CBBDA", 
            "People": "#F65D11",
        };

        const normalizedField = field.trim();
        return colorMap[normalizedField] || "#000000";
    };

    const HandleIcon = ({ type, field }) => {
        const color = handleColor(field);
        let IconComponent;

        if (type === "video") {
            IconComponent = <VideoLibraryIcon sx={{ fontSize: "20px", color: color }} />;
        } else if (type === "article") {
            IconComponent = <LibraryBooksIcon sx={{ fontSize: "20px", color: color }} />;
        } else if (type === "material") {
            IconComponent = <DownloadForOfflineIcon sx={{ fontSize: "20px", color: color }} />;
        } else {
            IconComponent = <span style={{ color: color }}>Default Icon</span>;
        }

        return (
            <span style={{ color: color }}>
                {IconComponent}
            </span>
        );
    };

    return (
        <Container>
            <Box className="bg-[#6524D3] p-4">
                <Typography color='white' fontWeight={"bold"} variant='p'>{mainTopic}</Typography>
            </Box>
            {accordionData && accordionData.length > 0 ? (
                accordionData.map((item) => (
                    <Accordion
                        key={item.id}
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                        sx={{
                            border: '1px solid #6524D3',
                            backgroundColor: "white"
                        }}
                    >
                        <AccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}
                            sx={{
                                borderBottom: '1px solid #6524D3',
                                backgroundColor: "white"
                            }}
                        >
                            <Typography>{item.Topic}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.content && item.content.length > 0 ? (
                                <ul>
                                    {item.content.map((contentItem) => (
                                        <li key={contentItem.id}>
                                            <HandleIcon type={contentItem.type} field={contentItem.field} /> {contentItem.text}
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
