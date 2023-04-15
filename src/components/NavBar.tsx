import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  HomeOutlined,
  SelfImprovement,
  Dashboard,
  Spa,
  NaturePeople,
  Favorite,
  Book,
  AccountCircle
} from "@mui/icons-material";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const data = [

  { name: "DashBoard", icon: <Dashboard /> ,link: "/"} ,
  { name: "Growth", icon: <Spa /> ,link: "/habits"},
  { name: "Guidance", icon: <Book /> ,link: "/guidance" },
  { name: "Meditation", icon: <SelfImprovement /> ,link: "/meditation" },
  { name: "Recess", icon: <NaturePeople /> ,link: "/recess"},
  { name: "Affirmations", icon: <Favorite /> ,link: "/affirmations"},
  { name: "Profile", icon: <AccountCircle/> ,link: "/profile" },

];

function NavBar() {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <Link to={{
          pathname: item.link,
        }} style={{textDecoration: 'none'}}>
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
        </Link>
      ))}
    </div>
  );
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Click me</Button>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  );
}

export default NavBar;