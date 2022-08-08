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
import ReactMarkdown from "react-markdown";

interface Props {
  activeNote: any;
  onUpdateNote: any;
}

export default function Main({ activeNote, onUpdateNote }: Props) {
  const onEditField = (key: any, value: any) => {
    onUpdateNote({
      id: activeNote.id,
      //...activeNote,
      title: value,
      body: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <NoActiveNote>No note selected</NoActiveNote>;

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
        <MarkdownPreview>
          <ReactMarkdown>{activeNote.body}</ReactMarkdown>
        </MarkdownPreview>
      </AppNotePreview>
    </AppNote>
  ) : null;
}
