import axios from "axios";
if (localStorage.getItem("x-auth-token")) {
  return;
}
export default axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "x-auth-token": localStorage.getItem("x-auth-token")
      ? localStorage.getItem("x-auth-token")
      : null,
  },
});
