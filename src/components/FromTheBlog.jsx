import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { posts } from '../data/posts';
import { useSinglePostStore } from '../hooks';

export const FromTheBlog = () => {
    const [newPosts, setNewPosts] = useState([]);
    const {onSetPost} = useSinglePostStore();
    const navigate = useNavigate();

    useEffect(() => {
        const tempPosts = posts.slice(0, 3);
        setNewPosts(tempPosts)
    }, []);

    const onNavigatePost = (postTag) => {
        const postFind = posts.find(post => post.tag === postTag);
        onSetPost(postFind);
        localStorage.setItem('singlePost', JSON.stringify(postFind));
        navigate(`/single-post/${postTag}`);

    };


    
  return (
    <>
    
        <div className="container-fluid p-0 py-5 bg-white">
            <h1 className='text-center mb-2'>From the blog</h1>
            <div className="row d-flex justify-content-center">
                {
                    newPosts.map((post, index) => (
                            <div key={index} className='p-3 col-12 col-md-12 col-lg-4'>
                                <div className="col-12 d-flex flex-column align-items-md-center">
                                    <img onClick={() => onNavigatePost(post.tag)} role='button' className='w-100 border-0 rounded-4' src={post.bannerPost} alt="" />
                                    <div className="col-12 d-flex flex-column gap-2 my-3">
                                    <h5 onClick={() => onNavigatePost(post.tag)} role='button' className=''>{post.title}</h5>

                                    <small className='text-secondary'>{post.date} | {post.comments.length != 0? `${post.comments.length + post.comments.reduce((acc, comment) => acc + comment.replies.length, 0)} Comments` : 'No Comments'}</small>

                                    <p className='fw-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod ante, eu vestibulum</p>
                                    <Link className='text-black text-decoration-none '>Read More <i className="bi bi-caret-right-fill me-n1" style={{fontSize:'.8rem'}}></i><i className="bi bi-caret-right-fill" style={{fontSize:'.8rem'}}></i></Link>
                                    </div>
                                </div>
                            </div>
                        
                            
                        
                    ))
                }
           </div>  
        </div>
    
    </>
  )
}
