import { Routes, Route } from "react-router-dom"
import "./styles/global.css"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import { AppProvider } from "./context"
import { LOGIN, DASHBOARD } from "./utilis/routes"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { BASEURL } from "./utilis/constants"

const client = new ApolloClient({
  uri: BASEURL,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={DASHBOARD} element={<Dashboard />} />
        </Routes>
      </AppProvider>
    </ApolloProvider>
  )
}

export default App
