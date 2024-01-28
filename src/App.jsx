import React, { useState } from "react";
import SideBar from "./components/SideBar.jsx";
import NewProjectInput from "./components/NewProjectInput.jsx";
import NotSelected from "./components/NotSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectManager, setProjectManager] = useState({
    selectedTab: undefined,
    projects: [],
    task: [],
  });

  const handleDellete = () => {
    setProjectManager((prev) => {
      return {
        ...prev,
        selectedTab: null,
        projects: prev.projects.filter((project) => project.id !== prev.selectedTab),
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectManager((prev) => {
      return {
        ...prev,
        selectedTab: id,
      };
    });
  };

  const handleAddNewProjectClick = (newProject) => {
    setProjectManager((prev) => {
      const newProjectData = {
        ...newProject,
        id: Math.random(),
      };

      return {
        ...prev,
        selectedTab: undefined,
        projects: [...prev.projects, newProjectData],
      };
    });
  };

  const handleNewPoject = () => {
    setProjectManager((prev) => {
      return {
        ...prev,
        selectedTab: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectManager((prev) => {
      return {
        ...prev,
        selectedTab: undefined,
      };
    });
  };

  const selectProject = projectManager.projects.find((project) => project.id === projectManager.selectedTab);

  let content = <SelectedProject onDellete={handleDellete} project={selectProject} />;

  if (projectManager.selectedTab === undefined) {
    content = <NotSelected onAdd={handleNewPoject} />;
  } else if (projectManager.selectedTab === null) {
    content = <NewProjectInput cancelProject={handleCancelAddProject} addProject={handleAddNewProjectClick} />;
  }

  // projectManager.selectedTab ? (content = <NotSelected onAdd={handleNewPoject} />) : (content = <NewProjectInput cancelProject={handleCancelAddProject} addProject={handleAddNewProjectClick} />);

  return (
    <>
      <SideBar onSelect={handleSelectProject} projectList={projectManager.projects} onAdd={handleNewPoject} />
      <main className="pt-24 px-5">{content}</main>
    </>
  );
}

export default App;
