import React from 'react'

export const ProductHome3 = ({img, name, price, discountPrice = ''}) => {
  return (
    <>
    
    
        <div className="container-fluid d-none d-md-none d-lg-block card border rounded-5 w-100" style={{height: '25rem'}}>
                <div className="container-fluid p-0 m-0 d-flex justify-content-center overflow-hidden" style={{height: '18rem'}}>
                    <img className='w-100 object-fit-cover border-0 rounded-5' src={img[0]} alt="" />
                </div>
                <div className="container text-center py-3 ">
                    <h4 className=''>{name}</h4>
                    <div className="d-flex justify-content-center gap-1  text-dark">
                        <p className='text-decoration-underline'>{price}</p>
                        <p className='text-decoration-line-through'>{discountPrice}</p> 
                    </div>
                </div>
            </div>
            <div className="container-fluid d-none d-md-flex d-lg-none justify-content-center card border-0 shadow rounded-5 w-100">
                <div className="container-fluid p-0 m-0 d-flex justify-content-center ">
                    <img className='w-25 border-0 rounded-5' src={img[0]} alt="" />
                </div>
                <div className="container text-center py-3 ">
                    <h4 className=''>{name}</h4>
                    <div className="d-flex justify-content-center gap-1  text-dark">
                        <p className='text-decoration-underline'>{price}</p>
                        <p className='text-decoration-line-through'>{discountPrice}</p> 
                    </div>
                </div>
            </div>
            <div className="container-fluid d-block d-md-none d-lg-none card border-0 shadow rounded-5 w-100">
                <div className="container-fluid p-0 m-0 d-flex justify-content-center ">
                    <img className='w-100  border-0 rounded-5' src={img[0]} alt="" />
                </div>
                <div className="container text-center py-3 ">
                    <h4 className=''>{name}</h4>
                    <div className="d-flex justify-content-center gap-1  text-dark">
                        <p className='text-decoration-line-through'>{discountPrice}</p> 
                        <p className='text-decoration-underline'>{price}</p>
                    </div>
                </div>
            </div>

    
    </>
  )
}
