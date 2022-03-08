import { Route, Switch } from "react-router-dom";
import Kanban from "../../users/pages/kanban/Kanban";
import Member from "../../users/pages/members/Member";
import Project from "../../users/pages/Project/Project";
import Projects from "../../users/pages/projects/Projects";
import Task from "../../users/pages/task/Task";

const ProjectRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/projects" exact component={Projects} />
        <Route path="/project/members" exact component={Member} />
        <Route path="/project/task" exact component={Task} />
        <Route path="/project/kanban" exact component={Kanban} />

        <Route path="/project-:id" exact component={Project} />
      </Switch>
    </>
  );
};

export default ProjectRoutes;
