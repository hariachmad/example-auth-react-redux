import { useAppDispatch } from '@/app/(modules)/shared/hooks/useAppDispatch';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../../common/context/redux/slice/authSlice';
import { useAppSelector } from '@/app/(modules)/shared/hooks/useAppSelector';

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { status, error } = useAppSelector((state) => state.auth);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      router.push('/dashboard');
    }
  };

  return { email, setEmail, password, setPassword, handleSubmit, status, error };
}
