"use client"

import { useLogout } from "../hook/useLogout";

export const LogoutButton = () => {
    const { handleLogout } = useLogout();

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}