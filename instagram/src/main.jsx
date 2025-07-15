import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ViewStories from './component/ViewStories.jsx'

import Profile from './component/Profile.jsx'
import ProfileMain from './component/ProfileMain.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/Story/:id/:tot',
      element:<ViewStories/>
    },
    {
      path:"/profile",
      element:<ProfileMain/>
    }
  ]
)
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
