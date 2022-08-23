import styled from "styled-components";

export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 364px;
    /* height: 167px; */
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    padding: 10px;
    background-color: #FBFBFB;
    margin-bottom: 20px;
    margin-left: 10px;

    h3 {
        margin-bottom: 10px;
    }
`

export const SendTo = styled.p`
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 10px;
    color: #6F6F6F;
`

export const BodyPost = styled.p`
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 23px;
`


// POSTCOMMENTFORM

export const PostFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  margin-bottom: 12px;

  button {
    margin-top: 12px;
    max-width: 365px;
    width: 85vw;
    height: 40px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 12px;
    color: white;
    font-weight: 500;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
`;

export const TitleInput = styled.input`
  background-color: #ededed;
  width: 364px;
  border-radius: 12px;
  border: none;
  margin-bottom: 10px;
  height: 30px;
  padding: 18px;
`;
export const BodyInput = styled.textarea`
  background-color: #ededed;
  width: 364px;
  border-radius: 12px;
  height: 131px;
  border: none;
  padding: 18px;
  resize: unset;
  font-family: sans-serif;
`;