import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Credential } from '../../../type/Credential';
import { LoginPayload } from '../../../type/LoginPayload';
import { RejectValue } from '../../../type/RejectValue';
import { initialState } from '../../../constant/AuthState';
import { User } from '../../../type/User';
import { FetchState } from '@/app/(modules)/shared/type/FetchState';
import Cookies from 'js-cookie';

export const loginUser = createAsyncThunk<LoginPayload, Credential, RejectValue>(
  'auth/loginUser',
  async ({ email, password }: Credential, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (email === 'admin@crm.com' && password === '123456') {
      const dummyData: LoginPayload = {
        token: 'dummy-token-123456',
        user: {
          id: 1,
          name: 'Admin CRM',
          email: 'admin@crm.com',
          role: 'admin',
        },
      };
      Cookies.set('token', dummyData.token, {
        expires: 1,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      return dummyData;
    }

    return rejectWithValue('Email atau password salah');
  }
);

export const checkAuth = createAsyncThunk<{ user: User }, void, RejectValue>(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    const token = Cookies.get('token');
    if (!token) return rejectWithValue('Tidak ada token');

    await new Promise((resolve) => setTimeout(resolve, 500));

    if (token === 'dummy-token-123456') {
      return {
        user: {
          id: 1,
          name: 'Admin CRM',
          email: 'admin@crm.com',
          role: 'admin',
        },
      };
    }
    Cookies.remove('token');
    return rejectWithValue('Sesi berakhir, silakan login kembali');
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      Cookies.remove('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = FetchState.Loading;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginPayload>) => {
        state.status = FetchState.Succeeded;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = FetchState.Failed;
        state.error = action.payload ?? 'Login gagal';
        state.isAuthenticated = false;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.status = FetchState.Succeeded;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.status = FetchState.Failed;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
