import React from 'react';
import { Section1Home2, Section2Home2, Section3Home2, Section4Home2, Section5Home2, Section6Home2, Section7Home2, Section8Home2 } from '../../components';
import { cakeMacaron, lemonsBanner, strawberries } from '../../assets';

export const HomePage2 = () => {
  return (
    <>
    
        <>
        
          <div className="container-fluid d-flex align-items-center flex-column gap-4 m-0 p-0 bg-litle-gray pt-5 animate__animated animate__fadeIn">

            {/* SECTION 1 */}
              <Section1Home2/>

            {/* SECTION 2 */}
              <Section2Home2/>

            {/* SECTION 3 */}
              <Section3Home2/>

            {/* SECTION 4 */}
              <Section4Home2/>

            {/* SECTION 5 */}
              <Section5Home2/>

            {/* SECTION 6 */}
              <Section6Home2/>

            {/* SECTION 7 */}
              <Section7Home2/>
            

            {/* SECTION 8 */}
              <Section8Home2/>
              
            
           


          </div>

        </>
    
    </>
  )
}
