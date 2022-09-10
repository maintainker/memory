import { AxiosResponse } from "axios";
import apiInstant from "..";

export const postLogin = async (body: UserRequest) => {
  try {
    const { data } = await apiInstant.post<UserResponse, AxiosResponse<UserResponse>, UserRequest>(
      "/users/login",
      body,
    );
    return data;
  } catch (error) {
    alert((error as any).message || "확인되지 않은 에러입니다. 지속되면 개발자에게 문의주세요.");
  }
};

export const postSignup = async (body: SignupRequest) => {
  try {
    const { data, status } = await apiInstant.post("/users/sign-up", body);
    return { data, status };
  } catch (error) {}
};
export const getUser = async () => {
  try {
    const { data } = await apiInstant.get<{ name: string; userId: string }>("/users");
    return data;
  } catch (error) {
    return null;
  }
};
export const getToken = async () => {
  try {
    const { data } = await apiInstant.get<{ access: string; access_expire: number; refresh_expire: number }>(
      "/users/token",
    );
    return data;
  } catch (error) {
    return null;
  }
};
