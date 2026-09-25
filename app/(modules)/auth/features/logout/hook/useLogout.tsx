'use client';

import { useAppDispatch } from '@/app/(modules)/shared/hooks/useAppDispatch';
import { logout } from '../../common/context/redux/slice/authSlice';
import { useRouter } from 'next/navigation';
import { ROUTER_PATH } from '@/global/constant/RoutePath';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push(ROUTER_PATH.login);
    router.refresh();
  };

  return { handleLogout };
};
