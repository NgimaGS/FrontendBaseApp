import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  addMember,
  getMemberById,
  getMembersByProjectId,
} from "../../../api/member/member";
import { useSelector } from "react-redux";

export const useGetMembersByProjectId = () => {
  const { project } = useSelector((state) => state.project);
  return useQuery(
    ["getMember", project?.id],
    () => getMembersByProjectId(project?.id),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
};

export const useGetMemberById = (id) => {
  return useQuery(["memberById", id], () => getMemberById(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useAddMember = ({ onSuccess }) => {
  const { project } = useSelector((state) => state.project);
  const queryClient = useQueryClient();
  return useMutation(["member"], (values) => addMember(values), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getMember", project?.id]);
      toast.success("Succesfully added member");
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (err, _variables, _context) => {
      toast.error(`error: ${err.message}`);
    },
  });
};
