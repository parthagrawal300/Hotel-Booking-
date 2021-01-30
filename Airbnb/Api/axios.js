import axios from "axios";

const instance = axios.create({
  baseURL: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json`, // The API (main url for fetching data) URL
});

export default instance;
