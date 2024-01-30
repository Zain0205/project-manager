import Button from "./Button.jsx";

export default function NotSelected({ onAdd }) {
  return (
    <>
      <div className="text-center lg:text-left">
        <h1 className="font-bold text-xl mb-3">NO PROJECT SELECTED</h1>
        <button onClick={onAdd} className="bg-stone-900 text-slate-100 px-10 py-2 rounded-full">Add</button>
      </div>
    </>
  );
}
