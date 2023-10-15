import { useState, useEffect } from "react";

import axios from "axios";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./faq-accordion.styles.css";

const FAQAccordion = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const res = await axios.get("https://qtify-backend-labs.crio.do/faq");
        setFaq(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFaq();
  }, []);

  // console.log(faq);

  return (
    <div className="faq-container">
      <header>
        <span>FAQs</span>
      </header>
      <div className="accordion-container">
        {faq?.map((item) => {
          const { question, answer } = item;
          return (
            <Accordion key={question} className="accordion-faq-container">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails className="acc-details-container">
                <Typography>
                  <span className="acc-details">{answer}</span>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
