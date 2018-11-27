import axios from "axios";

//this HOC sets an axios instance wherever it is imported will utilize the same baseURL
const instance = axios.create({
  baseURL: process.env.REACT_APP_ROOT
});

export default instance;
