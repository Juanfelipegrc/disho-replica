import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSinglePostStore } from '../../../hooks';
import { SideBarBlog } from '../../SideBarBlog';
import { image2ListHome2 } from '../../../assets';
import { posts } from '../../../data/posts';
export const Section1SinglePost = () => {

    const {post, onSetPost} = useSinglePostStore();
    const [animateCss, setAnimateCss] = useState('animate__animated animate__fadeIn')

    const navigate = useNavigate();

    const onNavigatePost = (postTag) => {
        const postFind = posts.find(post => post.tag === postTag);
        onSetPost(postFind);
        localStorage.setItem('singlePost', JSON.stringify(postFind));
        navigate(`/single-post/${postTag}`);

    };

    const validationNavigatePreviousOrNext = (post) => {
        switch (post.tag) {
            case posts[0].tag:
                
                return {
                    postPrevious: posts[1],
                    postNext: ''
                };
            
            case posts[1].tag:
                
                return {
                    postPrevious: posts[2],
                    postNext: posts[0]
                };

            case posts[2].tag:
            
            return {
                postPrevious: '',
                postNext: posts[1],
            };
        
            default:
                return{
                    postPrevious: '',
                    postNext: '',
                };
        }
    }

    const {postNext, postPrevious} = validationNavigatePreviousOrNext(post);






    useEffect(() => {

        setAnimateCss('');

        setTimeout(() => {
            setAnimateCss('animate__animated animate__fadeIn')
        }, 30);
      
    }, [post]);

    const onNavigateBlogAllPosts = () => {
        navigate('/blog')
    }
    

  
    

  return (
    <>
    
        <div className="container-fluid container-lg pt-5">
            <div className="row d-flex flex-column-reverse flex-md-row flex-lg-row">
                

                {/* SIDE BAR */}
                <SideBarBlog/>

                <div className={`col-12 col-md-7 col-lg-8 ${animateCss} ${animateCss === ''? 'd-none' : 'd-block'}`}>
                    <div className="row d-flex flex-column gap-3">
                        <div className="col-12">
                            <h1 style={{fontSize: '3.4rem'}}>{post.title}</h1>
                            <div>
                                <Link className='border-end fw-sans text-dark text-decoration-none border-dark px-3'><i className="bi bi-person"></i> &nbsp; {post.author}</Link>
                                <Link className='border-end fw-sans text-dark text-decoration-none border-dark px-3'><i className="bi bi-calendar"></i> &nbsp; {post.date}</Link>
                                <Link className='border-end fw-sans text-dark text-decoration-none border-dark px-3'><i className="bi bi-clock"></i> &nbsp; {post.hour}</Link>
                                <Link className='fw-sans text-dark text-decoration-none px-3'><i className="bi bi-chat"></i> &nbsp;{post.comments.length === 0?'No Comments' : `${post.comments.length + post.comments.reduce((acc, comment) => acc + comment.replies.length, 0)} Comments`}</Link>
                            </div>
                            <div className="col-12 p-0 m-0 d-flex justify-content-center">
                                <img className='col-12 object-fit-cover border border-0 rounded-4' src={post.bannerPost} alt="" />
                            </div>
                        </div>
                        {
                            post.sectionsPost.map((section, index) => (
                                <div key={index} className="col-12">
                                    <div dangerouslySetInnerHTML={{__html: post.sectionsPost[index]? post.sectionsPost[index].text : ''}}>

                                    </div>
                                    
                                </div>
                            ))
                        }
                        
                    </div>
                    <div className="col-12 py-5">
                        <div className="col-12 d-flex justify-content-center border border-0 rounded-5 bg-white py-5 shadow">
                            <div className="row col-12">
                                <div className="col-5 col-md-4 col-lg-3 d-flex justify-content-center">
                                    <div className="border border-0 rounded-circle position-relative overflow-hidden d-flex justify-content-center align-items-center" style={{height:'7rem', width:'7rem'}}>
                                        <div className="position-absolute col-12 d-flex justify-content-center align-items-center">
                                            <img className='col-12 h-100 object-fit-cover' src={image2ListHome2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-7 col-md-8 col-lg-9">
                                    <div className="col-12">
                                        <h4>John Doe</h4>
                                        <p className='text-dark-blue fw-sans'>Placerat orci nulla pellentesque dignissim enim sit amet. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Mi quis hendrerit dolor magna. Morbi enim nunc faucibus a pellentesque</p>
                                        <button onClick={onNavigateBlogAllPosts} className='btn btn-outline-litle-green border border-dark-blue rounded-pill text-dark-blue link-light button-outline-litle-green-hover px-4 py-2' ><p className='m-0'>All Post</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 border-dark-blue border-top border-bottom py-0 py-md-1 py-lg-2 mb-4">
                        <div className="row ">

                            <div className="col-6 border-end border-dark-blue">
                                <div role='button' className={`row ${postPrevious === ''? 'd-none' : ''}`} onClick={() => onNavigatePost(postPrevious != '' ? postPrevious.tag : '')}>
                                    <div className="col-1 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-arrow-left text-secondary"></i>
                                    </div>
                                    <div className="col-10 col-lg-11">
                                        <p className='text-dark-blue fw-sans m-0'>PREVIOUS</p>
                                        <p className='text-dark-blue d-none d-md-none d-lg-block'>
                                            {postPrevious != '' ? postPrevious.title.length > 46?`${postPrevious.title.substring(0, 46)}...` : postPrevious.title: ''}
                                        </p>
                                        <p className='text-dark-blue d-none d-md-block d-lg-none font-small-1'>
                                            {postPrevious != '' ? postPrevious.title.length > 24?`${postPrevious.title.substring(0, 24)}...` : postPrevious.title: ''}
                                        </p>
                                        <p className='text-dark-blue d-block d-md-none d-lg-none font-small-1'>
                                            {postPrevious != '' ? postPrevious.title.length > 17?`${postPrevious.title.substring(0, 17)}...` : postPrevious.title: ''}
                                        </p>
                                    </div>
                                </div>
                               
                            </div>


                            <div className="col-6">
                                <div role='button' onClick={() => onNavigatePost(postNext != '' ? postNext.tag : '')}  className={`row ${postNext === ''? 'd-none' : ''}`}>
                                    <div className="col-10 col-lg-11">
                                        <p className='fw-sans text-dark-blue m-0 text-end'>NEXT</p>
                                        <p className='text-end text-dark-blue d-none d-md-none d-lg-block'>
                                            {postNext != '' ? postNext.title.length > 46?`${postNext.title.substring(0, 46)}...` : postNext.title : ''}
                                        </p>
                                        <p className='text-end text-dark-blue d-none d-md-block d-lg-none font-small-1'>
                                            {postNext != '' ? postNext.title.length > 24?`${postNext.title.substring(0, 24)}...` : postNext.title: ''}
                                        </p>
                                        <p className='text-end text-dark-blue d-block d-md-none d-lg-none font-small-1'>
                                            {postNext != '' ? postNext.title.length > 17?`${postNext.title.substring(0, 17)}...` : postNext.title: ''}
                                        </p>
                                    </div>
                                    <div className="col-1 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-arrow-right text-secondary"></i>
                                    </div>
                                    
                                </div>  
                            </div>



                        </div>
                    </div>


                    <div className={`col-12 py-5 ${post.comments.length === 0? 'd-none' : ''}`}>
                        <h1>{post.comments.length + post.comments.reduce((acc, comment) => acc + comment.replies.length, 0)} Responses</h1>

                        <div className="col-12">
                            {
                                post.comments.map((comment, index) => (
                                    <React.Fragment key={index}>
                                    
                                        <div key={index} className="row py-3 border-bottom border-dark-blue">
                                            <div className="col-2 col-md-2 col-lg-1 p-0 d-flex justify-content-center">
                                                <img className=' border border-0 rounded-circle' src={comment.profilePhoto} alt="" style={{height:'2rem', width:'2rem'}}/>
                                            </div>
                                            <div className="col-9 col-md-10 col-lg-11">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className='m-0'>{comment.author} <span className='fw-sans'>says:</span> </p>
                                                    </div>
                                                    <div className="col-6 d-flex justify-content-end">
                                                        <small><p className='fw-sans'>{comment.date} at {comment.hour}</p></small>
                                                    </div>
                                                </div>
                                                <p className='fw-sans text-dark-blue'>{comment.body}</p>
                                                <Link className='fw-sans text-dark text-decoration-none font-small-1'>Reply</Link>
                                            </div>
                                        </div>

                                        {
                                            comment.replies?
                                            comment.replies.map((reply, replyIndex) => (
                                                <div key={replyIndex} className="row ms-4 py-3 border-bottom border-dark-blue">
                                                    <div className="col-3 col-md-2 col-lg-1 p-0 d-flex justify-content-center">
                                                        <i className="bi bi-arrow-return-right "></i> &nbsp;
                                                        <img className=' border border-0 rounded-circle' src={reply.profilePhoto} alt="" style={{height:'2rem', width:'2rem'}}/>
                                                    </div>
                                                    <div className="col-9 col-md-10 col-lg-11">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p className='m-0'>{reply.author} <span className='fw-sans'>says:</span> </p>
                                                            </div>
                                                            <div className="col-6 d-flex justify-content-end">
                                                                <small><p className='fw-sans'>{reply.date} at {reply.hour}</p></small>
                                                            </div>
                                                        </div>
                                                        <p className='fw-sans text-dark-blue'>{reply.body}</p>
                                                        <Link className='fw-sans text-dark text-decoration-none font-small-1'>Reply</Link>
                                                    </div>
                                                </div>
                                            ))

                                            : <></>
                                        }
                                        
                                    
                                    </React.Fragment>
                                    
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="col-12 pb-5">
                        <h1>Leave a Reply</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-sans text-secondary">Comment*</label>
                            <textarea className="form-control border border-0 rounded-5" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-sans text-secondary">Name*</label>
                            <input type="text" className="form-control border border-0 rounded-5" id="exampleFormControlInput1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-sans text-secondary">Email*</label>
                            <input type="email" className="form-control border border-0 rounded-5" id="exampleFormControlInput1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-sans text-secondary">Website*</label>
                            <input type="text" className="form-control border border-0 rounded-5" id="exampleFormControlInput1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label fw-sans text-secondary" htmlFor="exampleCheck1">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button className='btn btn-litle-green px-4 py-3 border border-0 rounded-pill button-litle-green-hover'><span className='text-white'>Post Comment</span></button>
                    </div>

                </div>
            </div>
        </div>
    
    </>
  )
}
