import {forwardRef, useImperativeHandle, useRef} from "react";

const Modal = forwardRef(function Modal({children}, ref){
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open(){
        dialog.current.showModal()
      }
    }
  })

  return (
    <>
      <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-full md:w-1/2" ref={dialog}>
        {children}
      </dialog>
    </>
  )
})

export default Modal;