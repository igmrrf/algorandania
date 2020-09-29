import axios from "axios";

export default axios.create({
  baseURL: "https://bcmt.herokuapp.com/api/",
  headers: {
    "x-auth-token": localStorage.getItem("x-auth-token")
      ? localStorage.getItem("x-auth-token")
      : null,
  },
});
