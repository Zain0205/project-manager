import { useContext, useState} from "react";
import { StateContext } from "../store/context";

function Task() {
  const [taskList, setTaskList] = useState("");
  const { task, addTask, delleteTask } = useContext(StateContext);

  const handleChange = (e) => {
    const newTask = e.target.value;

    setTaskList(newTask);
  };
  
  return (
    <>
      <div className="mt-5">
        <div className="flex justify-between">
          <input value={taskList} onChange={handleChange} className="bg-slate-300 px-3 w-full rounded-lg mr-5 py-2" placeholder="Add Task" type="text" />
          <button onClick={() => addTask(taskList, setTaskList)} className="bg-stone-800 w-1/3 text-slate-100 px-4 py-2 rounded-full">
            Add
          </button>
        </div>
        <ul className="mt-4">
          {task.map((tsk, i) => (
            <li key={i} className="mt-4">
              <div className="flex justify-between">
                <p className="w-full text-xl font-semibold mr-5">{tsk}</p>
                <button onClick={() => delleteTask(tsk)} className="bg-stone-800 w-1/3 text-slate-100 px-4 py-2 rounded-full">
                  Dellete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Task;
