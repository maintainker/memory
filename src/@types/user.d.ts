interface UserSuccessResponse {
  success: true;
  name: string;
  access?: string;
  access_expire?: number;
  refresh_expire?: number;
}
declare type UserResponse = UserSuccessResponse | ErrorResponse;
declare interface UserRequest {
  userId: string;
  password: string;
}

declare interface SignupRequest {
  name: string;
  userId: string;
  password: string;
}
