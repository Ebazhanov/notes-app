import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import GlobalStyle from "./theme/globalStyles";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("add");
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Main />
    </div>
  );
}

export default App;
