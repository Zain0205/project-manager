import { useContext } from "react";
import { StateContext } from "../store/context";

function SelectedProject() {
  const { projectThatSelected, delleteProject } = useContext(StateContext);
  
  const formatedDate = new Date(projectThatSelected.dueDate).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <header className="border-b-2 border-black">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">{projectThatSelected.title}</h1>
          <button onClick={delleteProject} className="bg-stone-800 text-slate-100 px-3 py-1 rounded-xl">
            Dellete
          </button>
        </div>
        <p className="my-1 font-semibold text-base">{formatedDate}</p>
        <p className="text-lg font-semibold whitespace-pre-wrap">{projectThatSelected.description}</p>
      </header>
      TASK
    </div>
  );
}

export default SelectedProject;
