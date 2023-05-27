import { useState, useRef } from "react";

function Task() {
  const [task, setTask] = useState("");
  const inputRef = useRef([]);
  const styles = {width:'10px',margin:'10px'}
  const handleAdd = () => {
    inputRef.current[0].focus();
  }
  return (
    <div>
      <input
        ref={(elem) => (inputRef.current[0] = elem)}
        type="text"
        // value={task}
        name=""
        id=""
        // onChange={(e) => setTask(e.target.value)}
        style={styles}
      />
      <input
        ref={(elem) => (inputRef.current[1] = elem)}
        type="text"
        // value={task}
        name=""
        id=""
        // onChange={(e) => setTask(e.target.value)}
        style={styles}
      />
      <input
        ref={(elem) => (inputRef.current[2] = elem)}
        type="text"
        // value={task}
        name=""
        id=""
        // onChange={(e) => setTask(e.target.value)}
        style={styles}
      />
      <input
        ref={(elem) => (inputRef.current[3] = elem)}
        type="text"
        // value={task}
        name=""
        id=""
        // onChange={(e) => setTask(e.target.value)}
        style={styles}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default Task;
