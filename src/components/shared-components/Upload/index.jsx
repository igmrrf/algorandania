import React, { useState } from "react";
import UploadSvg from "../../../static/img/upload.svg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { createTransactionStartAsync } from "../../../redux/transaction/transactions.actions";
import { Typography } from "@material-ui/core";

function UploadTransaction({
  plan,
  amount,
  type,
  createTransactionStartAsync,
}) {
  const [receiptUrl, setReceiptUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);

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

  const imageToDatabase = (event) => {
    event.preventDefault();
    const data = { amount, plan, type, receiptUrl };
    createTransactionStartAsync(data);
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
        onClick={imageToDatabase}
      >
        SUBMIT
      </Button>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createTransactionStartAsync: (data) =>
    dispatch(createTransactionStartAsync(data)),
});
export default connect(null, mapDispatchToProps)(UploadTransaction);
