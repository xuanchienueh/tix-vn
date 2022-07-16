const DOMAIN_API = "https://movienew.cybersoft.edu.vn";
const TOKEN = "accessToken";
const USER_LOGIN = "USER_LOGIN";
const MA_NHOM = "GP03";
const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo";

function imgNotFound(e) {
  return (
    (e.target.onerror = null),
    (e.target.src = "https://www.rabrotech.com/upload/default/image-not-found.png")
  );
}

export { DOMAIN_API, TOKEN, USER_LOGIN, MA_NHOM, TokenCybersoft, imgNotFound };
