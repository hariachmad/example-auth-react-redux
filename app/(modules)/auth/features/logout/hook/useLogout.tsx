"use client";

import { useAppDispatch } from "@/app/(modules)/shared/hooks/useAppDispatch";
import { logout } from "../../common/context/redux/slice/authSlice";
import { RoutePath } from "@/app/(global)/constant/RoutePath";
import { useRouter } from "next/navigation";

export const useLogout = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push(RoutePath.login);
        router.refresh();
    };

    return { handleLogout };
}