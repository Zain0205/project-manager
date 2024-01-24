import { useState } from "react";
import Button from "./Button";

export default function SideBar({onAdd, projectList}) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const showMenu = !menuIsOpen ? "-translate-x-96 md:translate-x-0" : "translate-x-0";

  const handleMenuToggle = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <aside className="flex justify-between items-center bg-zinc-800 text-stone-300 py-3.5 px-5 border-b border-slate-600 fixed w-full md:w-80 md:py-0">
        {/*<h1 className="font-bold text-xl">Project Manager</h1>*/}
        {/*<Button onClick={handleMenuToggle}>Menu</Button>*/}
        <div className="uppercase flex items-center gap-x-3.5 md:hidden">
          {/* <div className="h-12 w-12 bg-white rounded-full"></div> */}
          <h1 className="text-xl font-bold text-primary">Project Manager</h1>
        </div>
        <button className="md:hidden" onClick={handleMenuToggle}>
          <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out origin-top-left"></span>
          <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out"></span>
          <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out origin-bottom-left"></span>
        </button>

        <nav className={`bg-zinc-800 absolute bottom-0 left-0 top-0 w-80 flex flex-col gap-y-5 transition-all duration-300 ease-in-out h-screen ${showMenu}`}>
          <div className="mt-3.5 ml-5">
            <h1 className="text-xl font-semibold mb-5 mt-1">Your Project</h1>
            <Button onClick={onAdd}>+ Add New Project</Button>
          </div>
          <ul className="">
            {projectList.map(project =>  <li className="px-5 py-2 text-md hover:bg-zinc-600">{project.title}</li>)}
          </ul>
        </nav>
      </aside>
    </>
  );
}
