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
import { getAllTransactionsStartAsync } from "../../redux/transaction/transactions.actions";
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

function Transactions({ getAllTransactionsStartAsync, transactions }) {
  const classes = useStyles();
  useEffect(() => {
    getAllTransactionsStartAsync();
  }, []);
  return (
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          All Transactions
        </Typography>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {transactions.map((transaction) => (
            <Grid item key={transaction._id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={transaction.receiptUrl}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Type: {transaction.type}
                  </Typography>
                  <Typography>Amount:{transaction.amount}</Typography>{" "}
                  <Typography>Plan:{transaction.plan}</Typography>{" "}
                  <Typography>Date:{transaction.date}</Typography>
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
  transactions: state.transaction.data,
});

const mapDispatchToProps = (dispatch) => ({
  getAllTransactionsStartAsync: () => dispatch(getAllTransactionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
