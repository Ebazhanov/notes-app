import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import GlobalStyle from "./theme/globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
