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
import { getAllUserDetailsStartAsync } from "../../redux/users/users.actions";
import { connect } from "react-redux";

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Deposited({ users, getAllUserDetailsStartAsync }) {
  const classes = useStyles();
  useEffect(() => {
    if (users.length > 1) {
      getAllUserDetailsStartAsync();
    }
  }, []);
  const depositedUsers = users.filter(
    (user) => user.balances.deposit.$numberDecimal > 0
  );

  return (
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          All Deposited Users $ Revenue
        </Typography>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {depositedUsers.map((user) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Name: {user.name}
                  </Typography>
                  <Typography>Email: {user.email}</Typography>
                  <Typography>Gender: {user.gender}</Typography>
                  <Typography>Country: {user.country}</Typography>
                  <Typography>Mobile: {user.mobile}</Typography>
                  <Typography>Mobile: {user.mobile}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
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
export default connect(mapStateToProps, mapDispatchToProps)(Deposited);
