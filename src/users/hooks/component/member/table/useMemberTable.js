import { useGetMembersByProjectId } from "../../../api/member/useMember";

const useMemberTable = () => {
  const { data } = useGetMembersByProjectId();

  const columns = [
    { title: "id", field: "id" },
    { title: "name", field: "User", render: (rowData) => rowData?.User?.name },
    { title: "Type", field: "Type" },
    {
      title: "Contact",
      field: "User",
      render: (rowData) => rowData?.User?.phoneNumber,
    },
    { title: "Joined Date", field: "createdAt" },
  ];
  return { data, columns };
};

export default useMemberTable;
