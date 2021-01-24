import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  post: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  postTitle: {
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: "0em",
  },
  postText: {
    fontSize: "1rem",
    fontFamily: "Arial",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  console.log(posts);

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <div className={classes.post}>
          <h3 className={classes.postTitle}>{post.title}</h3>
          <p className={classes.postText}>{post.text}</p>
          <p className={classes.postText}>{post.secondPar}</p>
        </div>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
