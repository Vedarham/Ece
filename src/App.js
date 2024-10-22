import './App.css' 
import Footer from './components/Footer/Footer.js'
import Navigation from './components/Navigation/Navigation.js'

import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from './Home.js'
import Team from './Our Team Page/components/Team.js'
import Pricing from './components/Pricing/Pricing.js'
import ErrorPage from './components/ErrorPage/ErrorPage.js'
// import Archives from './components/Archives/Archives.js'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ESummit from './components/ESummit/ESummit.js'
import Contact from './components/ContactUs/Contact.js'


function App() {
  let tl =gsap.timeline()
  let cursor = useRef(null)
  let mouseX=0
  let mouseY =0
  let posX = 0
  let posY =0 
  useEffect(()=>{
    tl.to({},0.016,{
      repeat:-1,
      onRepeat: function(){
        posX += (mouseX-posX)/10
        posY+=(mouseY-posY)/10
        tl.set(cursor,{
          css:{
            left:posX-50,
            top:posY-50
          }
        })
      }
    })
    document.addEventListener("mousemove",function(e){
      mouseX=e.pageX;
      mouseY=e.pageY;
    })
  })
  return <div className='summit-page'>
    <Navigation></Navigation>
    <Outlet />
    <Footer></Footer>
    <div className='cursor' ref={el=>cursor =el}></div>
  </div>
}

const router = createBrowserRouter([
  {
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/esummit",
        element: <ESummit/>,
      },
      // {
      //   path: "/archives",
      //   element: <Archives />,
      // },
      {
        path: "/ourteam",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        // element: <Register />,
        element:<Pricing/>
      },
    ],
  },
]);
export default router