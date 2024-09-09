import React from 'react'
import { Section1Contact, Section2Contact, Section3Contact, Section4Contact, Section5Contact, Section6Contact } from '../../components'
import { Link } from 'react-router-dom'

export const ContactPage = () => {
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
                      <li className="breadcrumb-item active fw-sans" aria-current="page">Contact Us</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <Section1Contact/>

            {/* SECTION 2 */}
              <Section2Contact/>
          
            {/* SECTION 3 */}
              <Section3Contact/>

            {/* SECTION 4 */}
              <Section4Contact/>
            
            {/* SECTION 5 */}
              <Section5Contact/>

            {/* SECTION 6 */}
              <Section6Contact/>
        </div>
    
    </>
  )
}
