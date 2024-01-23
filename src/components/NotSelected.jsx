import Button from "./Button.jsx";

export default function NotSelected({onAdd}){
  return (
    <>
      <h1>NO PROJECT SELECTED</h1>
      <Button onClick={onAdd} >Add</Button>
    </>
  )
}