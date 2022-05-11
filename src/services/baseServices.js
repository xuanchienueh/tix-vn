import axios from "axios";
import { DOMAIN_API, TOKEN } from "../util/settings/config";

export class BaseServices {
  put = (url, model) => {
    return axios({
      method: "PUT",
      url: `${DOMAIN_API}/${url}`,
      data: model,
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
    });
  };

  post = (url, model) => {
    return axios({
      method: "POST",
      url: `${DOMAIN_API}/${url}`,
      data: model,
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
    });
  };

  get = (url) => {
    return axios({
      method: "GET",
      url: `${DOMAIN_API}/${url}`,
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
    });
  };

  delete = (url) => {
    return axios({
      method: "DELETE",
      url: `${DOMAIN_API}/${url}`,
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
    });
  };
}
