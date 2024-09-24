import { RegisterUser } from "./register.interface"

export interface LoginResponse{
  role: RegisterUser;
  token: string
}
