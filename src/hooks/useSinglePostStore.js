import { useDispatch, useSelector } from "react-redux"
import { setPost } from "../store";


export const useSinglePostStore = () => {

    const {post} = useSelector(state => state.singlePost);
    const dispatch = useDispatch();

    const onSetPost = (post) => {
        dispatch(setPost(post));
    }


    return{
        post,
        onSetPost,
    }
}
