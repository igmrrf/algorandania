import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import ListItemLink from "../../../components/shared-components/link";
import Settings from "@material-ui/icons/Settings";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MonetizationOnOutlined from "@material-ui/icons/MonetizationOnOutlined";

const NavigationList = [
  { title: "Dashboard", to: "/account/dashboard", icon: <DashboardIcon /> },
  { title: "Deposit", to: "/account/deposit", icon: <AccountBalanceIcon /> },
  {
    title: "Withdraw",
    to: "/account/withdrawal",
    icon: <MonetizationOnOutlined />,
  },
  {
    title: "Referral",
    to: "/account/referral",
    icon: <PeopleIcon />,
  },
  {
    title: "Transactions",
    to: "/account/transactions",
    icon: <BarChartIcon />,
  },
  { title: "Support", to: "/account/support", icon: <LayersIcon /> },
  { title: "Settings", to: "/account/settings", icon: <Settings /> },
];

export const mainListItems = (
  <div>
    {NavigationList.map((navigation) => (
      <ListItemLink
        key={navigation.title}
        primary={navigation.title}
        to={navigation.to}
        icon={navigation.icon}
      />
    ))}
  </div>
);
