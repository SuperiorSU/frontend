import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Badge from './pages/Badge'
import TeamPage from './pages/team'
import FAQ from './pages/faq'


const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/badge',
        element: <Badge/>
      },
      {
        path: '/team',
        element: <TeamPage/>
      },
      {
        path:'/faq',
        element: <FAQ/>
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
  
])
const App = () => {
  
  return (
    <div className="m-0 p-0 w-screen">
      <RouterProvider router={BrowserRouter}/>
    </div>
  )
}

export default App