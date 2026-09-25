'use client';

import { ChangeEvent} from "react";
import { FetchState } from "@/app/(modules)/shared/type/FetchState";
import { useLoginForm } from "../hooks/useLoginForm";

export const LoginForm = () => {
    const { email, setEmail, password, setPassword, handleSubmit, status, error } = useLoginForm();

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login CRM</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={status === FetchState.Loading}>
                {status === FetchState.Loading ? 'Memproses...' : 'Login'}
            </button>
        </form>
    )
}