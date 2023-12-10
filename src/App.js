import { useState } from "react";

export default function App() {
  return (
    <> 
      <div className="board-row"> 
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row"> 
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row"> 
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {

  const [value,setValue] = useState(null);

  function onClick() {
    setValue('X');
  }
  return (<button className="square" onClick={onClick}>{value}</button>);
}