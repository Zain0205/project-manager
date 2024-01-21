import React from "react";

function Button({ children, ...props }) {
  return (
    <>
      <button {...props} className="bg-zinc-600 px-4 py-1 text-lg rounded-md hover:bg-zinc-500">{children}</button>
    </>
  );
}

export default Button;
