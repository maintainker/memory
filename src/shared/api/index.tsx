import axios from "axios";

const appUrl = process.env.REACT_APP_URL;

const apiInstant = axios.create({
  baseURL: appUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

apiInstant.interceptors.request.use(async (config) => {
  if (false) {
    // 추후 토큰 로직 추가 예정
    config.headers = {
      ...(config.headers || {}),
      Authorization: `Bearer ${"token"}`,
    };
  }
  return config;
});

export default apiInstant;
