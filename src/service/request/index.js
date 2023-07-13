import axios from "axios";

import { BASE_URL, TIME_OUT } from "./config";

class Request {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT,
    });

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }

  post(config) {
    return this.request({ ...config, method: "POST" });
  }
}

export default new Request();
