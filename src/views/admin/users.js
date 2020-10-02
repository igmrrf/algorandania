import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { getAllUserDetailsStartAsync } from "../../redux/users/users.actions";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    borderRadius: 50,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Users({ users, getAllUserDetailsStartAsync }) {
  const classes = useStyles();

  useEffect(() => {
    if (users.length < 1) {
      getAllUserDetailsStartAsync();
    }
  }, [users, getAllUserDetailsStartAsync]);

  return (
    <main>
      <div className={classes.heroContent}>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          All User
        </Typography>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {users.map((user) => (
            <Grid item key={user._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Name:{user.name}
                  </Typography>
                  <Typography>Email:{user.email}</Typography>
                  <Typography>Gender:{user.gender}</Typography>
                  <Typography>Country:{user.country}</Typography>
                  <Typography>Mobile:{user.mobile}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    to={`/app/users/view/${user._id}`}
                    size="small"
                    color="primary"
                    component={RouterLink}
                  >
                    View
                  </Button>
                  <Button
                    to={`/users/view/${user._id}`}
                    size="small"
                    color="primary"
                    component={RouterLink}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

const mapStateToProps = (state) => ({
  users: state.user.data,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUserDetailsStartAsync: () => dispatch(getAllUserDetailsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);
