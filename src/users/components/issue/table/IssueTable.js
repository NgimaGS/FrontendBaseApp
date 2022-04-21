import MaterialTable from "@material-table/core";
import React, { createRef } from "react";
import { tableIcons } from "../../../../app/component/table/tableIcons";
import useIssueTable from "../../../hooks/component/issue/table/useIssueTable";

const IssueTable = () => {
  const { data, columns, handleUpdateIssue } = useIssueTable();
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
              handleUpdateIssue(newData);
              resolve();
            });
          },
        }}
        options={{
          actionsColumnIndex: 6,
        }}
      />
    </div>
  );
};

export default IssueTable;
