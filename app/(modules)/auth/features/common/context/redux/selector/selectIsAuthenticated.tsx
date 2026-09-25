import { RootState } from '../../../../../../shared/context/redux/store/store';

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
