import styled from "styled-components";

export const AppSidebar = styled.div`
  width: 30%;
  height: 100vh;
  border-right: 1px solid #ddd;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  margin: 0;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Notes = styled.div`
  height: calc(100vh - 78px);
  overflow-y: scroll;
`;

export const Note = styled.div`
  padding: 20px;
  cursor: pointer;
`;

export const SideBarNoteTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NoteMeta = styled.small`
  display: block;
  color: #999;
`;

export const AddButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  color: #08c;
  cursor: pointer;
  :hover {
    color: #04c;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  color: crimson;
  cursor: pointer;
  :hover {
    color: #04c;
  }
`;

export const NoteBody = styled.p`
  margin: 10px 0;
`;
