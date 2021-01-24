let featuredPosts = [];

export default function featuredPostsHook(props) {
  if (props === "people") {
    featuredPosts = [
      {
        title: "Алексей Архипович Леонов",
        date: "Янв 24",
        description:
          "лётчик-космонавт СССР № 11, первый человек, вышедший в открытый космос.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f8/Alexei_Leonov.jpg",
        imageText: "Алексей Архипович Леонов",
      },
      {
        title: "Валентина Владимировна Терешкова",
        date: "Янв 24",
        description: "лётчик-космонавт СССР, первая в мире женщина-космонавт",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4a/Valentina_Tereshkova_%282017-03-06%29.jpg",
        imageText: "Валентина Владимировна Терешкова",
      },
    ];
  }
  return featuredPosts;
}
