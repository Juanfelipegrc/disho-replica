import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AboutUsPage, BlogPage, CategoriesPage, ContactPage, ErrorPage, FAQPage, HomePage1, HomePage2, HomePage3, SearchResultPage, ShopPage2, ShopPage3, SinglePostPage } from '../pages'

import { SingleProductPage } from '../pages/shopPages/SingleProductPage'

export const AppRouter = () => {

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])


  
  


  return (
    
    
      <Routes>

          <Route path='/' element={<HomePage1/>}/>
          <Route path='/home2' element={<HomePage2/>}/>
          <Route path='/home3' element={<HomePage3/>}/>

          <Route path='/shop2' element={<ShopPage2/>}/>
          <Route path='/shop3' element={<ShopPage3/>}/>
          <Route path='/single-product/:name' element={<SingleProductPage/>}/>
          <Route path='/categories/:category' element={<CategoriesPage/>}/>

          <Route path='/about-us' element={<AboutUsPage/>}/>
          <Route path='/faq' element={<FAQPage/>}/>
          <Route path='/error' element={<ErrorPage/>}/>

          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/single-post/:post' element={<SinglePostPage/>}/>

          <Route path='/contact' element={<ContactPage/>}/>

          <Route path='/search' element={<SearchResultPage/>}/>

      </Routes>
  
  
  )
}
