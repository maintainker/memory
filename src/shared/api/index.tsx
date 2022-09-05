import axios from "axios";

const appUrl = process.env.REACT_APP_URL;

const apiInstant = axios.create({
  baseURL: appUrl,
  timeout: 5000,
  headers: {
    withCredentials: true,
    "Content-Type": "application/json; charset=utf-8",
    // "Access-Control-Allow-Origin": "*",
  },
});

apiInstant.interceptors.request.use(async (config) => {
  if (false) {
    // 추후 토큰 로직 추가 예정
    config.headers = {
      ...(config.headers || {}),
      Authorization: `${"token"}`,
    };
  }
  return config;
});

export default apiInstant;
