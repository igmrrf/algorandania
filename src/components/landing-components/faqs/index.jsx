import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "5vw 10vw",
    background: "rgb(18, 29, 51)",
    color: "white",
  },
  header: {
    marginBottom: "10vw",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  copyright: {
    bottom: 0,
    padding: "20px 0",
  },
}));

export default function Faqs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        className={classes.root}
      >
        <Grid item xs={11} md={10}>
          <Typography
            variant={"h4"}
            component={"h1"}
            className={classes.header}
          >
            Frequently Asked questions
          </Typography>

          <Accordion expanded={expanded === "1"} onChange={handleChange("1")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What is Bitcoin
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bitcoin is a cryptocurrency invented in 2008 by an unknown
                person or group of people using the name Satoshi Nakamoto and
                started in 2009 when its implementation was released as
                open-source software.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "2"} onChange={handleChange("2")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                How Long is BCMT in Business
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                As long as crypto currencies exist, meaning we'll be right here
                with you till the fall of humanity if that ever comes.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "3"} onChange={handleChange("3")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>How To Invest</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Simply follow the steps after this content below
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "4"} onChange={handleChange("4")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Are we Register Legally
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Blockchain is legally registered to function internationally
                except countries that ban Crypto currencies. If you fall within
                that category, then you can access support to invest in another
                asset within our catalogue
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "5"} onChange={handleChange("5")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Is there any risk?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                In business there are always risk but we have minimized that to
                the lowest by automatically creating an insurance account for
                our customers to curb major losses in rare cases. So be
                confident and invest to your heart's content
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
}
