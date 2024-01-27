import React from "react";

function SelectedProject({ project }) {
  const formatedDate = new Date(project.dueDate).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <header className="border-b-2 border-black">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">{project.title}</h1>
          <button className="bg-stone-800 text-slate-100 px-3 py-1 rounded-xl">Dellete</button>
        </div>
        <p className="my-1 font-semibold text-base">{formatedDate}</p>
        <p className="text-lg font-semibold whitespace-pre-wrap">{project.description}</p>
      </header>
      TASK
    </div>
  );
}

export default SelectedProject;
