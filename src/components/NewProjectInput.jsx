import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Modal.jsx";

export default function NewProjectInput({addProject, cancelProject}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef()

  const handleSaveClick = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
      modal.current.open();
      return;
    }

    addProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="font-bold text-xl mb-1 uppercase">Invalid Input...</h2>
        <p>Please complete the input</p>
        <form className="text-right" method="dialog">
          <button className="mt-3 bg-stone-800 px-2 py-1 rounded-md text-slate-100">Close</button>
        </form>
      </Modal>
      <div className="lg:w-[70%] lg:mx-auto">
        <div className="text-right mb-2">
          <button onClick={cancelProject} className="bg-slate-400 px-3 py-1 rounded-md">Cancel</button>
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