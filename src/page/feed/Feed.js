import useRequestData from './../../hooks/useRequestData';
import { baseURL } from './../../constants/url';
import { PostCommentForm } from './PostCommentForm';
import { PostCommentCard } from '../../components/PostCommentCard';

export const Feed = (props) => {

    const [posts, getPosts] = useRequestData([], `${baseURL}/posts`);

    const listPost = posts.map((post) => {
        return (
            <PostCommentCard 
                key={post.id}
                post={post}
                getPosts={getPosts}
            />
        )
    })

    return (
        <div>
            <PostCommentForm
            getPosts={getPosts}
            />
            
            {listPost}
        </div>
    )
}