import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </React.StrictMode>
)

// todo÷
// add eslint and husky
// check other people work for how apollo client is sepatate, check the guys code
// work on responsiveniess
// fix the design
// refactor icon
// check that clickable icon are button
// use effect
