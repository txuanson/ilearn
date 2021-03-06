import { message } from "antd";
import { logout } from "./auth";

export default function handleErrorApi(err) {
  if (!err.response || !err.response.status) {
    console.log(err);
  } else {
    const status = err.response.status;

    if (status === 401) {
      message.error("Unauthorized!");
      window.location.href = '/';
    }
    if (status === 400) {
      message.error(err.response.data.message ?? "There was an error!");
    } else if (status === 403) {
      message.error(err.response.data.message ?? "You have been banned!");
      if (err.response.data.message.includes("banned")) {
        logout();
      }
      setTimeout(() => {
        window.location.href = document.referrer;
      }, 3000);

      // window.location.href = "/404";
    } else if (status === 429) {
      message.warning("Too fast, try again.");
    } else {
      message.error(err.response.data.message ?? "There was an error!");
    }
  }
}