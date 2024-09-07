import React, { useEffect } from 'react'
import { Section1Shop3, Section2Shop3, Section3Shop3, Section4Shop3, Section5Shop3, Section6Shop3 } from '../../components'
import { Link } from 'react-router-dom'
import { useCategoryStore } from '../../hooks'

export const ShopPage3 = () => {

  const {calculateCategoriesLenght, onResetStateCategoriesLength} = useCategoryStore();

  useEffect(() => {
    onResetStateCategoriesLength();
    calculateCategoriesLenght();

  }, [])
  

  return (
    <>
    
      <div className="container-fluid bg-litle-gray m-0 p-0 animate__animated animate__fadeIn">

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
          <Section1Shop3/>

        {/* SECTION 2 */}
          <Section2Shop3/>

        {/* SECTION 3 */}
          <Section3Shop3/>

        {/* SECTION 4 */}
          <Section4Shop3/>

        {/* SECTION 5 */}
          <Section5Shop3/>

        {/* SECTION 6 */}
          <Section6Shop3/>

      </div>
    
    
    </>
  )
}
