import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextFieldsRounded from "@material-ui/icons/TextFieldsRounded";
import ContactMail from "@material-ui/icons/ContactMail";
import Contacts from "@material-ui/icons/Contacts";
import MailOutline from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "blue",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactMail />
        </Avatar>
        <Typography component="h1" variant="h4">
          Contact Us
        </Typography>
        <Typography component="h1" variant="h6">
          We'll get back to you as soon as possible
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                autoComplete="first-name"
                name="firstName"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Contacts style={{ color: "blue" }} />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Contacts style={{ color: "blue" }} />
                    </InputAdornment>
                  ),
                }}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutline style={{ color: "blue" }} />
                    </InputAdornment>
                  ),
                }}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TextFieldsRounded style={{ color: "blue" }} />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                name="message"
                label="Message"
                type="text"
                id="message"
                autoComplete="current-message"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
