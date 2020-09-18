import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ListItemLink from "../../../components/shared-components/link";
import Settings from "@material-ui/icons/Settings";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MonetizationOnOutlined from "@material-ui/icons/MonetizationOnOutlined";

const NavigationList = [
  { title: "Dashboard", to: "/app/dashboard", icon: <DashboardIcon /> },
  { title: "Banks", to: "/app/banks", icon: <AccountBalanceIcon /> },
  { title: "Users", to: "/app/users", icon: <PeopleIcon /> },
  {
    title: "Deposited Users",
    to: "/app/deposited",
    icon: <MonetizationOnOutlined />,
  },
  { title: "Transactions", to: "/app/transactions", icon: <BarChartIcon /> },
  { title: "Support", to: "/app/support", icon: <LayersIcon /> },
  { title: "Settings", to: "/app/settings", icon: <Settings /> },
];

export const mainListItems = (
  <div>
    {NavigationList.map((navigation) => (
      <ListItemLink
        primary={navigation.title}
        to={navigation.to}
        icon={navigation.icon}
      />
    ))}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
