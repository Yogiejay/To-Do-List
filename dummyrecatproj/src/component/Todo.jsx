import "./Todo.css";
import { useState } from "react";

function Todo() {
  const [Title, getTitle] = useState(null);
  const [Description, getDescription] = useState(null);
  const [items , setitems] = useState([{
    id : "001",
    name : "default task",
    desc : "default desc",
    status : false,
  },]);
  const edit = ()=>{
    
  };
  
  let tasklist = items.map((ele,index)=>{
    if (index < items.length - 1) {
        return (
            <div key={ele.id} id="taskqueue">
                <div id = "group">
                    <div>
                    <h4>{ele.name}</h4>
                    <p>{ele.desc}</p>
                    </div>
                    <button id="edit" onClick={edit}>Edit</button>
                    <button id="delete" onClick={()=>{
                        deletee(ele.id)
                    }}>Delete</button>
                </div>
            </div>
        );
    }
    
}) 
const deletee = (eleId)=>{
    setitems(items.filter((ele) => ele.id !== eleId))
  };
  function queueTask() {
    if(!Title || !Description){
        alert("Fill Data");
    }
    else{
        const allInputData = {
            id : new Date().getTime().toString(),
            name : Title,
            desc : Description,
        };
        setitems([allInputData,...items]);
    }
    
  }
  
  return (
    <div className="Todo">
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
        <button id="bt_Submit" onClick={queueTask}>Submit</button>
      </div>
        {tasklist}
    </div>
  );
}
export default Todo;
