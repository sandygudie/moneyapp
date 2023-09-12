export type LoginContextState = {
  isLoggedIn: boolean
  loginHandler: (email: string, password: string) => void
  handleLoginError: () => void
  error: string | null
  handleLogout: () => void
}
