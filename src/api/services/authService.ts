import { setTokens } from '../config/tokenCofig';
import { API } from '../Api';


export const login = async (username: string, password: string) => {
    const response = await fetch(`${API}/token/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    if (!response.ok) {
        throw new Error("Login xatosi!")
    }
    const data = await response.json()
    setTokens(data.access, data.refresh)
}