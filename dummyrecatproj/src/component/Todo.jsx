// import "./Todo.css";
// import { useState } from "react";

// function Todo() {
//   const [Title, getTitle] = useState(null);
//   const [Description, getDescription] = useState(null);
//   const [Index,setIndex] = useState(-1);
//   const [items , setitems] = useState([{
//     id : "001",
//     name : "default task",
//     desc : "default desc",
//     status : false,
//   },]);
//   const edit = (eleId)=>{
//     items.forEach((e,index)=>{
//       if (e.id === eleId){
//         setIndex(index)
//         getTitle(e.name)
//         getDescription(e.desc)
//       } 
//     })

//   };
//   const deletee = (eleId)=>{
//     setitems(items.filter((ele) => ele.id !== eleId))
//   };
  
//   let tasklist = items.map((ele,index)=>{
//     if (index < items.length - 1) {
//         return (
//             <div /*key={ele.id}*/ id="taskqueue">
//                 <div id = "group">
//                     <div>
//                     <h4>{ele.name}</h4>
//                     <p>{ele.desc}</p>
//                     </div>
//                     <button id="edit" onClick={()=>{edit(ele.id)}}>Edit</button>
//                     <button id="delete" onClick={()=>{deletee(ele.id)}
                        
//                     }>Delete</button>
//                 </div>
//             </div>
//         );
//     }
    
// }) 

//   function queueTask() {
//     if(!Title || !Description){
//         alert("Fill Data");
//     }
//     else{
//         const allInputData = {
//           id : (Index !== -1) ? Index : new Date().getTime().toString(),
//             name : Title,
//             desc : Description,
//         };
//         // const updatedItems = (Index !== -1)
//         // ? items.map((item) => (item.id === Index ? allInputData : item))
//         // : [allInputData, ...items];
//         setitems([allInputData,...items]);
//         // setitems(updatedItems)
//         getTitle("")
//         getDescription("")
//         setIndex(-1)
//     }
    
//   }
  
//   return (
//     <div className="Todo">
//       <div class="addTask">
//         <h1>Add Task</h1>
//         <label>Enter Title: </label>
//         <input
//           id="title"
//           type="text"
//           placeholder="Enter Title"
//           value={Title}
//           onChange={(e) => {
//             getTitle(e.target.value);
//           }}
//         />
//         <br></br>
//         <label>Enter Description: </label>
//         <input
//           id="description"
//           type="text"
//           placeholder="Enter Description"
//           value={Description}
//           onChange={(e) => {
//             getDescription(e.target.value);
//           }}
//         />
//         <br></br>
//         <button id="bt_Submit" onClick={queueTask}>Submit</button>
//       </div>
//         {tasklist}
//     </div>
//   );
// }
// export default Todo;
import "./Todo.css";
import { useState } from "react";

function Todo() {
  const [Title, getTitle] = useState(null);
  const [Description, getDescription] = useState(null);
  const [Index, setIndex] = useState(-1);
  const [items, setItems] = useState([
    {
      id: "001",
      name: "default task",
      desc: "default desc",
      status: false,
    },
  ]);

  const edit = (eleId) => {
    items.forEach((e, index) => {
      if (e.id === eleId) {
        setIndex(index);
        getTitle(e.name);
        getDescription(e.desc);
      }
    });
  };

  const deletee = (eleId) => {
    setItems(items.filter((ele) => ele.id !== eleId));
  };

  const queueTask = () => {
    if (!Title || !Description) {
      alert("Fill Data");
    } else {
      if (Index !== -1) {
        // If Index is not -1, update the existing item
        const updatedItems = items.map((item, index) =>
          index === Index
            ? {
                ...item,
                name: Title,
                desc: Description,
              }
            : item
        );
        setItems(updatedItems);
      } else {
        // If Index is -1, add a new item
        const allInputData = {
          id: new Date().getTime().toString(),
          name: Title,
          desc: Description,
        };
        setItems([allInputData, ...items]);
      }

      getTitle("");
      getDescription("");
      setIndex(-1);
    }
  };

  let tasklist = items.map((ele, index) => {
    if (index < items.length - 1) {
      return (
        <div key={ele.id} id="taskqueue">
          <div id="group">
            <div>
              <h4>{ele.name}</h4>
              <p>{ele.desc}</p>
            </div>
            <button id="edit" onClick={() => edit(ele.id)}>
              Edit
            </button>
            <button id="delete" onClick={() => deletee(ele.id)}>
              Delete
            </button>
          </div>
        </div>
      );
    }
  });

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
        <button id="bt_Submit" onClick={queueTask}>
          Submit
        </button>
      </div>
      {tasklist}
    </div>
  );
}

export default Todo;
