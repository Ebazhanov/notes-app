import {
  AppNote,
  AppNoteEdit,
  AppNotePreview,
  EditInputField,
  EditTextArea,
  MarkdownPreview,
  NotePreviewTitle,
} from "./style";

export default function Main() {
  return (
    <AppNote>
      <AppNoteEdit>
        <EditInputField type="text" id="title" autoFocus />
        <EditTextArea id="body" placeholder="Write your note here..." />
      </AppNoteEdit>
      <AppNotePreview>
        <NotePreviewTitle>TITLE</NotePreviewTitle>
        <MarkdownPreview>note preview</MarkdownPreview>
      </AppNotePreview>
    </AppNote>
  );
}
