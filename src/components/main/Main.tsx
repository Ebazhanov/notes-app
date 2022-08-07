import {
  AppNote,
  AppNoteEdit,
  AppNotePreview,
  EditInputField,
  EditTextArea,
  MarkdownPreview,
  NotePreviewTitle,
} from "./style";

interface Props {
  activeNote: any;
}

export default function Main({ activeNote }: Props) {
  //console.log("activeNote.title", activeNote.title);
  return (
    <AppNote>
      <AppNoteEdit>
        <EditInputField
          type="text"
          id="title"
          /*value={activeNote.title}*/
          autoFocus
        />
        <EditTextArea
          id="body"
          placeholder="Write your note here..."
          /*value={activeNote.body}*/
        />
      </AppNoteEdit>
      <AppNotePreview>
        <NotePreviewTitle>Title</NotePreviewTitle>
        <MarkdownPreview>Body</MarkdownPreview>
      </AppNotePreview>
    </AppNote>
  );
}
