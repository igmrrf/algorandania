import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  listItem: {
    fontSize: "1.2em",
    padding: "10px 0",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "Starter",
    price: "1000",
    description: [
      "30% Investment",
      "Personal Manager",
      "Email support",
      "24/7 support",
    ],
    buttonText: "Start Now",
    buttonVariant: "outlined",
  },
  {
    title: "Basic",
    subheader: "Most popular",
    price: "10,000",
    description: [
      "45% Investment",
      "Personal Manger",
      "Priority email support",
      "24/7 Support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Pro",
    price: "25,000",
    description: [
      "60% Investment",
      "Professional Manager",
      "Phone & email support",
      "24/7 support",
    ],
    buttonText: "Get Started",
    buttonVariant: "contained",
  },
  {
    title: "Executive",
    price: "50,000",
    description: [
      "75% Investment",
      "Executive Manager",
      "Phone & email support",
      "24/7 support",
    ],
    buttonText: "Contact Us",
    buttonVariant: "outlined",
  },
];

export default function Plans() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Our Plans
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Our aim is to reduce our negative social, economic and environmental
          footprints while enhancing the overall value we create as a leading
          brand
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h4" color="textPrimary">
                      ${tier.price}
                    </Typography>
                  </div>
                  <Divider />
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        className={classes.listItem}
                      >
                        {line}
                        <Divider />
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
