import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  addComponent,
  getComponentById,
  getProjectComponent,
} from "../../../api/component/component";

export const useGetComponentByProjectId = () => {
  const { project } = useSelector((state) => state.project);
  return useQuery(
    ["getComponent", project?.id],
    () => getProjectComponent(project?.id),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
};

export const useGetComponentById = (id) => {
  return useQuery(["ComponentById", id], () => getComponentById(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useAddComponent = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["component"], (values) => addComponent(values), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getComponent"]);
      toast.success("Succesfully added Component");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
