import React, { useState } from "react";
import initialData from "./initial-data";
import { nanoid } from "nanoid";
const DataContext = React.createContext();

function DataContextProvider(props) {
  const [data, setData] = useState(initialData);
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState("");

  function handleTitle(e) {
   
    const addTiltle = e.target.value;
    setTitle(addTiltle);
  }
  function handleAdd() {
    setAdd((preValue) => !preValue);
  }

  function handleOnSubmit(newList, newListId, e) {
    e.preventDefault();

    setAdd((preValue) => !preValue);

 

    newList.push({
      id: nanoid(2),
      content: title || "Tilte",
    });

    const newColumn = {
      ...newListId,
      taskIds: newList,
    };

    console.log(newColumn);

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    setData(newState);
  }

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;

    const drag = data.columns[source.droppableId].taskIds.find(
      (task) => task.id === draggableId
    );

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, drag);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, drag);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setData(newState);
  }

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        handleOnSubmit,
        add,
        handleAdd,
        setAdd,
        handleTitle,
        title,
        onDragEnd,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
