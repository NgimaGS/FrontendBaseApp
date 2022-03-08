import MaterialTable from "material-table";
import React, { createRef } from "react";
import { tableIcons } from "../../../../app/component/table/tableIcons";
import useTaskTable from "../../../hooks/component/task/table/useTaskTable";

const TaskTable = () => {
  const { data, columns } = useTaskTable();
  const tableRef = createRef();
  return (
    <div className="TableMaterial">
      <MaterialTable
        tableRef={tableRef}
        icons={tableIcons}
        data={data}
        columns={columns}
        title={""}
        editable={{
          onRowUpdate: (newData, oldData) => {
            return new Promise((resolve, reject) => {
              resolve();
            });
          },
        }}
      />
    </div>
  );
};

export default TaskTable;
