import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID udw5sWmhAvsDXDY9Dyt7mvXjS1zkbZuHenBY3XBmbVE",
  },
});
