import axios from "axios";

const http = axios.create({
  baseURL: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1",
});
export default http;
