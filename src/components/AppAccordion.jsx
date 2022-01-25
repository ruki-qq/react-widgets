import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const items = [
  {
    id: 1,
    title: "Accordion 1",
    content: "Content 1",
  },
  {
    id: 2,
    title: "Accordion 2",
    content: "Content 2",
  },
  {
    id: 3,
    title: "Accordion 3",
    content: "Content 3",
  },
];
export default function AppAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const renderAccordions = () => {
    return items.map(({id, title, content}) => {
      return (<Accordion key={id} expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id={id}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>)
    })
  }
  return (
    <div>
      {renderAccordions()}
    </div>
  );
}
