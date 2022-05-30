const DOMAIN_API = "http://movieapi.cyberlearn.vn";
const TOKEN = "accessToken";
const USER_LOGIN = "USER_LOGIN";
const MA_NHOM = "GP03";

function imgNotFound(e) {
  return (
    (e.target.onerror = null),
    (e.target.src =
      "https://www.rabrotech.com/upload/default/image-not-found.png")
  );
}

export { DOMAIN_API, TOKEN, USER_LOGIN, MA_NHOM, imgNotFound };
