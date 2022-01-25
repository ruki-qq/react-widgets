import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: "https://translation.googleapis.com/language/translate/v2",
  params: {
    key: API_KEY,
  },
});
