import React, { useEffect } from 'react'
import { Section1SinglePost, Section2SinglePost, Section3SinglePost } from '../../components'
import { useSinglePostStore } from '../../hooks'
import { posts } from '../../data/posts';
import { useNavigate } from 'react-router-dom';

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
    
      <div className="container-fluid bg-litle-gray animate__animated animate__fadeIn">
          {/* SECTION 1 */}
            <Section1SinglePost/>

          {/* SECTION 2 */}
            <Section2SinglePost/>

          {/* SECTION 3 */}
            <Section3SinglePost/>

      </div>
    
    
    </>
  )
}
