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
