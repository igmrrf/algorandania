import axios from "axios";
let url;
if (process.env.NODE_ENV !== "production") url = "http://localhost:8080/api/";
else url = "https://bcmt.herokuapp.com/api/";

console.log(url);
export default axios.create({
  baseURL: url,
  headers: {
    "x-auth-token": window.localStorage.getItem("x-auth-token"),
  },
});
