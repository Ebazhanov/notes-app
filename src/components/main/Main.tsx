import {
  AppNote,
  AppNoteEdit,
  AppNotePreview,
  EditInputField,
  EditTextArea,
  MarkdownPreview,
  NoActiveNote,
  NotePreviewTitle,
} from "./style";

interface Props {
  activeNote: any;
  onUpdateNote: any;
}

export default function Main({ activeNote, onUpdateNote }: Props) {
  const onEditField = (key: any, value: any) => {
    onUpdateNote({
      id: activeNote.id,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <NoActiveNote>No Active Note</NoActiveNote>;

  return activeNote ? (
    <AppNote>
      <AppNoteEdit>
        <EditInputField
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(event) => onEditField("title", event.target.value)}
          autoFocus
        />

        <EditTextArea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(event) => onEditField("title", event.target.value)}
        />
      </AppNoteEdit>
      <AppNotePreview>
        <NotePreviewTitle>{activeNote.title}</NotePreviewTitle>
        <MarkdownPreview>{activeNote.body}</MarkdownPreview>
      </AppNotePreview>
    </AppNote>
  ) : null;
}
