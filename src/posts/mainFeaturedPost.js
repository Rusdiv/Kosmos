const mainFeaturedPost = {
  title: "Большое название )",
  description:
    "Текст про что-то бла бла бла бла бла бла бла бла бла бла бла бла",
  image: "https://source.unsplash.com/random/?Galaxy,stars,blackHole",
  imgText: "main image description",
  linkText: "Продолжить чтение...",
};

const mainPostHook = (props) => {
  if (props === "people") {
    mainFeaturedPost.title = "Юрий Алексеевич Гагарин";
    mainFeaturedPost.description =
      " советский космонавт, первый человек, побывавший в космосе";
    mainFeaturedPost.image =
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Yuri_Gagarin_and_Zakaria_Mohieddin_05-02-1962_Cairo_Almaza_Air_Base_Egypt.jpg";
  }
  return mainFeaturedPost;
};

export default mainPostHook;
