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

  const handleAddNewProjectClick = (newProject) => {
    setProjectManager((prev) => {
      const newProjectData = {
        ...newProject,
        id: Math.random()
      }

      return {
        ...prev,
        selectedTab: true,
        projects: [...prev.projects, newProjectData]
      }
    })
  }

  const handleNewPoject = () => {
    setProjectManager((prev) => {
      return {
        ...prev,
        selectedTab: false
      }
    })
  }

  return (
    <>
      <SideBar projectList={projectManager.projects} onAdd={handleNewPoject}/>
      <main className="pt-24 px-5">
        {projectManager.selectedTab ? <NotSelected onAdd={handleNewPoject}/> :
          <NewProjectInput addProject={handleAddNewProjectClick}/>}
      </main>
    </>
  )
}

export default App