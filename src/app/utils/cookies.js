import Cookies from "js-cookie";
var CryptoJS = require("crypto-js");

export const setCookie = (name, data) => {
  Cookies.set(name, CryptoJS.AES.encrypt(JSON.stringify(data), "topSecret"), {
    expires: 2,
  });
};

export const getCookie = (name) => {
  const data = Cookies.get(name);
  if (data) {
    return JSON.parse(
      CryptoJS.AES.decrypt(data, "topSecret").toString(CryptoJS.enc.Utf8)
    );
  }
  return null;
};
