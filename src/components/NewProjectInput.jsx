import Input from "./Input.jsx";
import {useRef} from "react";

export default function NewProjectInput() {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSaveClick = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation
  }

  return (
    <>
      <div className="">
        <div className="text-right mb-2">
          <button className="bg-slate-400 px-3 py-1 rounded-md">Cancel</button>
          <button className="bg-stone-900 px-3 py-1 rounded-md text-white ml-2">Save</button>
        </div>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input ref={dueDate} label="Date" />
        </div>
      </div>
    </>
  );
}