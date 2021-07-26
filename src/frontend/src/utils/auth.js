import cookie from "js-cookie";

export const auth = () => {
  const token = cookie.get("token");
  console.log(token);
  return token;
};

export const login = ({ token }) => {
  cookie.set("token", token, { expires: 7 });
  window.location.href = "/";
};

export const register = ({ token }) => {
  cookie.set("token", token, { expires: 7 });
  window.location.href = "/";
};
