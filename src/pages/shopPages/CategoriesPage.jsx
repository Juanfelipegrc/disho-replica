import React, { useEffect } from 'react'
import { Section1Categories, Section2Categories, Section3Categories, Section5Categories, Section6Categories } from '../../components'
import { useCategoryStore } from '../../hooks';
import { Section4Categories } from '../../components/categories/partsOfPage/Section4Categories';
import { Link } from 'react-router-dom';

export const CategoriesPage = () => {


  const {calculateCategoriesLenght, onResetStateCategoriesLength, category} = useCategoryStore();

  useEffect(() => {
    onResetStateCategoriesLength();
    calculateCategoriesLenght();

  }, []);



  return (
    <>
    
        <div className="container-fluid p-0 m-0 animate__animated animate__fadeIn bg-litle-gray">
            {/* SECTION 1 */}
              <div className="container-fluid d-flex align-items-center p-0 py-3 m-0 bg-middle-gray">
                <div className="container">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>Home</Link></li>
                      <li className="breadcrumb-item active fw-sans" aria-current="page">{category}</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <Section1Categories/>

            {/* SECTION 2 */}
              <Section2Categories/>

            {/* SECTION 3 */}
              <Section3Categories/>

            {/* SECTION 4 */}
              <Section4Categories/>

            {/* SECTION 5 */}
              <Section5Categories/>

            {/* SECTION 6 */}
              <Section6Categories/>
        </div>
    
    </>
  )
}
