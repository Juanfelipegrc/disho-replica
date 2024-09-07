import React from 'react'
import { useSearchValueStore, useSinglePostStore } from '../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { berrieCake } from '../assets';

export const SideBarBlog = () => {

    const {onSetPost} = useSinglePostStore();
    const {onSetSearchValue, onSetInputSearchValue, inputSearchValue} = useSearchValueStore();
    const navigate = useNavigate();

    const onNavigatePost = (postTag) => {
        const postFind = posts.find(post => post.tag === postTag);
        onSetPost(postFind);
        localStorage.setItem('singlePost', JSON.stringify(postFind));
        navigate(`/single-post/${postTag}`);

    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(inputSearchValue.length === 0) return;
        onSetSearchValue(inputSearchValue);
        navigate(`/search?q=${inputSearchValue}`)

    }

    

  return (
    <>
    
        <div className="col-12 col-md-5 col-lg-4 d-flex flex-column gap-5">

            <div className="col-12">
                <div>
                    <h4 className='d-none d-md-block d-lg-block'>Categories</h4>
                    <h1 className='d-block d-md-none d-lg-none'>Categories</h1>
                    <hr className="d-none d-md-block d-lg-block border-3 border-litle-green opacity-100 col-2"></hr>
                    <hr className="d-block d-md-none d-lg-none border-3 border-litle-green opacity-100 col-3"></hr>
                </div>

                <ul className='navbar-nav d-flex flex-column gap-2'>
                    <li className='nav-item'>
                        <Link className='nav-link p-0 pb-2 '><small className='text-dark'><i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; All Categories</small></Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link p-0 pb-2 '><small className='text-dark'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Best Sellers</small></Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link p-0 pb-2 '><small className='text-dark'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Resipes</small></Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link p-0 pb-2 '><small className='text-dark'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Seasonal</small></Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link p-0 pb-2 '><small className='text-dark'> <i className="bi bi-arrow-left-circle-fill text-litle-green"></i> &nbsp; Uncategorized</small></Link>
                    </li>
                    
                </ul>
            </div>

            <form onSubmit={onSubmitForm} className="d-flex col-12 m-0" role="search">
                <input className="form-control shadow-none border-none rounded-start-pill p-3" type="search" placeholder="Search" aria-label="Search" value={inputSearchValue} onChange={onSetInputSearchValue}/>
                <button className="btn btn-litle-green text-white border rounded-end-pill px-5" type="submit"><i className="bi bi-search"></i></button>
            </form>

            <div className='col-12'>
                <div>
                    <h4 className='d-none d-md-block d-lg-block'>Featured Post</h4>
                    <h1 className='d-block d-md-none d-lg-none'>Featured Post</h1>
                    <hr className="d-none d-md-block d-lg-block border-3 border-danger opacity-100 col-2"></hr>
                    <hr className="d-block d-md-none d-lg-none border-3 border-danger opacity-100 col-3"></hr>
                </div>
                {
                    posts.map((post, index) => (
                        <div role='button' onClick={() => onNavigatePost(post.tag)} key={index} className="row my-4">
                            <div className="col-md-4 col-lg-4 d-none d-md-block d-lg-block overflow-hidden">
                                <img className='col-12 border border-0 rounded-3 object-fit-cover' src={post.bannerPost} alt="" />
                            </div>
                            <div className="col-12 d-block d-md-none d-lg-none border border-0 rounded-3 overflow-hidden d-flex align-items-center justify-content-center p-0" style={{height: '12rem'}}>
                                <img className='col-12 border border-0 rounded-3 object-fit-cover' src={post.bannerPost} alt="" />
                            </div>
                            <div className="col-md-8 col-lg-8 d-none d-md-block d-lg-block">
                                <h5>{post.title}</h5>
                                <p className='font-small-1 text-secondary'>{post.date} | {post.comments.length === 0?'No Comments' : `${post.comments.length + post.comments.reduce((acc, comment) => acc + comment.replies.length, 0)} Comments`}</p>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className="col-9">
                <h3 className=''>Tags</h3>
                <div className="row d-flex flex-wrap gap-2">
                    <button className='btn btn-outline-litle-green w-auto text-black   border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover'><span className='fw-sans'>best seller</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black   border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover'><span className='fw-sans'>canned goods</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black  border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover '><span className='fw-sans'>farmer production</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black  border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover '><span className='fw-sans'>food</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black  border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover'><span className='fw-sans'>fruits</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black  border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover '><span className='fw-sans'>recipes</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black  border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover '><span className='fw-sans'>sale</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black  border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover '><span className='fw-sans'>seasonal</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black  border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover '><span className='fw-sans'>sesonal</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black  border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover '><span className='fw-sans'>shopping guide</span></button>

                    <button className='btn btn-outline-litle-green w-auto text-black  border border-1 border-dark rounded-2 link-light button-outline-litle-green-hover '><span className='fw-sans'>vegetables</span></button>

                   
                </div>
            </div>


            <div className="col p-0">
                <div className="col-12 align-self-end card shadow border rounded-5 mt-2 mt-lg-0 p-0">
                    <img className='w-100 border border-0 rounded-5 card-img' src={berrieCake} alt="" />
                    <div className="card-img-overlay m-3">
                        <h3 className=''>Disho Bakery</h3>
                        <Link className=' text-decoration-none text-dark'>Shop now <i className="bi bi-arrow-right-circle-fill text-litle-green"></i></Link>
                    </div>
                </div>
            </div>

        </div>

    </>
  )
}
