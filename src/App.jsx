import React, { useContext } from "react";

import Column from "./Column";
import "./index.css";
import { DragDropContext } from "react-beautiful-dnd";
import { DataContext } from "./Context";
import Navbar from "./Nav";
import Add from "./Add";

function App() {
  const { data, onDragEnd } = useContext(DataContext);

  const datas = data.columnOrder.map((columnId) => {
    const column = data.columns[columnId];
    const tasks = column.taskIds.map((taskId) => taskId);

    return <Column key={column.id} column={column} tasks={tasks} />;
  });

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <div className="div-app">
        {" "}
        <Navbar />
        <div className="container-app">
          {" "}
          {datas} 
        </div>
        <Add />
      </div>
    </DragDropContext>
  );
}

export default App;
