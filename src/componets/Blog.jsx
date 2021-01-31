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
import usePosts from "../posts/posts";
import useSidebar from "../posts/sidebar";
import useMainPost from "../posts/mainFeaturedPost";
import useFeaturedPosts from "../posts/featuredPosts";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Blog(props) {
  const classes = useStyles();

  //Текст в зависимости от type
  const sidebar = useSidebar(props.type);
  const mainFeaturedPost = useMainPost(props.type);
  const posts = usePosts(props.type);
  const featuredPosts = useFeaturedPosts(props.type);

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
            <Main title={props.title} posts={posts} />
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
        title="Космос"
        description="Сайт сделан учеником 10А класса , гимназии №22"
      />
    </React.Fragment>
  );
}
