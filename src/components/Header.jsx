import React, { useEffect, useState } from 'react'
import { imageHeaderOffCanvas, logo } from '../assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSearchValueStore, useSinglePostStore, useSingleProductStore } from '../hooks';

export const Header = () => {
    
    const [scroll, setScroll] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;
    const {name} = useSingleProductStore();
    const {post} = useSinglePostStore();
    const {onSetSearchValue, onSetInputSearchValue, inputSearchValue} = useSearchValueStore();
   

    const closeOffCanvas = () => {
        const offcanvas = document.querySelector('.offcanvas');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        if(bsOffcanvas){
            bsOffcanvas.hide();
        }
    }

    const onClickLinkNavigate = (path)=>{
        
        closeOffCanvas();

        navigate(path)

    };

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setScroll(scroll)
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    useEffect(() => {
        const dropdowns = document.querySelectorAll('.nav-item');

        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseover', () => {
                const navLink = dropdown.querySelector('.nav-link');
                if(navLink){
                    navLink.classList.add('text-litle-green')
                }
                const menu = dropdown.querySelector('.dropdown-menu');
                if(menu){
                    menu.classList.add('show')
                }
            })

            dropdown.addEventListener('mouseleave', () => {
                const navLink = dropdown.querySelector('.nav-link');
                if(navLink){
                    navLink.classList.remove('text-litle-green')
                }
                const menu = dropdown.querySelector('.dropdown-menu');
                if(menu){
                    menu.classList.remove('show')
                }
            })
        })

        return () => {
            dropdowns.forEach(dropdown => {
                dropdown.removeEventListener('mouseover', () => {});
                dropdown.removeEventListener('mouseleave', () => {});
            })
        }
    }, []);


    const onSubmitForm = (event) => {
        event.preventDefault();
        if(inputSearchValue.length === 0) return;
        onSetSearchValue(inputSearchValue);
        navigate(`/search?q=${inputSearchValue}`)

    }
    
    


  return (
        pathname === '/error'? <></> 
        
        :
        <>
        <div className="conainer-fluid bg-warning d-none d-md-block d-lg-block">
            <div className='container-fluid container-lg d-flex justify-content-between align-items-center py-3'>
                <p className='text-dark-blue m-0'><i className="bi bi-clock-fill"></i> <span className='fw-sans'>Mon - Fri:</span> 9:00am – 9:00pm | <i className="bi bi-telephone-fill"></i> <span className='fw-sans'>Call Us:</span> +1-202-555-0168</p>
                <p className='text-dark-blue m-0'><span className='fw-sans'>Language:</span> English <span className='fw-sans'>Currency:</span> $USD</p>
            </div>
        </div>
       <nav className={`navbar navbar-expand-lg d-flex justify-content-center p-lg-3 sticky-top header-transition ${scroll != 0? 'shadow-sm  border-bottom bg-white' : 'bg-litle-gray'}`}>
        <div className="container-fluid m-2 ms-lg-5">
            <div className="row col-12">

            
            <div className="container col-3 col-md-2 col-lg-2 ms-0 ms-lg-auto me-lg-5 d-flex align-items-center">
                <Link to='/'>
                    <img src={logo} className='img-fluid w-50 ms-2 ms-lg-auto me-auto me-lg-0 d-none d-md-none d-lg-block ' alt="" />
                    <img src={logo} className='img-fluid w-75 ms-2 ms-lg-auto me-auto me-lg-0 d-none d-md-block d-lg-none ' alt="" />
                    <img src={logo} className='img-fluid w-100 ms-2 ms-lg-auto me-auto me-lg-0 d-block d-md-none d-lg-none ' alt="" />
                </Link>
            </div>

            <div className="container col-9 d-flex justify-content-end align-items-center d-lg-none">
                <button 
                    className='navbar-toggler border-0 shadow-none ' 
                    type='button'
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                >
                    <span className='navbar-toggler-icon fs-5'></span>
                </button>
            </div>





            <div className=" navbar-collapse col-9 d-none d-lg-block" >
                <div className="row d-flex align-items-center">

                    <ul className="navbar-nav mb-2 col-5 me-1 ">

                        <div className="row">
                            <li className="nav-item dropdown col-2 ps-0 me-3">
                                <Link 
                                    className="nav-link dropdown-toggle "  
                                    to='/' 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    onClick={() => onClickLinkNavigate('/')}
                                    >
                                    Home
                                </Link>
                                <ul className="dropdown-menu border-0 shadow">
                                    <li><Link className="dropdown-item fw-sans py-2" to='/'>Home 1</Link></li>
                                    <li><Link className="dropdown-item fw-sans py-2" to='/home2'>Home 2</Link></li>
                                    <li><Link className="dropdown-item fw-sans py-2" to='/home3'>Home 3</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown col-2 ps-0 pe-1 me-3">
                                <Link 
                                    className="nav-link dropdown-toggle me-1 " 
                                    to='/' 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false">
                                    Shop
                                </Link>
                                <ul className="dropdown-menu border-0 shadow">
                                    <li><Link className="dropdown-item fw-sans py-2" to='/shop2'>Shop 2</Link></li>
                                    <li><Link className="dropdown-item fw-sans py-2" to='/shop3'>Shop 3</Link></li>
                                    <li><Link className="dropdown-item fw-sans py-2" to={`/single-product/${name? name : 'Potato Snacks'}`}>Single Product</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown col-2 ps-0 pe-1 me-3" >
                                <Link 
                                    className="nav-link dropdown-toggle ps-0 me-1 " 
                                    to='/about-us' 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    onClick={() => onClickLinkNavigate('/about-us')}
                                    >
                                    About
                                </Link>
                                <ul className="dropdown-menu border-0 shadow">
                                    <li><Link className="dropdown-item fw-sans py-2" to='/faq'>FAQ</Link></li>
                                    <li><Link className="dropdown-item fw-sans py-2" to='/error'>Error Page</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown col-2 ps-0 pe-1">
                                <Link 
                                    className="nav-link dropdown-toggle ps-0 me-1 " 
                                    to='/' 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    onClick={() => onClickLinkNavigate('/blog')}
                                    >
                                    Blog
                                </Link>
                                <ul className="dropdown-menu border-0 shadow">
                                    <li><Link className="dropdown-item fw-sans py-2" to={`/single-post/${post.tag? post.tag : 'post1'}`}>Single Post</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item col-2 ps-0">
                                <Link 
                                    className="nav-link ps-0 me-1 " 
                                    to='/contact' 
                                    role="button">
                                    Contact
                                </Link>
                                
                            </li>
                        </div>
                    
                    
                    
                </ul>

                <div className="container col-4">
                    <form onSubmit={onSubmitForm} className="d-flex col-12" role="search">
                        <input className="form-control shadow-none border-none rounded-start-pill p-3" type="search" placeholder="Search" aria-label="Search" value={inputSearchValue} onChange={onSetInputSearchValue}/>
                        <button className="btn btn-litle-green text-white border rounded-end-pill px-5" type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div>

                <div className="container col-2 p-2">
                    <div className="row d-flex justify-content-between flex-wrap gap-2">
                        <div className="container col-5">
                            <div className='container-fluid d-flex justify-content-center'>
                                <Link 
                                    to='' 
                                    className='btn btn-lg btn-outline-litle-green shadow fs-4 border-0 rounded-circle  text-black link-light py-3 px-4'
                                    
                                    >
                                    <i className="bi bi-person "></i>
                                </Link>
                            </div>

                        </div>
                        <div className="container col-5">
                            <div className='container-fluid d-flex justify-content-center align-items-center '>
                                <Link to='' className='btn btn-lg btn-outline-litle-green shadow fs-4 border-0 rounded-circle text-black link-light py-3 px-4'
                                >
                                    <i className="bi bi-cart"></i>
                                </Link>
                            </div>

                        </div>
                         
                    </div>

                </div>

               
                </div>
            
            </div>


            {/* OFFCANVAS */}

            <div 
                className="offcanvas offcanvas-start container-fluid overflow-y-auto overflow-x-hidden bg-light border-top p-5 vh-100 d-flex flex-column align-items-center border-0 d-lg-none"
                id='offcanvasNavbar'
                tabIndex='-1'
                
            >


            

                <div className="row col-12">
                    <div className="col-4">
                        <img src={logo} className='img-fluid ' alt="" />
                        
                    </div>

                    <button className='btn col-2 ms-auto border-0' onClick={closeOffCanvas}>
                        <i className="bi bi-x-lg fs-3"></i>
                    </button>

                </div>

                <div className="d-lg-none container mt-4">
                    
                    <ul className='list-group bg-white shadow-sm'>
                    <li className='
                        list-group-item border-0 border-bottom
                        p-3
                        '
                        data-bs-toggle="collapse" data-bs-target="#homeMenuHeader"  aria-expanded="false"
                        >

                            {/* HOME */}

                            <Link className='
                            btn
                            link-underline link-underline-opacity-0
                            text-secondary-emphasis
                            
                            border-0
                            ' 
                            >Home <i className="bi bi-caret-down-fill"></i></Link>

                            <div className="collapse navbar-collapse"
                            id="homeMenuHeader"
                            >

                                <ul className='list-group'>
                                    <li className='
                                        list-group-item 
                                        border-0
                                        border-bottom
                                        p-3
                                        '
                                        onClick={() => onClickLinkNavigate('/')}
                                        >
                                        
                                        <Link className='
                                            link-underline link-underline-opacity-0
                                            text-secondary-emphasis
                                            
                                            nav-link-off-canvas
                                        '
                                            
                                        >Home 1</Link>

                                    </li>
                                    <li className='
                                        list-group-item 
                                        border-0
                                        border-bottom
                                        p-3 
                                        '
                                        onClick={() => onClickLinkNavigate('/home2')}
                                        >
                                        
                                        <Link className='
                                            link-underline link-underline-opacity-0
                                            text-secondary-emphasis
                                            
                                            nav-link-off-canvas
                                        '
                                        
                                        >Home 2</Link>

                                    </li>
                                    <li className='
                                        list-group-item 
                                        border-0
                                        p-3
                                        '
                                        onClick={() => onClickLinkNavigate('/home3')}
                                        >
                                        
                                        <Link className='
                                            link-underline link-underline-opacity-0
                                            text-secondary-emphasis
                                            
                                            nav-link-off-canvas
                                        '
                                            
                                        >Home 3</Link>

                                    </li>
                                </ul>

                            </div>
                        </li>


                        {/* SHOP */}

                        <li className='
                        list-group-item border-0 border-bottom
                        p-3
                        '
                        data-bs-toggle="collapse" data-bs-target="#shopMenuHeader"  aria-expanded="false"
                        >
                            <Link className='
                            btn
                            link-underline link-underline-opacity-0
                            text-secondary-emphasis
                            
                            border-0
                            ' 
                            >Shop <i className="bi bi-caret-down-fill"></i></Link>

                            <div className="collapse navbar-collapse"
                            id="shopMenuHeader"
                            >

                                <ul className='list-group'>
                                    <li className='
                                        list-group-item 
                                        border-0
                                        border-bottom
                                        p-3
                                        
                                        '
                                        onClick={() => onClickLinkNavigate('/shop2')}
                                        >
                                        
                                        <Link className='
                                            link-underline link-underline-opacity-0
                                            text-secondary-emphasis
                                            
                                            nav-link-off-canvas
                                        '
                                            
                                        >Shop 2</Link>

                                    </li>
                                    <li className='
                                        list-group-item 
                                        border-0
                                        border-bottom
                                        p-3
                                        
                                        '
                                        onClick={() => onClickLinkNavigate('/shop3')}
                                        >
                                        
                                        <Link className='
                                            link-underline link-underline-opacity-0
                                            text-secondary-emphasis
                                            
                                            nav-link-off-canvas
                                        '
                                            
                                        >Shop 3</Link>

                                    </li>
                                    <li className='
                                        list-group-item 
                                        border-0
                                        p-3
                                        
                                        '
                                        onClick={() => onClickLinkNavigate(`/single-product/${name? name : 'Potato Snacks'}`)}
                                        >
                                        
                                        <Link className='
                                            link-underline link-underline-opacity-0
                                            text-secondary-emphasis
                                            
                                            nav-link-off-canvas
                                        '
                                            
                                        >Single Product</Link>

                                    </li>
                                </ul>

                            </div>
                        </li>

                        
                        {/* ABOUT */}

                        <li className='
                        list-group-item border-0 border-bottom
                        p-3
                        '
                        data-bs-toggle="collapse" data-bs-target="#aboutMenuHeader"  aria-expanded="false"
                        >
                            <Link className='
                            btn
                            link-underline link-underline-opacity-0
                            text-secondary-emphasis
                            
                            border-0
                            ' 
                            >About <i className="bi bi-caret-down-fill"></i></Link>

                            <div className="collapse navbar-collapse"
                            id="aboutMenuHeader"
                            >

                                <ul className='list-group'>
                                    <li className='
                                        list-group-item 
                                        border-0
                                        border-bottom
                                        p-3
                                        
                                        '
                                        onClick={() => onClickLinkNavigate('/faq')}
                                        >
                                        
                                        <Link className='
                                            link-underline link-underline-opacity-0
                                            text-secondary-emphasis
                                            
                                            nav-link-off-canvas
                                        '
                                            
                                        >FAQ</Link>

                                    </li>
                                    <li className='
                                        list-group-item 
                                        border-0
                                        p-3
                                        
                                        '
                                        onClick={() => onClickLinkNavigate('/error')}
                                        >
                                        
                                        <Link className='
                                            link-underline link-underline-opacity-0
                                            text-secondary-emphasis
                                            
                                            nav-link-off-canvas
                                        '
                                            
                                        >Error Page</Link>

                                    </li>
                                    
                                </ul>

                            </div>
                        </li>

                        {/* BLOG */}

                        <li className='
                        list-group-item border-0 border-bottom
                        p-3
                        '
                        data-bs-toggle="collapse" data-bs-target="#blogMenuHeader"  aria-expanded="false"
                        >
                            <Link className='
                            btn
                            link-underline link-underline-opacity-0
                            text-secondary-emphasis
                            
                            border-0
                            ' 
                            >Blog <i className="bi bi-caret-down-fill"></i></Link>

                            <div className="collapse navbar-collapse"
                            id="blogMenuHeader"
                            >

                                <ul className='list-group'>
                                    <li className='
                                        list-group-item 
                                        border-0
                                        p-3
                                        
                                        '
                                        onClick={() => onClickLinkNavigate(`/single-post/${post.tag? post.tag : 'post1'}`)}
                                        >
                                        
                                        <Link className='
                                            link-underline link-underline-opacity-0
                                            text-secondary-emphasis
                                            
                                            nav-link-off-canvas
                                        '
                                            
                                        >Single Post</Link>

                                    </li>
                                    
                                    
                                </ul>

                            </div>
                        </li>

                        {/* CONTACT */}

                        <li className='
                        list-group-item border-0 border-bottom
                        p-3
                        '
                        onClick={() => onClickLinkNavigate('/contact')}
                        >
                            <Link className='
                            btn
                            link-underline link-underline-opacity-0
                            text-secondary-emphasis
                            
                            border-0
                            '
                            
                            >Contact</Link>

                            
                        </li>
                    </ul>

                </div>
                <div className="row my-5">
                    <div className="col-12 card m-0 p-0 border border-0 bg-litle-gray d-flex overflow-hidden" style={{height:'17rem'}}>
                        <img className='col-12 h-100 card-img object-fit-cover border border-0 rounded-5' src={imageHeaderOffCanvas} alt="" />
                        <div className="card-img-overlay col-10 d-flex justify-content-end">
                            <div className="rotate-div p-0 m-0 d-inline mt-n4 me-n4">
                                <p className='text-dark-blue bg-warning px-5'>HOT DALE</p>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-litle-green mt-3 text-white border border-0 rounded-pill py-3 px-4 button-litle-green-hover'><i className="bi bi-headset"></i> &nbsp; Delivery +1-202-345-567</button>
                </div>
            </div>

        </div>
        </div>
       </nav>
    
    </>
    
  )
}
