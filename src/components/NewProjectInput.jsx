import Input from "./Input.jsx";
import {useRef} from "react";

export default function NewProjectInput({addProject}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSaveClick = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){

    }

    addProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <>
      <div className="">
        <div className="text-right mb-2">
          <button className="bg-slate-400 px-3 py-1 rounded-md">Cancel</button>
          <button onClick={handleSaveClick} className="bg-stone-900 px-3 py-1 rounded-md text-white ml-2">Save</button>
        </div>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input type="date" ref={dueDate} label="Date" />
        </div>
      </div>
    </>
  );
}