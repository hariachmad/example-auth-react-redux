'use client';

import { useEffect } from 'react';
import { checkAuth } from '@/app/(modules)/auth/features/common/context/redux/slice/authSlice';
import { useAppDispatch } from '@/app/(modules)/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/app/(modules)/shared/hooks/useAppSelector';

export function useCheckAuth() {
  const dispatch = useAppDispatch();
  const { user, status } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return { user, status };
}
