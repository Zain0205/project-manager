import React, {useState} from 'react'
import SideBar from "./components/SideBar.jsx";
import Card from './components/Card.jsx';
import NewProjectInput from "./components/NewProjectInput.jsx";
import NotSelected from "./components/NotSelected.jsx";

function App() {
  const [projectManager, setProjectManager] = useState({
    selectedTab: true,
    projects: [],
    task: []
  })

  const handleAddPoject = () => {
    setProjectManager((prev) => {
      return {
        ...prev,
        selectedTab: false
      }
    })
  }
  
  return (
    <>
      <SideBar onAdd={handleAddPoject} />
      <main className="pt-24 px-5">
        {projectManager.selectedTab ? <NotSelected onAdd={handleAddPoject} /> : <NewProjectInput />}
      </main>
    </>
  )
}

export default App