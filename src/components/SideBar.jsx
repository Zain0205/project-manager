import { useState } from "react";
import Button from "./Button";

export default function SideBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const showMenu = menuIsOpen ? "-translate-x-72" : "translate-0";

  const handleMenuToggle = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <aside className="flex justify-between items-center bg-zinc-800 text-stone-300 py-3.5 px-5 border-b border-slate-600">
        <h1 className="font-bold text-xl">Project Manager</h1>
        <Button onClick={handleMenuToggle}>Menu</Button>

        <nav className={`bg-zinc-800 absolute bottom-0 left-0 top-0 right-28 flex flex-col gap-y-5 -z-[1] transition-all duration-300 ease-in-out ${showMenu}`}>
          <div className="mt-20 ml-5">
            <h1 className="text-lg font-semibold mb-3">Your Project</h1>
            <Button>+ Add New Project</Button>
          </div>
          <ul className="">
            <li className="px-5 py-2 text-md hover:bg-zinc-600">Task 1</li>
            <li className="px-5 py-2 text-md hover:bg-zinc-600 my-1">Task 2</li>
            <li className="px-5 py-2 text-md hover:bg-zinc-600">Task 3</li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
