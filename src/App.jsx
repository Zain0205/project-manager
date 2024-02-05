import React, { useContext } from "react";
import SideBar from "./components/SideBar.jsx";
import ContextProvider from "./store/context.jsx";

function App() {
  return (
    <ContextProvider>
      <SideBar />
    </ContextProvider>
  );
}

export default App;
