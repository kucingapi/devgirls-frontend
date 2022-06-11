import axios from "axios";

const axiosDevgirls = axios.create({
  baseURL: 'https://devgirls.herokuapp.com/',
});

export default axiosDevgirls;
