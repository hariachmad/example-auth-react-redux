'use client';

import { UserInformationTable } from '@/app/(modules)/auth/features/userinformation/component/UserInformationTable';

export const DashboardContentSection = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Login berhasil</p>
            <UserInformationTable />
        </div>
    );
}