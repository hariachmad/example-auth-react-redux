import { FetchState } from "@/app/(modules)/shared/type/FetchState";
import { User } from "./User";

export interface AuthState {
  user: User | null;
  token: string | null;
  status: FetchState;
  error: string | null;
  isAuthenticated: boolean;
}