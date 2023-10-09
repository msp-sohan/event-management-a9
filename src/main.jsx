import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AuthProvider from './Provider/AuthProvider'
import ServiceDetails from './component/services/ServiceDetails'
import PrivetRoute from './route/PrivetRoute'
import AboutPage from './pages/AboutPage/AboutPage'
import Contact from './pages/Contact/Contact'
import OurServices from './pages/Service/OurServices'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://pvzsohan.github.io/eventapi/testimonial.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "/contact",
        element: <PrivetRoute><Contact></Contact></PrivetRoute>
      },
      {
        path: "/service",
        element: <PrivetRoute><OurServices></OurServices></PrivetRoute>,
        loader: () => fetch("https://pvzsohan.github.io/eventapi/event.json")
      },
      {
        path: "/service/:id",
        element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>,
        loader: () => fetch("https://pvzsohan.github.io/eventapi/event.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
