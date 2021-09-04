import { message } from "antd";

export default function handleErrorApi(err) {
  if (!err.response || !err.response.status) {
    (err);
  } else {
    const status = err.response.status;

    if (status === 401) {
      message.error("Unauthorized!");
      window.location.href = '/';
    }
    if (status === 400) {
      message.error(err.response.data.detail ?? "There was an error!");

      //   window.location.href = '/500'

      (err);
    } else if (status === 403) {
      message.error(err.response.data.message ?? "There was an error!");
      setTimeout(() => {
        window.location.href = document.referrer;
      }, 3000);

      // window.location.href = "/404";
    } else if (status === 429) {
      message.warning("Too fast, try again.");
    } else {
      (err);
      message.error(err.response.data.message ?? "There was an error!");
    }
  }
}