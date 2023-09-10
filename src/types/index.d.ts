export type LoginContextState = {
  isLoggedIn: boolean
  loginHandler: (email: string, password: string) => void
  error: string | null
  handleLogout: () => void
}
