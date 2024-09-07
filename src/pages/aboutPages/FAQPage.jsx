import React from 'react'
import { Section1FAQ, Section2FAQ, Section3FAQ, Section4FAQ, Section5FAQ, Section6FAQ } from '../../components'
import { Link } from 'react-router-dom'

export const FAQPage = () => {
  return (
    <>
    
        <div className="container-fluid m-0 p-0 bg-litle-gray animate__animated animate__fadeIn">
            {/* SECTION 1 */}
              <div className="container-fluid d-flex align-items-center p-0 py-3 m-0 bg-middle-gray">
                <div className="container">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>Home</Link></li>
                      <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>Template</Link></li>
                      <li className="breadcrumb-item active fw-sans" aria-current="page">FAQ</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <Section1FAQ/>
            {/* SECTION 2 */}
              <Section2FAQ/>
            {/* SECTION 3 */}
              <Section3FAQ/>
            {/* SECTION 4 */}
              <Section4FAQ/>
            {/* SECTION 5 */}
              <Section5FAQ/>
            {/* SECTION 6 */}
              <Section6FAQ/>
            
        </div>
    
    </>
  )
}
