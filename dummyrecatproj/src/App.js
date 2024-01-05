import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [Title, getTitle] = useState(null);
  const [Description, getDescription] = useState(null);
  function queueTask() {}
  return (
    <div className="App">
      <div class="addTask">
        <h1>Add Task</h1>
        <label>Enter Title: </label>
        <input
          id="title"
          type="text"
          placeholder="Enter Title"
          value={Title}
          onChange={(e) => {
            getTitle(e.target.value);
          }}
        />
        <br></br>
        <label>Enter Description: </label>
        <input
          id="description"
          type="text"
          placeholder="Enter Description"
          value={Description}
          onChange={(e) => {
            getDescription(e.target.value);
          }}
        />
        <br></br>
        <button id="bt_Submit" /*onClick={queueTask()}*/>Submit</button>
      </div>
      <div id="TaskQueue">
        <br></br>
      </div>
    </div>
  );
}
export default App;
