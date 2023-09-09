import { useState, useContext, FormEvent, ChangeEvent } from "react"
import tickIcon from "../assets/tickCircleIcon.svg"
import logo from "../assets/moneyIcon.svg"
import { LoginContext } from "../context"
import { EyeIcon, EyeSlashIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline"
import { activities } from "../utilis/data"
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)
  const { loginHandler, error } = useContext(LoginContext)

  const emailChangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const passwordChangehandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    loginHandler(email, password)
  }

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block w-1/2 py-8 px-[4.5rem]">
        <header>
          <a href="/">
            <img src={logo} className="w-16" alt="logo" />
          </a>
        </header>
        <div>
          <div className="my-6">
            <h1 className="font-extrabold text-4xl pb-4">Hi there, see what’s new</h1>
            <p className="leading-6 text-gray-400 tracking-wide">
              Here’s how Foodcourt helps you manage your daily operations and ensure your riders are
              efficient
            </p>
          </div>

          <div className="mt-12">
            {activities.map((ele) => (
              <div
                key={ele.id}
                className={`${
                  ele.id === 2 && "rounded-xl bg-gray"
                } flex items-center justify-between p-3 gap-4 mb-4`}
              >
                <div className="flex items-center gap-6">
                  {" "}
                  <img src={ele.icon} alt="icon" />
                  <div className={`${ele.id === 2 ? "text-black" : "text-gray-100"}`}>
                    {" "}
                    <h2 className="gray-100 font-medium text-lg">{ele.title}</h2>
                    <p className="text-xs xl:w-[340px] leading-5 tracking-[0.04em]">
                      {ele.description}
                    </p>
                  </div>
                </div>
                {ele.id === 2 && <img src={tickIcon} className="w-6 mr-4" alt="icon" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-pink flex-col flex px-4 md:px-20 items-center justify-center">
        <form
          onSubmit={(e) => handleLogin(e)}
          className="shadow-lg bg-white w-full rounded-xl py-8 px-8 md:px-14"
        >
          <h2 className="md:text-xl font-semibold pb-1">Login to your dashboard</h2>
          <p className="text-sm text-gray-100">Provide details to login to your account</p>
          <div className="my-8">
            <div className="mt-6">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                onChange={emailChangehandler}
                className={`${
                  error && "border-red"
                } rounded-md mt-2 border border-[1px] p-2.5 block w-full outline-4 outline-gray-600 outline`}
                type="email"
                value={email}
                required
              />
            </div>
            <div className="mt-6 mb-12 relative">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                onChange={passwordChangehandler}
                className={`${
                  error && "border-red"
                } rounded-md mt-2 border border-[1px] p-2.5 block w-full outline-4 outline-gray-600 outline`}
                type={showPassword ? "text" : "password"}
                value={password}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-11"
              >
                {!showPassword ? <EyeIcon className="w-5" /> : <EyeSlashIcon className="w-5" />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="hover:bg-primary/70 rounded-full w-full bg-primary font-medium text-sm text-white py-4"
          >
            Login
          </button>
          {error && (
            <p className="text-red flex items-center gap-2 mt-4 text-xs">
              <ExclamationCircleIcon className="text-red w-4" />
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
