import { AppSidebar, Header, Note, Notes, SideBarNoteTitle } from "./style";

const Sidebar = () => {
  return (
    <AppSidebar>
      <Header>
        <h1>Sidebar</h1>
        <button>Add</button>
      </Header>
      <Notes>
        <Note>
          <SideBarNoteTitle>
            <strong>Title</strong>
            <button>Delete</button>
          </SideBarNoteTitle>
          <p>Note preview</p>
        </Note>
      </Notes>
    </AppSidebar>
  );
};

export default Sidebar;
