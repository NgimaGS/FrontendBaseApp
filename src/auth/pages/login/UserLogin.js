import { Card, CardContent } from "@mui/material";
import React from "react";
import LoginForm from "../../component/form/LoginForm";

function UserLogin() {
  return (
    <div className="registrationContainer">
      <Card
        className="registrationCard"
        variant="outlined"
        sx={{ display: "flex" }}>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default UserLogin;
