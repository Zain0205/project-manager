import { createContext, useState } from "react";
import NewProjectInput from "../components/NewProjectInput.jsx";
import NotSelected from "../components/NotSelected.jsx";
import SelectedProject from "../components/SelectedProject.jsx";

export const StateContext = createContext({
  projects: [],
  task: [],
  projectThatSelected: {},
  delleteProject: () => {},
  selectingProject: () => {},
  addNewProject: () => {},
  cancelAdd: () => {},
  addNewProjectTab: () => {},
});

export default function ContextProvider({ children }) {
  const [projectManager, setProjectManager] = useState({
    selectedTab: undefined,
    projects: [],
    task: [],
  });

  const handleDellete = () => {
    setProjectManager((prev) => {
      return {
        ...prev,
        selectedTab: undefined,
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

  let content = <SelectedProject />;

  if (projectManager.selectedTab === undefined) {
    content = <NotSelected />;
  } else if (projectManager.selectedTab === null) {
    content = <NewProjectInput />;
  }

  // projectManager.selectedTab ? (content = <NotSelected onAdd={handleNewPoject} />) : (content = <NewProjectInput cancelProject={handleCancelAddProject} addProject={handleAddNewProjectClick} />);

  const ctxValue = {
    projects: projectManager.projects,
    task: projectManager.task,
    projectThatSelected: selectProject,
    delleteProject: handleDellete,
    selectingProject: handleSelectProject,
    addNewProject: handleAddNewProjectClick,
    cancelAdd: handleCancelAddProject,
    addNewProjectTab: handleNewPoject,
  };

  return (
    <StateContext.Provider value={ctxValue}>
      {children}
      <main className="pt-24 px-5 md:pl-[21rem]">{content}</main>
    </StateContext.Provider>
  );
}
