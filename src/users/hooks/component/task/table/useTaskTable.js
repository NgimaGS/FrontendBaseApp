import { useGetTaskByProjectId } from "../../../api/task/useTask";

const useTaskTable = () => {
  const { data } = useGetTaskByProjectId();

  const columns = [
    { title: "Id", field: "id", editable: "never" },
    { title: "Title", field: "name" },
    { title: "Type", field: "type" },
    { title: "Description", field: "description" },
    { title: "Status", field: "status" },
    { title: "Assigned To", field: "assignedTo" },
  ];
  return { data, columns };
};

export default useTaskTable;
