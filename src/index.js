import React from "react";
import  ReactDOM  from "react-dom/client";

import TodoList from "./components/todo_list";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    
      <TodoList/>
   
  </div>
);
