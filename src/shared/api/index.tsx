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
  let accessToken = userTokenData["access"];
  const today = new Date().valueOf();
  if (userTokenData["accessExpire"] < today && userTokenData["accessExpire"] > today) {
    const { data: tokenData } = await axios({
      method: "get",
      baseURL: appUrl,
      url: "/users/token",
    });
    localStorage.setItem(
      "memory-user",
      JSON.stringify({
        access: tokenData["access"],
        accessExpire: tokenData["access_expire"],
        refreshExpire: tokenData["refresh_expire"],
      }),
    );
    accessToken = tokenData["access"];
  } else if (userTokenData["accessExpire"] < today) {
    accessToken = null;
    localStorage.removeItem("memory-user");
  }
  if (accessToken) {
    config.headers = {
      ...(config.headers || {}),
      Authorization: `${accessToken}`,
    };
  }
  return config;
});

export default apiInstant;

// withCredentials: true,
// });

// headers: {
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// },
