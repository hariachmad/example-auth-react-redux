'use client';

import { useLogout } from '../hook/useLogout';

export default function LogoutButton() {
  const { handleLogout } = useLogout();

  return <button onClick={handleLogout}>Logout</button>;
};
