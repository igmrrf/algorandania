import axios from "axios";

export default axios.create({
  baseURL: "https://bcmt.herokuapp.com/",
  headers: {
    "x-auth-token": window.localStorage.getItem("token"),
  },
});
