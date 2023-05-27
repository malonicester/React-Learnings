import { useState, useRef } from "react";
function Demo() {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);
  const handleAdd = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        name=""
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        placeholder="add todo"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default Demo;
