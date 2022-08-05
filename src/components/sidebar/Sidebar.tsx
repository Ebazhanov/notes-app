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
import { ReactNode } from "react";

interface Props {
  notes: any;
  onAddNote: any;
}

const Sidebar = ({ notes, onAddNote }: Props) => {
  return (
    <AppSidebar>
      <Header>
        <Title>Notes</Title>
        <AddButton onClick={onAddNote}>Add</AddButton>
      </Header>
      <Notes>
        <Note>
          {notes.map((note: any) => (
            <SideBarNoteTitle>
              <strong>Title</strong>
              <DeleteButton>Delete</DeleteButton>
            </SideBarNoteTitle>
          ))}
          <p>Note preview</p>
          <NoteMeta>Last Modified [data]</NoteMeta>
        </Note>
      </Notes>
    </AppSidebar>
  );
};

export default Sidebar;
