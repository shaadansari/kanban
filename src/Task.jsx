import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef}>
          <div
            className={` ${
              snapshot.isDragging ? "container-active" : "container-task"
            }`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {props.task.content}
          </div>
        </div>
      )}
    </Draggable>
  );
}
