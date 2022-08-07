import styled from "styled-components";

export const AppNote = styled.div`
  width: 70%;
  height: 100vh;
  margin-right: 25px;
`;

export const AppNoteEdit = styled.div`
  height: 50vh;
  padding: 25px;
`;

export const AppNotePreview = styled.div`
  height: 50vh;
  background: rgba(0, 0, 0, 0.02);
`;

export const NotePreviewTitle = styled.h1`
  padding: 25px 25px 0 25px;
  margin: 0;
`;

export const MarkdownPreview = styled.div`
  padding: 0 25px 25px 25px;
  font-size: 1rem;
  line-height: 2rem;
`;

export const EditTextArea = styled.textarea`
  display: block;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: 100%;
  height: calc(50vh - 130px);
  padding: 10px;
  resize: none;
  font-size: inherit;
  font-family: inherit;
`;

export const EditInputField = styled.input`
  display: block;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  font-size: 2rem;
  padding: 10px;
  resize: none;
  font-family: inherit;
`;
