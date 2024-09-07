import React from 'react'
import { Link } from 'react-router-dom'

export const Section4Contact = () => {
  return (
    <>
    
        <div className="container-fluid container-lg my-5">
            <div className="row p-4 p-lg-0">
                <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                    <div className='d-flex flex-column align-items-center align-items-md-start align-items-lg-start'>
                        <h2 className='m-0'>Delivery terms</h2>
                        <hr className="border-4 border-litle-green opacity-100 col-2"></hr>
                    </div>
                    <p className='fw-sans'>Aenean eget efficitur purus. Quisque a luctus nibh. Nunc a tellus quis magna faucibus suscipit nec nec ex. Integer consectetur lacus a tellus vulputate tincidunt. Aliquam vulputate libero sed enim laoreet elementum. Nulla tristique erat vel velit viverra, nec imperdiet erat mattis. Curabitur congue lectus non tristique vehicula. Nunc vulputate faucibus mauris. Aenean ut ante sit amet nulla congue porttitor. Pellentesque eget placerat enim. Etiam id metus elit</p>
                    <div className='d-flex flex-column gap-4'>
                        <div className='d-flex'>
                            <i className="bi bi-info-circle-fill text-litle-green me-3"></i> <Link className='d-inline-block fw-sans text-black text-decoration-none'>Duis condimentum viverra leo, non varius leo dapibus suscipit</Link>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-info-circle-fill text-litle-green me-3"></i> <Link className='d-inline-block fw-sans text-black text-decoration-none'>Nulla posuere hendrerit tincidunt. Nam lacinia felis ultricies tempus bibendum. Vestibulum pulvinar porta condimentum. Suspendisse hendrerit enim sem, in rutrum leo ornare quis. Curabitur sollicitudin tellus eros, ut auctor nisi laoreet ac. Praesent commodo porttitor urna et condimentum</Link>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-info-circle-fill text-litle-green me-3"></i> <Link className='d-inline-block fw-sans text-black text-decoration-none'>Quisque a luctus nibh. Nunc a tellus quis magna faucibus suscipit nec nec ex. Integer consectetur lacus a tellus vulputate tincidunt. Aliquam vulputate libero sed enim laoreet elementum</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className='d-flex flex-column align-items-center align-items-md-start align-items-lg-start'>
                        <h2 className='m-0'>Licenses & Permits</h2>
                        <hr className="border-4 border-danger opacity-100 col-2"></hr>
                    </div>
                    <p className='fw-sans'>Praesent dapibus suscipit mi eget semper. Sed ornare libero vitae nulla malesuada porta. Donec fermentum ipsum at libero facilisis tempus. Maecenas nec ligula lacus. Nunc ornare dui sit amet neque maximus, vitae aliquet lacus finibus. Fusce ac dui eget urna hendrerit venenatis sed quis leo. Pellentesque commodo gravida quam quis condimentum. Duis at elit sed diam pretium gravida eu in lectus. In et diam dictum, mattis libero quis, laoreet risus. Pellentesque posuere dolor tellus, non tincidunt nibh molestie</p>
                    <div className='d-flex flex-column gap-3'>
                        <div className='d-flex'>
                            <i className="bi bi-file-earmark-arrow-down-fill text-danger me-3"></i> <Link className='d-inline-block text-black text-decoration-none'>Duis condimentum viverra leo, non varius leo dapibus suscipi (23kb)</Link>
                        </div>
                        <div className='d-flex'>
                            <i className="bi bi-file-word-fill text-danger me-3"></i> <Link className='d-inline-block text-black text-decoration-none'>Nulla posuere hendrerit tincidunt. Nam lacinia felis ultricies (345kb)</Link>
                        </div>
                       
                    </div>
                </div>      
            </div>
        </div>
    
    </>
  )
}
