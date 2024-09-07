import React from 'react'
import ReactDOM from 'react-dom'

export const ModalFAQ = ({children}) => {
  return ReactDOM.createPortal(
    <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="container-fluid position-relative">
                <div className="position-absolute mt-4 top-0" style={{left:'92%'}}>
                    <i data-bs-dismiss="modal" role='button' className="bi bi-x-lg text-white fs-1"></i>
                </div>
            </div>
            <div className="modal-dialog modal-dialog-centered modal-max-width">
                <div className="modal-content w-100">
                    {children}
                </div>
            </div>
        </div>
    </>,
    document.body
  );
}
