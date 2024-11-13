import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Badge from './pages/Badge'



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
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
  
])
const App = () => {
  
  return (
    <RouterProvider router={BrowserRouter}/>
  )
}

export default App