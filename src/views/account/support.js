import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Layers from "@material-ui/icons/Layers";
import axios from "../../utils/axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    display: "inline-block",
    textAlign: "center",
    paddingTop: theme.spacing(1),
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

export default function Support() {
  const classes = useStyles();
  const [support, setSupport] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("support", support)
      .then((res) => {
        const data = res.data;
        if (data.success === false) {
          console.log(data.message);
        } else {
          console.log(data.message);
        }
      })
      .catch((err) => console.log(err.message));
  };
  const handleChange = ({ target: { name, value } }) => {
    setSupport({ ...support, [name]: value });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Box className={classes.title}>
          <Typography variant={"h3"} component={"h1"}>
            Support
            <Avatar className={classes.avatar}>
              <Layers />
            </Avatar>
          </Typography>
        </Box>
        <Typography component="h1" variant="h6">
          We'll get back to you as soon as possible
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subject"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="message"
                label="Message"
                type="text"
                id="message"
                autoComplete="current-message"
                onChange={handleChange}
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
