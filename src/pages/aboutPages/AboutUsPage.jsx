import React from 'react'
import { Section1AboutUs, Section2AboutUs, Section3AboutUs, Section4AboutUs, Section5AboutUs, Section6AboutUs } from '../../components'

export const AboutUsPage = () => {
  return (
    <>
    
        <div className="contaner-fluid animate__animated animate__fadeIn bg-litle-gray p-0 m-0">
            {/* SECTION 1 */}
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
