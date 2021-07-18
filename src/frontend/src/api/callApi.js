import axios from "axios";
import cookie from "js-cookie";

const BASE_API = process.env.REACT_APP_BASE_HOST;

export default async function callApi({ url, method, data, option }) {
  const token = cookie.get("token") ?? "";
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_API}${url}`,
      data,
      headers: { ...option?.headers, Authorization: `Bearer ${token}` },
      // ...option,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}