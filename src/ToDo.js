import React from "react";

const ToDo = ({ toDo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={toDo.id}
      key={toDo.id + toDo.task}
      name="todo"
      value={toDo.id}
      onClick={handleClick}
      className={toDo.complete ? "todo strike" : "todo"}
    >
      {toDo.task}
    </div>
  );
};

export default ToDo;
