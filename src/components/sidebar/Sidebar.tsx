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
  notes: string[];
  activeNote: boolean;
  setActiveNote: any;
  onAddNote: any;
  onDeleteNote: (id: string) => void;
}

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}: Props) => {
  const sortedNotes = notes.sort(
    (a: any, b: any) => b.lastModified - a.lastModified
  );

  return (
    <AppSidebar>
      <Header>
        <Title>Notes</Title>
        <AddButton onClick={onAddNote}>Add</AddButton>
      </Header>
      <Notes>
        <>
          {sortedNotes.map((note: any) => (
            <Note
              className={note.id === activeNote ? "active" : "notActive"}
              onClick={() => setActiveNote(note.id)}
            >
              <SideBarNoteTitle>
                <strong>{note.title}</strong>
                <DeleteButton onClick={() => onDeleteNote(note.id)}>
                  Delete
                </DeleteButton>
              </SideBarNoteTitle>
              <NoteBody>
                {note.body && note.body.substring(0, 20) + "..."}
              </NoteBody>
              <NoteMeta
                className={note.id === activeNote ? "active" : "notActive"}
              >
                Last modified{" "}
                {new Date(note.lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </NoteMeta>
            </Note>
          ))}
        </>
      </Notes>
    </AppSidebar>
  );
};

export default Sidebar;
