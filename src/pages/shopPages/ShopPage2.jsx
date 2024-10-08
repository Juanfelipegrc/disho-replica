import React from 'react'
import { Section1Shop2, Section2Shop2, Section3Shop2, Section4Shop2, Section5Shop2 } from '../../components'
import { Link } from 'react-router-dom'

export const ShopPage2 = () => {
  return (
    <>
    
      <div className="container-fluid m-0 p-0 bg-litle-gray overflow-hidden animate__animated animate__fadeIn">
        {/* SECTION 1 */}
        <div className="container-fluid d-flex align-items-center p-0 py-3 m-0 bg-middle-gray">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>Home</Link></li>
                <li className="breadcrumb-item active fw-sans" aria-current="page">Shop</li>
              </ol>
            </nav>
          </div>
        </div>
        <Section1Shop2/>

        {/* SECTION 2 */}
          <Section2Shop2/>

        {/* SECTION 3 */}
          <Section3Shop2/>
        
        {/* SECTION 4 */}
          <Section4Shop2/>
        
        {/* SECTION 5 */}
          <Section5Shop2/>
      </div>
      
    
    </>
  )
}
