import { PostCardContainer, SendTo, BodyPost } from './../page/feed/style';

export const PostCommentCard = (props) => {
    
    return (
        <PostCardContainer>
                <SendTo>Enviado por: {props.post.username}</SendTo>
                <h3>{props.post.title}</h3>
                <BodyPost>{props.post.body}</BodyPost>
            </PostCardContainer>
    )
}