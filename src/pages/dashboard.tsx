import { useContext, useEffect } from "react"
import { useQuery } from "@apollo/client"
import logo from "../assets/moneyIcon.svg"
import { COMPANY_QUERY } from "../utilis/api"
import companyLogo from "../assets/companyLogo.svg"
import starIcon from "../assets/star.svg"
import cheerIcon from "../assets/cheer.svg"
import blazeIcon from "../assets/blaze.svg"
import timerIcon from "../assets/timer.svg"
import Spinner from "../components/Spinner"
import { LoginContext } from "../context"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage"

export default function Dashboard() {
  const navigate = useNavigate()
  const { isLoggedIn, handleLogout } = useContext(LoginContext)
  const { data, loading, error } = useQuery(COMPANY_QUERY)

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        handleLogout()
      }, 120000)
    } else {
      navigate("/login")
    }
  }, [])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage text={"Error loading page"} />
      ) : (
        <div>
          <header className="border-b border-gray-200  px-4 lg:px-14 pt-3">
            <a href="/">
              <img className="w-[80px]" src={logo} alt="logo" />
            </a>
          </header>
          <main className="flex  mx-4 lg:mx-14 my-5 justify-between">
            <div className="border-gray-200 border w-full lg:w-8/12 rounded-xl p-8 lg:px-24 lg:py-12">
              <div className="flex gap-4 items-center">
                <img className="w-12 lg:w-16" src={companyLogo} alt="company-logo" />
                <p className="text-lg font-bold">{data.company.name}</p>
              </div>
              <div className="mt-12">
                <div className="mb-4">
                  <span className="text-sm font-light text-gray-100">CEO</span>
                  <p className="font-normal mt-1">{data.company.ceo.toUpperCase()}</p>
                </div>
                <div className="mb-4">
                  <span className="text-sm font-light text-gray-100">CTO</span>
                  <p className="font-normal mt-1">{data.company.cto.toUpperCase()}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray py-6 px-6 rounded-xl hidden lg:block w-[30%]">
              <div className="">
                <div className="my-12">
                  <span className="rounded-full flex items-center gap-1 w-fit text-sm py-2 font-medium px-4 bg-light-red text-red">
                    <img src={timerIcon} alt="icon" /> Coming soon
                  </span>
                </div>
                <div className="rounded-lg bg-white border border-gray-500 my-5 py-1 px-5">
                  {[cheerIcon, starIcon, blazeIcon].map((ele: string, index: number) => (
                    <div key={index} className="flex items-center gap-6 my-4">
                      <span className=" h-10 w-12 flex flex-col items-center justify-center bg-gray-300 rounded-lg">
                        {" "}
                        <img src={ele} alt="icon" />
                      </span>
                      <div>
                        <span className="rounded-md w-48 bg-gray-300 block h-[14px] mb-1"></span>
                        <span className="rounded-md w-36 bg-gray-300 block h-[14px]"></span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <h3 className="font-semibold text-2xl mb-2">📫 Notifications</h3>
                  <p className="font-normal px-3 text-gray-400 leading-relaxed text-gray-400">
                    Receive notifcations about your rider performance, efficiency reviews and a lot
                    more
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  )
}
