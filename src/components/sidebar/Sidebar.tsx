import {
  AppSidebar,
  Header,
  Note,
  NoteMeta,
  Notes,
  SideBarNoteTitle,
  AddButton,
  DeleteButton,
  Title,
} from "./style";

const Sidebar = () => {
  return (
    <AppSidebar>
      <Header>
        <Title>Notes</Title>
        <AddButton>Add</AddButton>
      </Header>
      <Notes>
        <Note>
          <SideBarNoteTitle>
            <strong>Title</strong>
            <DeleteButton>Delete</DeleteButton>
          </SideBarNoteTitle>
          <p>Note preview</p>
          <NoteMeta>Last Modified [data]</NoteMeta>
        </Note>
      </Notes>
    </AppSidebar>
  );
};

export default Sidebar;
