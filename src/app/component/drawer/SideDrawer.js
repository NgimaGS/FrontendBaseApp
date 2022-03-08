import {
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MapIcon from "@mui/icons-material/Map";
import MediationIcon from "@mui/icons-material/Mediation";
import SettingsIcon from "@mui/icons-material/Settings";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const drawerWidth = 240;

const marginHeight = 70;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: marginHeight,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop: marginHeight,
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: "45%",
  marginBottom: "10%",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const SideDrawer = () => {
  const history = useHistory();
  const handleNavClick = (e) => {
    const navPage = e.currentTarget.value.toLowerCase();
    if (navPage === "kanban-board") {
      history.push(`/project/kanban`);
    } else {
      history.push(`/project/${navPage}`);
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  let itemList = [
    {
      text: "Kanban-Board",
      icon: <ViewKanbanIcon />,
    },
    {
      text: "Roadmap",
      icon: <MapIcon />,
    },
    {
      text: "Issues",
      icon: <PriorityHighIcon />,
    },
    {
      text: "Components",
      icon: <MediationIcon />,
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
    },
  ];

  const location = useLocation();

  let varient = "permanent";

  if (location.pathname === "/projects") {
    varient = "temporary";
  }

  return (
    <div>
      <Drawer variant={varient} open={drawerOpen}>
        <DrawerHeader>
          {!drawerOpen ? (
            <IconButton onClick={handleDrawerOpen}>
              <ChevronRightIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {itemList.map((item, index) => {
            const { text, icon } = item;
            return (
              <ListItem button key={text}>
                <Button
                  key={text}
                  value={text}
                  onClick={(e) => handleNavClick(e)}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText sx={{ color: "#404040" }} primary={text} />
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
