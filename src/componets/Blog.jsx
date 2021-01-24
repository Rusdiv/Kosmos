import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import sections from "../posts/sections";
import sidebarHook from "../posts/sidebar";
import mainPostHook from "../posts/mainFeaturedPost";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const featuredPosts = [
  {
    title: "Название",
    date: "Nov 12",
    description: "Какой-то текст пока не знаю.",
    image: "https://source.unsplash.com/random/?Galaxy,stars,blackHole",
    imageText: "Image Text",
  },
  {
    title: "Название",
    date: "Nov 11",
    description: "Какой-то текст пока не знаю.",
    image: "https://source.unsplash.com/random/?Galaxy,stars,blackHole",
    imageText: "Image Text",
  },
];

const posts = [
  { title: "Ракета", text: "asd" },
  { title: "Ракета", text: "asd" },
  { title: "Ракета", text: "asd" },
];

export default function Blog(props) {
  const classes = useStyles();
  const sidebar = sidebarHook(props.type);
  const mainFeaturedPost = mainPostHook(props.type);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Космос" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Заголовок" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
