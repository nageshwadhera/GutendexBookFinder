import axios from "axios";

export default axios.create({
  baseURL: "http://skunkworks.ignitesol.com:8000/books",
});
