import { RootState } from "../../../../../../shared/context/redux/store/store";


export const selectCurrentUser = (state : RootState) => state.auth.user;