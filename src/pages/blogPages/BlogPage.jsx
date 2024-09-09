import React from 'react'
import { Section1Blog, Section2Blog } from '../../components'
import { Link } from 'react-router-dom'

export const BlogPage = () => {
  return (
    <>
    
        <div className="container-fluid bg-litle-gray m-0 p-0 animate__animated animate__fadeIn">

          {/* SECTION 1 */}
              <div className="container-fluid d-flex align-items-center p-0 py-3 m-0 bg-middle-gray">
                <div className="container">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>Home</Link></li>
                      <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'></Link></li>
                    </ol>
                  </nav>
                </div>
              </div>
            <Section1Blog/>
          
          {/* SECTION 2 */}
            <Section2Blog/>
        </div>
    
    </>
  )
}
