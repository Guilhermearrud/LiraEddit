import useRequestData from './../../hooks/useRequestData';
import { baseURL } from './../../constants/url';
import { PostCardContainer, SendTo, BodyPost } from './style';
import { PostCommentForm } from './PostCommentForm';

export const Feed = () => {

    const [posts] = useRequestData([], `${baseURL}/posts`);

    const listPost = posts.map((post) => {
        return (
            <PostCardContainer>
                <SendTo>Enviado por: {post.username}</SendTo>
                <h3>{post.title}</h3>
                <BodyPost>{post.body}</BodyPost>
            </PostCardContainer>
        )
    })


    return (
        <div>
            <PostCommentForm/>
            {listPost}
        </div>
    )
}