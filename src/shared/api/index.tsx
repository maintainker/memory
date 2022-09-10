import axios from "axios";

const appUrl = process.env.REACT_APP_URL;

const apiInstant = axios.create({
  baseURL: appUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

apiInstant.interceptors.request.use(async (config) => {
  const userTokenData = JSON.parse(localStorage.getItem("memory-user") || "{}");
  const today = new Date().valueOf();
  if (!userTokenData["access"]) {
    return config;
  }
  try {
    if (userTokenData["accessExpire"] > today) {
      config.headers = {
        ...(config.headers || {}),
        Authorization: `Bearer ${userTokenData["access"]}`,
      };
      return config;
    } else if (userTokenData["refreshExpire"] > today) {
      const { data: tokenData } = await axios.get("/users/token");
      localStorage.setItem(
        "memory-user",
        JSON.stringify({
          access: tokenData["access"],
          accessExpire: tokenData["access_expire"],
          refreshExpire: tokenData["refresh_expire"],
        }),
      );

      config.headers = {
        ...(config.headers || {}),
        Authorization: `Bearer ${tokenData["access"]}`,
      };
      return config;
    }
    localStorage.removeItem("memory-user");
    return config;
  } catch (error) {
    return config;
  }
});

export default apiInstant;
