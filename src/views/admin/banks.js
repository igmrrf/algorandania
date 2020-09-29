import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getAllBanksStartAsync } from "../../redux/bank/bank.actions";
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

function Banks({ banks, getAllBanksStartAsync }) {
  const classes = useStyles();
  useEffect(() => {
    getAllBanksStartAsync();
  }, [getAllBanksStartAsync]);

  return (
    <main>
      <div className={classes.heroContent}>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          All User Banking Details
        </Typography>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid alignItems={"center"} container spacing={4}>
          {banks.map((bank) => (
            <Grid item key={bank._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Name: {bank.account_name}
                  </Typography>
                  <Typography>Account: Number {bank.account_number}</Typography>
                  <Typography>Account Type: {bank.account_type}</Typography>
                  <Typography>Bank Name: {bank.bank_name}</Typography>
                  <Typography>Bank Code: {bank.bank_code}</Typography>
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
  banks: state.bank.data,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBanksStartAsync: () => dispatch(getAllBanksStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banks);
