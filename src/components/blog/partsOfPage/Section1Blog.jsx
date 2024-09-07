import React from 'react';
import {SideBarBlog} from '../../../components'
import { posts } from '../../../data/posts';
import { Link, useNavigate } from 'react-router-dom';
import { useSinglePostStore } from '../../../hooks';

export const Section1Blog = () => {

    const {onSetPost} = useSinglePostStore();
    const navigate = useNavigate();

    const onNavigatePost = (postTag) => {
        const postFind = posts.find(post => post.tag === postTag);
        onSetPost(postFind);
        localStorage.setItem('singlePost', JSON.stringify(postFind));
        navigate(`/single-post/${postTag}`);

    };
  return (
    <>
    
        <div className="container-fluid container-lg pt-5">
            <div className="row">
                <SideBarBlog/>

                <div className="col-12 col-md-7 col-lg-8">
                    <div className="container-fluid p-0 pb-5">
                        <div className="row d-flex justify-content-center">
                            {
                                posts.map((post, index) => (
                                    <div key={index} className='p-3 col-12'>
                                        <div className="col-12 d-flex flex-column align-items-md-center">
                                            <img onClick={() => onNavigatePost(post.tag)} role='button' className='w-100 border-0 rounded-4' src={post.bannerPost} alt="" />
                                            <div className="col-12 d-flex flex-column gap-2 my-3">
                                                <h5 onClick={() => onNavigatePost(post.tag)} role='button' className=''>{post.title}</h5>
                                                <small className='text-secondary'>{post.date} | {post.comments.length === 0? 'No Comments' : `${post.comments.length + post.comments.reduce((acc, coment) => acc + coment.replies.length, 0)} Comments`}</small>
                                                <p className='fw-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras at fringilla</p>
                                                <Link className='text-black text-decoration-none'>Read More <i className="bi bi-caret-right-fill me-n1" style={{fontSize:'.8rem'}}></i><i className="bi bi-caret-right-fill" style={{fontSize:'.8rem'}}></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end pb-5">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item active mx-2"><a className="page-link border rounded-2" href="#">1</a></li>
                                <li className="page-item mx-2"><a className="page-link border rounded-2" href="#">2</a></li>
                                <li className="page-item mx-2"><a className="page-link border rounded-2" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>



                </div>
            </div>
        </div>
    
    
    </>
  )
}
