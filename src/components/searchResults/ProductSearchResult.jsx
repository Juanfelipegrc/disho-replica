import React from 'react'


export const ProductSearchResult = ({productSearch}) => {
  return (
    <>
    

        <div role='button' className="container-fluid">
            <div className="row">
                <div className={`col-12 d-flex justify-content-center align-items-center my-1 height-banner-glass-bottles overflow-hidden ${productSearch.img? '' : 'd-none'}`}>
                    <img className={`col-12 h-100 object-fit-cover ${productSearch.img? '' : 'd-none'}`} src={productSearch.img? productSearch.img[0] : ''} alt="" />
                </div>
                <div className="col-12">
                    <h4>{productSearch.name}</h4>
                    <p className='font-small-1 text-secondary m-0'>{productSearch.date? productSearch.date : 'February 15, 2021'} | No Comments</p>
                    <p className='fw-sans'>{productSearch.body? productSearch.body : 'Suspendisse rhoncus erat gravida finibus hendrerit. Donec elit risus, ultricies eget porta ac, tincidunt blandit risus. Aenean non eros enim. Quisque tempus turpis diam, sed luctus ex aliquam vitae. Nunc dictum, neque ut ornare vestibulum, arcu justo tempus mauris, ullamcorper volutpat est velit eu nulla. Curabitur eget est pretium quam ornare venenatis ac ac nisi. Fusce quam quam, semper quis sagittis in, mattis vel dui. Nam quis sagittis lacus'}</p>
                </div>
            </div>
        </div>


    </>
  )
}
