import React, { useEffect } from 'react'
import { Section1SinglePost, Section2SinglePost, Section3SinglePost } from '../../components'
import { useSinglePostStore } from '../../hooks'
import { posts } from '../../data/posts';
import { Link, useNavigate } from 'react-router-dom';

export const SinglePostPage = () => {


  const {post, onSetPost} = useSinglePostStore();
  const navigate = useNavigate();

  

  useEffect(() => {


    const validation = Object.keys(post).every(key => {
      const value = post[key];
      return value.length === 0;
    });
    if(validation){
      onSetPost(posts[0])
      navigate('/single-post/post1')
    }
    const validationLC = JSON.parse(localStorage.getItem('singlePost')) || '';
    if(validationLC != ''){
      onSetPost(validationLC);
      navigate(`/single-post/${validationLC.tag}`)
    }
  }, []);
  

  return (
    <>
    
      <div className="container-fluid p-0 m-0 bg-litle-gray animate__animated animate__fadeIn">
          {/* SECTION 1 */}
              <div className="container-fluid d-flex align-items-center p-0 py-3 m-0 bg-middle-gray">
                <div className="container">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>Home</Link></li>
                      <li className="breadcrumb-item"><Link className='text-dark text-decoration-none fw-sans' to='/'>{post.tag === 'post3'? 'Recipes & Life Hack' : 'All Categories'}</Link></li>
                      <li className="breadcrumb-item active fw-sans" aria-current="page">{post.title}</li>
                    </ol>
                  </nav>
                </div>
              </div>
            <Section1SinglePost/>

          {/* SECTION 2 */}
            <Section2SinglePost/>

          {/* SECTION 3 */}
            <Section3SinglePost/>

      </div>
    
    
    </>
  )
}
