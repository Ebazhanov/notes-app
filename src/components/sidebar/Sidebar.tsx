import {
  AddButton,
  AppSidebar,
  DeleteButton,
  Header,
  Note,
  NoteBody,
  NoteMeta,
  Notes,
  SideBarNoteTitle,
  Title,
} from "./style";

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
            <>
              <SideBarNoteTitle>
                <strong>{note.title}</strong>
                <DeleteButton>Delete</DeleteButton>
              </SideBarNoteTitle>
              <NoteBody>
                {note.body && note.body.substring(0, 100) + "..."}
              </NoteBody>
              <NoteMeta>
                Last modified{" "}
                {new Date(note.lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </NoteMeta>
            </>
          ))}
        </Note>
      </Notes>
    </AppSidebar>
  );
};

export default Sidebar;
