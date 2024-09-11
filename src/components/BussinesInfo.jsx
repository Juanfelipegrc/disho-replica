import React from 'react'

export const BussinesInfo = () => {
    
  return (
    <>
    
        <div className="container-fluid p-0">
            <div className="row col-12 w-100 d-flex flex-column flex-md-row flex-lg-row justify-content-center m-0 m-md-0 m-lg-0">
                <div className='col-12 col-md-4 col-lg-4 p-0'>
                    <div className="col-12 h-100 bg-white border rounded-4 shadow-lg px-0 d-flex justify-content-center m-0 my-2 py-3">
                        <div className="row col-12 d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-1 col-lg-1 d-flex justify-content-center
                        justify-content-lg-end mx-2 p-0">
                            <i className="d-none d-md-block d-lg-block bi bi-truck mt-n3 fs-1 text-dark-blue"></i>
                            <i className="d-block d-md-none d-lg-none bi bi-truck mt-n3 text-dark-blue" style={{fontSize:'5rem'}}></i>
                        </div>
                        <div className="col-8 ms-0 ms-md-3 ms-lg-3 px-0">
                            <h3 className='text-center text-md-start text-lg-start text-dark-blue'>Fast Delivery</h3>
                            <p className='text-center text-md-start text-lg-start fs-6 m-0 text-dark-blue'><small>Within 2-3 hours after <br/> ordering.</small></p>
                        </div>

                    </div>
                    </div>
                </div>

                <div className='col-12 col-md-4 col-lg-4 p-0 ps-0 ps-md-3 ps-lg-3'>
                <div className="col-12 h-100 bg-white border rounded-4 shadow-lg px-0 d-flex justify-content-center m-0 my-2 py-3">
                    <div className="row col-12 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-1 col-lg-1 d-flex justify-content-center
                    justify-content-lg-end mx-2 p-0">
                        <i className="d-none d-md-block d-lg-block bi bi-clock mt-n3 fs-1 text-dark-blue"></i>
                        <i className="d-block d-md-none d-lg-none bi bi-clock mt-n3 text-dark-blue" style={{fontSize:'5rem'}}></i>
                    </div>
                    <div className="col-8 ms-0 ms-md-3 ms-lg-3 px-0">
                        <h3 className='text-center text-md-start text-lg-start text-dark-blue'>Opening Hours</h3>
                        <p className='text-center text-md-start text-lg-start fs-6 m-0 text-dark-blue'><small>Mon.-Fri.: 9.00 am- 9.00 pm</small></p>
                    </div>

                    </div>
                    </div>
                </div>

                <div className='col-12 col-md-4 col-lg-4 p-0 ps-0 ps-md-3 ps-lg-3'>
                <div className="col-12 h-100 bg-white border rounded-4 shadow-lg px-0 d-flex justify-content-center m-0 my-2 py-3">
                    <div className="row col-12 d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-1 col-lg-1 d-flex justify-content-center
                    justify-content-lg-end mx-2 p-0">
                        <i className="d-none d-md-block d-lg-block bi bi-tree mt-n3 fs-1 text-dark-blue"></i>
                        <i className="d-block d-md-none d-lg-none bi bi-tree mt-n3 text-dark-blue" style={{fontSize:'5rem'}}></i>
                    </div>
                    <div className="col-8 ms-0 ms-md-3 ms-lg-3 px-0">
                        <h3 className='text-center text-md-start text-lg-start text-dark-blue'>Eco-friendly packaging</h3>
                        <p className='text-center text-md-start text-lg-start fs-6 m-0 text-dark-blue'><small>Sustainable materials</small></p>
                    </div>

                    </div>
                    </div>
                </div>
                
            </div>

        </div>
    
    </>
  )
}
