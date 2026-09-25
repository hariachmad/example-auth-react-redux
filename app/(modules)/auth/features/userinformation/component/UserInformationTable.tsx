import { FetchState } from '@/app/(modules)/shared/type/FetchState';
import { useCheckAuth } from '../../common/hooks/useCheckAuth';

export default function UserInformationTable (){
  const { user, status } = useCheckAuth();

  if (status === FetchState.Loading) {
    return <p>Memuat...</p>;
  }

  return (
    <div>
      {user && (
        <ul>
          <li>ID: {user.id}</li>
          <li>Nama: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
      )}
    </div>
  );
};
