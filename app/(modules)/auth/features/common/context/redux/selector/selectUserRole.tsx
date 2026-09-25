import { RootState } from "../../../../../../shared/context/redux/store/store";

export const selectUserRole = (state: RootState) => state.auth.user?.role;