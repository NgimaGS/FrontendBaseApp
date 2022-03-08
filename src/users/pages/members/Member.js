import React, { useState } from "react";
import CardContentHeader from "../../../app/component/card/header/CardContentHeader";
import AddMemberForm from "../../components/member/form/AddMemberForm";
import MemberTable from "../../components/member/table/MemberTable";

const Member = () => {
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
        <CardContentHeader
          title="Members"
          type="add"
          onClick={() => handleOpen()}>
          <AddMemberForm open={open} handleClose={() => handleClose()} />
        </CardContentHeader>
      </div>

      <div className="card-content-cust">
        <div style={{ maxWidth: "100%" }}>
          <MemberTable />
        </div>
      </div>
    </>
  );
};

export default Member;
