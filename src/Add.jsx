import React, { useState, useContext } from "react";
import { DataContext } from "./Context";

function Add() {
  const { data, add, handleOnSubmit, handleAdd, handleTitle, title } =
    useContext(DataContext);

  const newList = data.columns["column-1"].taskIds;

  const newListId = data.columns["column-1"];

  return (
    <div className="div-add">
      {add ? (
        <form onSubmit={(e) => handleOnSubmit(newList, newListId, e)}>
          <input
            className="div-add-inp"
            type="text"
            placeholder="title.."
            value={title}
            onChange={(e) => handleTitle(e)}
          ></input>
          <button className="div-add-btn">add</button>
        </form>
      ) : (
        <button className="div-add-btn" onClick={() => handleAdd()}>
          add
        </button>
      )}
    </div>
  );
}

export default Add;
