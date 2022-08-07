import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { v4 as uuid } from "uuid";
import GlobalStyle from "./theme/globalStyles";

function App() {
  const [notes, setNotes] = useState<any[]>([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete: string) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    //console.log({ notes });
    return notes.find((note) => note.id !== activeNote);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
