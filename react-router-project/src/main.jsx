import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Layout from './Layout.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,Router,RouterProvider} from 'react-router-dom'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} >


<Route  path='home' element= {<Home />}/>
  <Route  path='about' element= {<About />}/>
  <Route  path='Contact' element= {<Contact />}/>
  <Route  path='user/:userid' element= {<User />}/>
  <Route
  loader= {githubInfoLoader}
  path='github'
  element = {<Github/>}
  />
    </Route >
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
