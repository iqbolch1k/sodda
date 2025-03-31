import { API } from "../Api"

export const UserService = async () => {
    const response = await fetch(`${API}/all-accounts/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok) {
        throw new Error("Login xatosi!")
    }
    const data = await response.json()
    return data
}