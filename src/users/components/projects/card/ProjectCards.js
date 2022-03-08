import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const ProjectCards = ({ data }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/project-${data?.id}`);
  };
  return (
    <>
      <div>
        <Card
          elevation={12}
          sx={{ mr: 2, mt: 1, cursor: "pointer" }}
          onClick={() => handleClick()}>
          <CardContent>
            <Typography>Name: {data?.name}</Typography>
            <Typography>Type: {data?.type}</Typography>
            <Typography>Created by: {data?.createdBy}</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProjectCards;
