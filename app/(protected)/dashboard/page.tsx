import { LogoutButton } from '@/app/(modules)/auth/features/logout/component/LogoutButton';
import { DashboardContentSection } from './(section)/DashboardContentSection';

export default function DashboardPage() {
    return (
        <>
            <DashboardContentSection />
            <LogoutButton />
        </>
    )
}