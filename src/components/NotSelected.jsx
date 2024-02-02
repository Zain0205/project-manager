import { useContext } from "react";
import { StateContext } from "../store/context";

export default function NotSelected() {
  const { addNewProjectTab } = useContext(StateContext);

  return (
    <>
      <div className="text-center lg:text-left">
        <h1 className="font-bold text-xl mb-3">NO PROJECT SELECTED</h1>
        <button onClick={addNewProjectTab} className="bg-stone-900 text-slate-100 px-10 py-2 rounded-full">
          Add
        </button>
      </div>
    </>
  );
}
