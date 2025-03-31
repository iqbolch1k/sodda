export const setTokens = (access: string, refresh: string): void => {
    localStorage.setItem('accessToken', access)
    localStorage.setItem('refreshToken', refresh)
}

export const auth = (): string | null => {
    return localStorage.getItem('accessToken')
}
export const removeToken = (): void => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    window.location.href = '/'
}