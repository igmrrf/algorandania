import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import UploadTransaction from "../../shared-components/Upload";
import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.background,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const UploadReceipt = () => {
  const [amount, setAmount] = useState("");
  const [plan, setPlan] = useState("");
  const classes = useStyles();

  const type = "Deposit";
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };
  return (
    <Grid xs={12}>
      <Card className={classes.card}>
        <CardHeader title={"UPLOAD RECEIPT"} />
        <Grid container>
          <Grid xs={12} md={6} sm={6}>
            <TextField
              fullWidth
              name={"amount"}
              label={"Enter Amount Deposited"}
              value={amount}
              onChange={handleAmountChange}
              style={{ paddingRight: 10, marginTop: 20 }}
            />
          </Grid>
          <Grid xs={12} md={6} sm={6}>
            <FormControl fullWidth style={{ paddingRight: 10, marginTop: 20 }}>
              <InputLabel htmlFor="plan_selector">Choose Plan</InputLabel>
              <Select
                native
                onChange={handlePlanChange}
                label="Plan"
                inputProps={{
                  name: "plan",
                  id: "plan_selector",
                }}
              >
                <option value={"Starter"}>Starter</option>
                <option value={"Basic"}>Basic</option>
                <option value={"Professional"}>Professional</option>
                <option value={"Executive"}>Executive</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <UploadTransaction type={type} amount={amount} plan={plan} />
      </Card>
    </Grid>
  );
};

export default UploadReceipt;
