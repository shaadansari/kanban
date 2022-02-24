import React, { useState } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";


export default function Column(props) {
  const [search, setSearch] = useState("");

  const newList = props.tasks;

  const searchList = newList.filter((list) =>
    list.content.toLowerCase().includes(search.toLowerCase())
  );

  function handleonChange(e) {
    const value = e.target.value;

    setSearch(value);
  }

  return (
    <div className="container">
      <input
        className="container-search"
        type="search"
        placeholder="search"
        value={search}
        onChange={handleonChange}
      />
      <div className="title">{props.column.title}</div>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            <div
              className={`${
                snapshot.isDraggingOver ? "container-act" : "container-tasklist"
              }`}
              {...provided.droppableProps}
            >
              {(search ? searchList : props.tasks).map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}

              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
}
