import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { v4 as uuid } from "uuid";
import GlobalStyle from "./theme/globalStyles";

function App() {
  const [notes, setNotes] = useState<any[]>([]);

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

  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
      />
      <Main />
    </div>
  );
}

export default App;
