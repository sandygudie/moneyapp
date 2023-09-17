import { ReactNode, createContext, useState } from "react"
import { LoginContextState } from "../types"
import { useNavigate } from "react-router-dom"

const initialState: LoginContextState = {
  isLoggedIn: false,
  loginHandler: () => {},
  handleLoginError: () => {},
  error: null,
  handleLogout: () => {},
}

export const LoginContext = createContext<LoginContextState>(initialState)

export const AppProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const navigate = useNavigate()
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const loginHandler = (email: string, password: string) => {
    if (email === "admin@gmail.com" && password === "admin") {
      setLoggedIn(true)
      navigate("/")
    } else {
      setError("Invalid email and password")
    }
  }

  const handleLoginError = () => {
    setError(null)
  }

  const handleLogout = () => {
    if (isLoggedIn) {
      setTimeout(() => {
        setLoggedIn(false)
    setError(null)
    navigate("/login")
      }, 120000)
    }
  }

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, handleLoginError, loginHandler, error, handleLogout }}
    >
      {children}
    </LoginContext.Provider>
  )
}
