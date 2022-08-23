import { BodyInput, PostFormContainer, TitleInput } from "./style"
import { useForm } from './../../hooks/useForm';
import { createPost } from "../../services/postServices";

export const PostCommentForm = (props) => {

    const { form, onChange, clear } = useForm({
        title: "",
        body: ""
    })

    const onSubmitPost = (event) => {
        event.preventDefault()
        createPost(form, props.getPosts)
    }

    return (
        <PostFormContainer onSubmit={onSubmitPost}>
            <TitleInput
                placeholder="Título do post"
                name="title"
                value={form.title}
                onChange={onChange}
                type={"text"}
                required
            />
            <BodyInput
                placeholder="Escreva seu post..."
                name="body"
                value={form.body}
                onChange={onChange}
                type={"text"}
                required
            />

            <button>
                Postar
            </button>
        </PostFormContainer>
    )
}