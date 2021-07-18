import cookie from "js-cookie";

export const auth = () => {
    const token = cookie.get("token");
    return token;
};