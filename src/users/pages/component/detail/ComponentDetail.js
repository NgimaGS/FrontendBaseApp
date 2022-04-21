import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import ComponentTaskTable from "../../../components/component/table/ComponentTaskTable";
import { useGetComponentById } from "../../../hooks/api/component/useComponent";

const ComponentDetail = () => {
  const { params: { id } = {} } = useRouteMatch();
  const { data } = useGetComponentById(id);
  return (
    <>
      <Box sx={{ margin: " 5px 0 5px 13px" }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h4>Name: {data?.name}</h4>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h4>Description: {data?.description}</h4>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h4>Created By: {data?.createdBy}</h4>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h4>Assigned To: {data?.assignedTo}</h4>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <div>
        <ComponentTaskTable tasks={data?.Tasks} />
      </div>
    </>
  );
};

export default ComponentDetail;
