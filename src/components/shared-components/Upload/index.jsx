import React, { useState } from "react";
import UploadSvg from "../../../static/img/upload.svg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { createTransactionStartAsync } from "../../../redux/transaction/transactions.actions";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";

function UploadTransaction({
  plan,
  amount,
  type,
  createTransactionStartAsync,
  isFetching,
}) {
  const [receiptUrl, setReceiptUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onFileUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "optimal");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/runsboy/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    const sit = await file.secure_url;
    setReceiptUrl(sit);
    console.log("Uploaded");
    setStart(true);
    setLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { amount, plan, type, receiptUrl };
    await createTransactionStartAsync(data);
    enqueueSnackbar("Payment receipt has been submitted successfully", {
      variant: "info",
    });
    setTimeout(() => {
      window.location.href = "/account/transactions";
    }, 2500);
  };

  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid xs={12} item>
        {start ? (
          <img
            src={receiptUrl}
            style={{
              minWidth: "200px",
              minHeight: "200px",
              width: "200px",
            }}
            alt=""
          />
        ) : loading ? (
          <Box
            style={{
              width: 200,
              height: 200,
              backgroundImage: `url(${UploadSvg})`,
            }}
          >
            <Typography variant={"h4"} component={"h4"}>
              Uploading...
            </Typography>
          </Box>
        ) : (
          <img
            src={UploadSvg}
            style={{
              minWidth: "200px",
              minHeight: "200px",
              width: "200px",
              margin: "0 auto",
            }}
            alt="upload"
          />
        )}
      </Grid>
      <Grid xs={12} item className="center">
        <input
          type="file"
          name="file"
          placeholder="Upload"
          onChange={onFileUpload}
        />
      </Grid>
      <Button
        disabled={!start}
        color={"primary"}
        variant={"outlined"}
        onClick={handleSubmit}
      >
        {isFetching ? (
          <>
            <CircularProgress
              size={20}
              color={"secondary"}
              style={{ marginBottom: -5 }}
            />
            Processing
          </>
        ) : (
          "SUBMIT"
        )}
      </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  isFetching: state.transaction.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
  createTransactionStartAsync: (data) =>
    dispatch(createTransactionStartAsync(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UploadTransaction);
