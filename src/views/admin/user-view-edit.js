import React, { useEffect, useState } from "react";
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
import { updateUserStartAsync } from "../../redux/users/users.actions";
import { TextField } from "@material-ui/core";
import { useSnackbar } from "notistack";

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

function UserEdit({ users, updateUserStartAsync, match, message }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const user = users.find((user) => user._id === match.params.id);
  const [balances, setBalances] = useState({
    balance: "",
    deposits: "",
    withdraws: "",
    profits: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBalances({ ...balances, [name]: value });
  };

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, {
        variant: "success",
      });
    }
  }, [message]);

  useEffect(() => {
    setBalances({
      balance: user.balances.balance.$numberDecimal,
      deposits: user.balances.deposits.$numberDecimal,
      withdraws: user.balances.withdraws.$numberDecimal,
      profits: user.balances.profits.$numberDecimal,
    });
  }, [users, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { balance, deposits, withdraws, profits } = balances;
    updateUserStartAsync(user._id, {
      balance: Number(balance).toFixed(2),
      deposits: Number(deposits).toFixed(2),
      withdraws: Number(withdraws).toFixed(2),
      profits: Number(profits).toFixed(2),
    });
  };

  return (
    <main>
      <div className={classes.heroContent}>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Edit User
        </Typography>
      </div>
      <Container className={classes.cardGrid}>
        <Grid container justify={"center"} alignItems={"center"} spacing={4}>
          {user ? (
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
                  <Typography>Email: {user.email}</Typography>
                  <Typography>Gender: {user.gender}</Typography>
                  <Typography>Country: {user.country}</Typography>
                  <Typography>Mobile: {user.mobile}</Typography>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="deposit"
                    label="Deposit"
                    name="deposits"
                    value={balances.deposits}
                    onChange={handleChange}
                    autoComplete="balance_diet"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="balance"
                    label="Balance"
                    name="balance"
                    value={balances.balance}
                    onChange={handleChange}
                    autoComplete="balance_diet"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="withdraw"
                    label="Withdraw"
                    name="withdraws"
                    value={balances.withdraws}
                    onChange={handleChange}
                    autoComplete="withdraw_diet"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="profit"
                    label="Profit"
                    name="profits"
                    value={balances.profits}
                    onChange={handleChange}
                    autoComplete="profit_diet"
                  />
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={handleSubmit}>
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </main>
  );
}

const mapStateToProps = (state) => ({
  users: state.user.data,
  message: state.user.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserStartAsync: (id, data) => dispatch(updateUserStartAsync(id, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
