export const login = (user) => localStorage.setItem('auth', JSON.stringify(user))
export const logout = () => localStorage.removeItem('auth')
export const isAuth = () => localStorage.getItem('auth')