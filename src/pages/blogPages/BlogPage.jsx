import React from 'react'
import { Section1Blog, Section2Blog } from '../../components'

export const BlogPage = () => {
  return (
    <>
    
        <div className="container-fluid bg-litle-gray m-0 p-0 animate__animated animate__fadeIn">

          {/* SECTION 1 */}
            <Section1Blog/>
          
          {/* SECTION 2 */}
            <Section2Blog/>
        </div>
    
    </>
  )
}
