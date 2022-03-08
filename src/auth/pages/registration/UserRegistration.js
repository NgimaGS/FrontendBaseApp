import { Card, CardContent } from "@mui/material";
import React from "react";
import RegistrationForm from "../../component/form/RegistrationForm";

function UserRegistration() {
  return (
    <div className="registrationContainer">
      <Card
        className="registrationCard"
        variant="outlined"
        sx={{ display: "flex" }}>
        <CardContent>
          <RegistrationForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default UserRegistration;
