import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./faq-accordion.styles.css";

const FAQAccordion = () => {
  return (
    <div className="faq-container">
      <header>
        <span>FAQs</span>
      </header>
      <div className="accordion-container">
        <Accordion className="accordion-faq-container">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails className="acc-details-container">
            <Typography>
              <span className="acc-details">
                Yes! It is 100% free, and has 0% ads!
              </span>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion-faq-container">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails className="acc-details-container">
            <Typography>
              <span className="acc-details">
                Sorry, unfortunately we don't provide the service to download
                any songs.
              </span>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQAccordion;
