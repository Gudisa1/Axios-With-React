import axios from "axios";

const authFetch = axios.create({
  baseUR: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
});
export default authFetch;
