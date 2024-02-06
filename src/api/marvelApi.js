import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
const BASE_URL = process.env.REACT_APP_MARVEL_URL;

const timestamp = new Date().getTime();
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

const marvelApi = axios.create({
  baseURL: BASE_URL,
  params: {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash: hash,
  },
});

export default marvelApi;
