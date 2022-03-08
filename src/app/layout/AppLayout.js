import { makeStyles } from "@mui/styles";
import React from "react";
import SideDrawer from "../component/drawer/SideDrawer";
import Navbar from "../component/navbar/Navbar";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const AppLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <main>
      <>
        <div className={classes.container}>
          <div className="side-nav">
            <SideDrawer />
          </div>
          <div className="content-section">
            <div>
              <Navbar />
              <div className="content">{children}</div>
            </div>
          </div>
        </div>
      </>
    </main>
  );
};

export default AppLayout;
