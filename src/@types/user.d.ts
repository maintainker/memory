interface UserSuccessResponse {
  success: true;
  name: string;
  access?: string;
  access_expire?: number;
  refresh_expire?: number;
}
interface UserErrorResponse {
  success: false;
  message: string;
}
declare type UserResponse = UserSuccessResponse | UserErrorResponse;
declare interface UserRequest {
  userId: string;
  password: string;
}
