import MaterialTable from "material-table";
import React, { createRef } from "react";
import { tableIcons } from "../../../../app/component/table/tableIcons";
import useMemberTable from "../../../hooks/component/member/table/useMemberTable";

const MemberTable = () => {
  const { data, columns } = useMemberTable();
  const tableRef = createRef();
  return (
    <div className="TableMaterial">
      <MaterialTable
        tableRef={tableRef}
        icons={tableIcons}
        data={data}
        columns={columns}
        title={""}
      />
    </div>
  );
};

export default MemberTable;
