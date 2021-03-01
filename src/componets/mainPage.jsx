import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Preloader from "./Preloader";
import { Avatar, Badge, Fab } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 360,
    backgroundColor: "#eaeaea",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  name: {
    marginLeft: theme.spacing(2),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function MainPage(props) {
  const classes = useStyles();
  const [preloader, setPreloader] = useState(true);
  const [button, setButton] = useState(true);
  setTimeout(() => {
    setPreloader(false);
  }, 2000);

  return (
    <div className="mainPage">
      {preloader && <Preloader />}
      {!preloader && (
        <div>
          <Badge variant="dot" color="primary">
            <Avatar className={classes.purple}>RL</Avatar>
          </Badge>
          <span className={classes.name}>Ruslan Lukoanov</span>
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
      {button && (
        <Fab
          onClick={() => setButton(false)}
          className={classes.fab}
          aria-label="like"
          color="secondary"
        >
          <FavoriteIcon />
        </Fab>
      )}
      {!button && (
        <Fab className={classes.fab} disabled>
          Спасибо за лайк
        </Fab>
      )}
    </div>
  );
}
