import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Preloader from "./Preloader";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function MainPage(props) {
  const classes = useStyles();
  const [preloader, setPreloader] = useState(true);

  setTimeout(() => {
    setPreloader(false);
  }, 2000);

  return (
    <div className="mainPage">
      {preloader && <Preloader />}
      {!preloader && (
        <div>
          <h2>Космос</h2>
          <List
            className={classes.list}
            component="nav"
            aria-label="main mailbox folders"
          >
            {props.menuItems.map((item) => (
              <ListItemLink href={item.url}>{item.title}</ListItemLink>
            ))}
          </List>
        </div>
      )}
    </div>
  );
}
