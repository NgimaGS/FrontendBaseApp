import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppLayout from "../app/layout/AppLayout";
import UserLogin from "../auth/pages/login/UserLogin";
import UserRegistration from "../auth/pages/registration/UserRegistration";
import ProjectRoutes from "./projectRoutes/ProjectRoutes";
import ProtectedRoute from "./ProtectedRoute";

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserLogin} />
        <Route path="/register" exact component={UserRegistration} />
        <Route path="/login" exact component={UserLogin} />

        <ProtectedRoute redirectTo={"/login"}>
          <AppLayout>
            <ProjectRoutes />
          </AppLayout>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default AppRoute;
