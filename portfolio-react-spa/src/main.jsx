import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Skills from './components/pages/Skills.jsx'
import Work from './components/pages/Work.jsx'  
import Testimonials from './components/content/TestiMonials.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/skills",element:<Skills/>},
      {path:"/work",element:<Work/>},
      {path:"/testimonials",element:<Testimonials/>},

    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </StrictMode>,
)
