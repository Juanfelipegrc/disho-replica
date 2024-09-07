import React from 'react'
import { Section1Contact, Section2Contact, Section3Contact, Section4Contact, Section5Contact, Section6Contact } from '../../components'

export const ContactPage = () => {
  return (
    <>
    
        <div className="container-fluid m-0 p-0 bg-litle-gray animate__animated animate__fadeIn">
            {/* SECTION 1 */}
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
