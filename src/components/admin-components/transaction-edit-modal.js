import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { updateTransactionStartAsync } from "../../redux/transaction/transactions.actions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "150px",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function TransactionModal({ transaction, updateTransactionStartAsync }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (transaction) setStatus(transaction.status);
  }, []);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handlePost = (event) => {
    event.preventDefault();
    updateTransactionStartAsync(transaction._id, status);
    setStatus("");
    handleClose();
  };

  return (
    <div>
      <Button
        variant={"outlined"}
        color={"primary"}
        onClick={handleOpen}
        size="small"
      >
        Edit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant={"h5"} component={"h6"}>
              Edit
            </Typography>
            <form onSubmit={handlePost}>
              <TextField
                label={"Status"}
                name={"title"}
                value={status}
                onChange={handleChange}
                fullWidth
              />
              <Button
                type={"submit"}
                variant={"contained"}
                color={"secondary"}
                className={classes.button}
              >
                Submit
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateTransactionStartAsync: (id, data) =>
    dispatch(updateTransactionStartAsync(id, data)),
});

export default connect(null, mapDispatchToProps)(TransactionModal);
