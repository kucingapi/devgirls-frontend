import axios from "axios";

const axiosDevgirls = axios.create({
  baseURL: 'https://devgirls.herokuapp.com/',
  timeout: 5000,
});

export default axiosDevgirls;
