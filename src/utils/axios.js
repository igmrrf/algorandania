import axios from "axios";
import { token } from "./constants";
let url;
if (process.env.NODE_ENV !== "production") url = "http://localhost:8080/api/";
else url = "https://bcmt.herokuapp.com/api/";

console.log(url);
export default axios.create({
  baseURL: url,
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjcxM2EyOGY0YzNlYTAwMTcyMmQ5NWMiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MDE1OTExMjN9.KvgShSQWQJ1DBEbja746PBMyTzENavHiLv4rLORC3hc",
  },
});
