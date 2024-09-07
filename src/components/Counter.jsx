import React from 'react'

export const Counter = ({dobleZero = 'no'}) => {
  return (
    <>
    
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-2 p-md-1">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center border border-0 rounded-4 shadow py-2 bg-white">
                        <h3 className='text-litle-green'>{dobleZero === 'yes'? '00' : '0'}</h3>
                        <p className='m-0 fw-sans'>Day</p>
                    </div>
                </div>
                <div className="col-3 p-2 p-md-1">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center border border-0 rounded-4 shadow py-2 bg-white">
                            <h3 className='text-litle-green'>{dobleZero === 'yes'? '00' : '0'}</h3>
                            <p className='m-0 fw-sans'>Hr</p>
                        </div>
                    </div>
                <div className="col-3 p-2 p-md-1">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center border border-0 rounded-4 shadow py-2 bg-white">
                        <h3 className='text-litle-green'>{dobleZero === 'yes'? '00' : '0'}</h3>
                        <p className='m-0 fw-sans'>Min</p>
                    </div>
                </div>
                <div className="col-3 p-2 p-md-1">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center border border-0 rounded-4 shadow py-2 bg-white">
                        <h3 className='text-litle-green'>{dobleZero === 'yes'? '00' : '0'}</h3>
                        <p className='m-0 fw-sans'>Sec</p>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}
