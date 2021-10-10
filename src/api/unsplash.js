import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID B-LOyZvEtEDVxPfOALEvcukplk8JmNN5zdDaudwSF4s",
  },
});
