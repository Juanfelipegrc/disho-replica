import React from 'react'
import { Section10Home1, Section11Home1, Section1Home1, Section2Home1, Section3Home1, Section4Home1, Section5Home1, Section6Home1, Section7Home1, Section8Home1, Section9Home1} from '../../components/'




export const HomePage1 = () => {
  return (
    <>
    
        <div className="container-fluid overflow-hidden m-0 p-0 animate__animated animate__fadeIn">
          
          {/* SECTION 1 */}
          <Section1Home1/>

          

          <div className="container-fluid bg-litle-gray d-flex flex-column justify-content-center mt-0 pt-0">
            {/* SECTION 2 */}
              <Section2Home1/>
            {/* SECTION 3 */}
              <Section3Home1/>
            {/* SECTION 4 */}
              <Section4Home1/>
            {/* SECTION 5 */}
              <Section5Home1/>
            {/* SECTION 6 */}
              <Section6Home1/>
          </div>

            {/* SECTION 7 */}
              <Section7Home1/>


            {/* SECTION 8 */}
              <Section8Home1/>
            

            {/* SECTION 9 */}
              <Section9Home1/>


            {/* SECTION 10 */}
              <Section10Home1/>
            


            {/* SECTION 11 */}
              <Section11Home1/>


            


          </div>

       
       
    
    </>
  )
}
