import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Footer, Header, ScrollButton } from './components'
import { BrowserRouter } from 'react-router-dom'

export const DishoApp = () => {


  return (
    <>
    <BrowserRouter>
        <Header/>
          <AppRouter/>
          <ScrollButton/>
        <Footer/>
    </BrowserRouter>
    
    </>
  )
}
