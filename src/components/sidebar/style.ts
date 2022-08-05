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
  //margin: 0; ???? app-sidebar-header h1
`;

export const Notes = styled.div`
  height: calc(100vh - 78px);
  overflow-y: scroll;
`;

export const Note = styled.div`
  padding: 25px;
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
