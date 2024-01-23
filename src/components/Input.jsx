import { forwardRef } from "react";

const Input = forwardRef(function Input({label, textArea, ...props}, ref){
  const clases = "w-full bg-slate-300 rounded px-2 py-1 text-lg"

  return (
    <>
      <div className="mb-3">
        <label htmlFor={label}>{label}</label>
        {textArea ? <textarea ref={ref} {...props} className={`${clases}`} /> : <input ref={ref} {...props} className={`${clases}`} />}
      </div>
    </>
  );
})

export default Input