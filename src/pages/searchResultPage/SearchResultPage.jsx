import React from 'react'
import { Section1SearchResults, Section2SearchResults } from '../../components'

export const SearchResultPage = () => {
  return (
    <>
    
        <div className="container-fluid m-0 p-0 bg-litle-gray">
            {/* SECTION 1 */}
                <Section1SearchResults/>
            {/* SECTION 2 */}
                <Section2SearchResults/>
        </div>
    
    </>
  )
}
