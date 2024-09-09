import React from 'react'
import { Section1AboutUs, Section2AboutUs, Section3AboutUs, Section4AboutUs, Section5AboutUs, Section6AboutUs } from '../../components'
import { Link } from 'react-router-dom'

export const AboutUsPage = () => {
  return (
    <>
    
        <div className="contaner-fluid animate__animated animate__fadeIn bg-litle-gray p-0 m-0">
            {/* SECTION 1 */}
              <div className="container-fluid d-flex align-items-center p-0 py-3 m-0 bg-middle-gray">
                <div className="container">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>Home</Link></li>
                      <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>Template</Link></li>
                      <li className="breadcrumb-item active fw-sans" aria-current="page">About</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <Section1AboutUs/>
            {/* SECTION 2 */}
              <Section2AboutUs/>
            {/* SECTION 3 */}
              <Section3AboutUs/>
            {/* SECTION 4 */}
              <Section4AboutUs/>
            {/* SECTION 5 */}
              <Section5AboutUs/>
            {/* SECTION 6 */}
              <Section6AboutUs/>
        </div>
    
    </>
  )
}
