import axios from "axios";

const axiosInistance = axios.create({
  baseURL: "http://localhost:9000",
});

export default axiosInistance;
