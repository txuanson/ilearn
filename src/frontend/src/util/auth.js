import cookie from 'js-cookie';

export const login = ({ token }) => {
    cookie.set("userToken", token, { expires: 7 });
    window.location.href = "/";
  };

export const auth = () => {
    const token = cookie.get("userToken");
  
    return token;
  };
  