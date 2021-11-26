import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function ChatList({ chats, classes }) {
  return (
    <div className={classes.topicsWindow}>
      {/* //   {chats.map((value) => { */}
      {/* //     return (
    //       <div>
    //         <li>
    //           <Link href={value.id}>{value.name}</Link>
    //         </li>
    //         <Routes>
    //           <Route path={`${value.id}`} />
    //         </Routes>
    //       </div>
    //     );
    //   })} */}

      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {chats.map((value) => {
          return (
            <ListItem key={value.id} disablePadding>
              <ListItemButton>
                <Routes>
                  <Route path={`/${value.id}`} />
                </Routes>
                <ListItemAvatar>
                  <Avatar src={`/static/images/avatar/${value + 1}.jpg`} />
                </ListItemAvatar>
                <ListItemText primary={value.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
