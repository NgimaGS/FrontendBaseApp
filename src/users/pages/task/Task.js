import React, { useState } from "react";
import CardContentHeader from "../../../app/component/card/header/CardContentHeader";
import AddTaskForm from "../../components/task/form/AddTaskForm";
import TaskTable from "../../components/task/table/TaskTable";

const Task = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div>
        <CardContentHeader title="Task" type="add" onClick={() => handleOpen()}>
          <AddTaskForm open={open} handleClose={() => handleClose()} />
        </CardContentHeader>
      </div>

      <div className="card-content-cust">
        <div style={{ maxWidth: "100%" }}>
          <TaskTable />
        </div>
      </div>
    </>
  );
};

export default Task;
